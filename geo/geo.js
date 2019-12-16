const axios = require('axios');

const getGeo = async(direccion) => {
    const encondedUrl = encodeURI(direccion); //preparar el parametro con espacios a una url valida

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encondedUrl}`,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': 'cf5f70d0admshc7bb9c8e307557dp125fccjsnc6330b3d974f'
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }

    const data = resp.data.Results[0];
    return {
        direccion: data.name,
        lat: data.lat,
        lon: data.lon
    };

    // instance.get()
    //     .then(resp => console.log(resp.data.Results[0]))
    //     .catch(err => console.log('Error de axios', err));
}

module.exports = {
    getGeo
}