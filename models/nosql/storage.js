//llamada a mongoose 
const mongoose = require('mongoose')

//Declaración del esquema 
const StorageScheme = new mongoose.Schema({
    url: {
        type: String
    },
    filename: {
        type: Number,
    }
}, 
{
    timestamps: true,    //TODO createdAt, updatedAt,
    versionkey: false,
});

module.wxports = mongoose.model("storage", StorageScheme)