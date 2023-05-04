//llamada a mongoose 
const mongoose = require('mongoose')

//Declaración del esquema 
const UserScheme = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    role: {
        type: ["user", "admin"],
        default: "user",
    }


}, {
    timestamps: true,    //TODO createdAt, updatedAt,
    versionkey: false,
});

module.wxports = mongoose.model("users", UserScheme)