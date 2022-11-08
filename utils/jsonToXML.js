const parser = require('fast-xml-parser').j2xParser
const he = require('he')

//function to convert json to xml
module.exports = (json, name) => {
    let options = {
        attributeNamePrefix : "@",
        textNodeName: '$',
        ignoreAttributes : false,
        tagValueProcessor : a => 
            he.encode(a.toString(), {useNamedReferences: false}) // default is a=>a
    }
    //creating a new parser object for the xml conversion
    const parser = new parser(options)
    json = name === 'city' ? {city: json}: {province: json}
    let xml = parser.parse(json)

    //returning the xml
    return `<?xml version="1.0" encoding="UTF-8"?>${
        name === 'city'
            ? `<city>${xml}</city>`
            : `<province>${xml}</province>`
    }`
}