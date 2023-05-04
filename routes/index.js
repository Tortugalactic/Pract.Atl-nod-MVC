const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (filename) => {
    // tracks.js => [tracks, js]
    return filename.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file) //USERS
    if(name !== 'index'){
        console.log(`Cargando la ruta_jiji: ${name}`)
        router.use(`/${name}`, require(`./${file}`))
    }
})


module.exports = router