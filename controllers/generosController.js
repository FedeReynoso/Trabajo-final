const DB = require("../database/models");
const Op = DB.Sequelize.Op;

module.exports ={
    list:(req, res)=> {
        DB.Genero
            .findAll()
            .then(generos =>{
                return res.status(200).json({
                    total: generos.length,
                    data: generos,
                    status: 200
                })
            })
    },
}

// falta agregar que retorne las canciones que tiene cada genero