const mongoose = require("mongoose");       //Declaración de paquetes de mongoose

const dbConnect = () => {                   //Funcion arrow de conectar base de datos
    const DB_URI = process.env.DB_URI;
  
    mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("****CONEXIÓN CORRECTA****")
    })
    .catch((err) => {
      console.log("****ERROR DE CONEXIÓN****")
      console.log(err)
    });
  };

module.exports = dbConnect