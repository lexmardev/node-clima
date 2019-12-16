const { argv } = require('./config/yargs');
const { getGeo } = require('./geo/geo')
const { getClima } = require('./clima/clima')

const getInfo = async(direccion) => {
    try {
        const coordenadas = await getGeo(direccion);
        const temperatura = await getClima(coordenadas.lat, coordenadas.lon);
        return `El clima de ${ coordenadas.direccion } es de ${ temperatura}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);