const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=c3067d6fff8b9bb30d5408c878441bc5&units=imperial`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}