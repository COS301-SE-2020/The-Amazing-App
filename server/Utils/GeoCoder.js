const NodeGeoCoder = require('node-geocoder')

const option = {
    provider: process.env.GeoCoderProvider,
    httpAdapter: 'https',
    apiKey: process.env.GeoCoderApiKey,
    formatter: null,
}

const  geocoder = NodeGeoCoder(option);
module.exports  = geocoder;