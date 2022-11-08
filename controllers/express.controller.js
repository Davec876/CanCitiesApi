const upTimeFormat = require('../utils/uptime');
const { success, error, errorCatch } = require('../utils/apiResponse');
const logger = require('../utils/logger');
const pool = require('../utils/db');
const jsonToCsv = require('../utils/jsonToCSV');
const jsonToXml = require('../utils/jsonToXML');


module.exports = {
    // GET /alive req
    alive: async (req, res) => {
        if(req.method !== 'GET'){
            res.status(403).json(
                error(`${req.method} is not allowed for this route`, res.statCode)
            )
            return
        }
        try {
            res.status(200).json(
                success("It works!", {
                    uptime: upTimeFormat(process.uptime())
                })
            )
        } catch (err) {
            errorCatch(logger, res, error, err)
        }
    },
    // GET /cities req
    getAllCities: async (req, res) => {
        if(req.method !== 'GET'){
            res.status(403).json(
                error(`${req.method} is not allowed for this route`, res.statCode)
            )
            return
        }

        const { format } = req.query;
        if(!format){
            return res.status(200).send('Please specify your format')
        }
        if(format !== 'json' && format !== 'xml' && format !== 'csv'){
            return res.status(200).send('Invalid format selected.')
        }
        //try catch block for error handling on the chosen format
        try {
            let data = null

            const query = 'SELECT * FROM cities ORRDER BY name';
            const [rows] = await pool.execute(sql)

            switch (format) {
                case 'json':
                    data = rows
                    res.status(200).json(
                        success('Cities fetched successfully', data, res.statCode)
                    )
                    break
                case 'xml':
                    data = jsonToXml(rows, 'cities')
                    res.set('Content-Type', 'text/xml').status(200).send(data)
                    break
                case 'csv':
                    data = await jsonToCsv(rows, {
                        prependHeader: false
                    })
                    res.set('Content-Type', 'text/plain').status(200).send(data)
                    break  
            }
        } catch (err) {
            errorCatch(logger, res, error, err)
        }     
    },
    // GET /provinces/:cityId req
    getAllProvinesByCityId: async (req, res) => {
        if(req.method !== 'GET'){
            res.status(403).json(
                error(`${req.method} is not allowed for this route`, res.statCode)
            )
            return
        }

        const { id } = req.params
        const { format } = req.query
        if(!format){
            return res.status(200).send('Please specify your format')
        }
        if(format !== 'json' && format !== 'xml' && format !== 'csv'){
            return res.status(200).send('Invalid format selected.')
        }
        //try catch block for error handling on the chosen format
        try {
            let data = null

            const query = `SELECT * FROM provinces 
                            INNER JOIN cities ON
                            provinces.cityId = cities.id
                            WHERE cities.id = ?
                            ORDER BY provinces.name`

            const [rows] = await pool.execute(sql, [id])

            if(rows.length === 0){
                return res
                    .status(200)
                    .json(error(`${id} is not a valid city id`, res.statCode))
            }

            switch (format) {
                case 'json':
                    data = rows
                    res.status(200).json(
                        success('Provinces fetched successfully', data, res.statCode)
                    )
                    break
                case 'xml':
                    data = jsonToXml(rows, 'city')
                    res.set('Content-Type', 'text/xml').status(200).send(data)
                    break
                case 'csv':
                    data = await jsonToCsv(rows, {
                        prependHeader: false
                    })
                    res.set('Content-Type', 'text/plain').status(200).send(data)
                    break  
            }
        } catch (err) {
            errorCatch(logger, res, error, err)
        }     
    }
}