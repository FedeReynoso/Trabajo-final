const DB = require("../database/models");
const Op = DB.Sequelize.Op;

module.exports ={

    list: (req, res)=>{
        DB.Artista
            .findAll()
            .then(artistas => {
                return res.status(200).json({
                    total: artistas.length,
                    data: artistas,
                    status: 200
                }) 
       
            })
    },

    show:(req, res)=>{
        DB.Artista
            .findByPk(req.params.id)
            .then(artista =>{
                return res.status(200).json({
                    data: artista,
                    status: 200
                })
            })
    },

    store: (req, res)=>{
        DB.Artista
        .create(req.body)
        .then (artista =>{
            return res.status(200).json({
                data: artista,
                status: 200, 
                created: "ok"
            })
        })
    },

    delete:(req, res)=>{
        DB.Artista
            .destroy({
                where:{
                    id: req.params.id
                }
            })
            .then(response =>{
                return res.json(response)
            })
    },

    update:(req, res)=>{
        DB.Artista
        .update(req.body, 
            {
            where:{
                id:req.params.id
            }
        })
        .then(response =>{
            return res.json(response)
        })
        
    }
}