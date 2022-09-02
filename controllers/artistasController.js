const DB = require("../database/models");
const Op = DB.Sequelize.Op;

module.exports ={
    list:(req, res)=> {
        DB.Artista
            .findAll()
            .then(artistas =>{
                return res.status(200).json({
                    total: artistas.length,
                    data: artistas,
                    status: 200
                })
            })
    },
}