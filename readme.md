# CAN Cities API

### REST API for getting Canadian cities and their provinces in json,csv, or xml


# Built with:
<div align="center">
<img src="http://3con14.biz/code/_data/js/intro/js-logo.png" alt="JS" width="100"> 
<img src="https://github.com/MarioTerron/logo-images/blob/master/logos/npm.png" alt="npm" width="200">
<img src="https://github.com/MarioTerron/logo-images/blob/master/logos/expressjs.png" alt="express" width="130">
<img src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="nodejs" width="150">
<img src="https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png" alt="mysql" width="180">
</div>

# Usage

### Each user is limited to 100 requests per min

## Cities
```js
# json format
GET /api/cities?format=json

# xml format
GET /api/cities?format=xml

# csv format
GET /api/cities?format=csv
```

## Provinces
```js
# json format
GET /api/provinces/{cityId}?format=json

# xml format
GET /api/provinces/{cityId}?format=xml

# csv format
GET /api/provinces/{cityI}?format=csv
```

# Author
Copyright © 2022, Davec876
