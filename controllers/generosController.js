const DB = require("../database/models");
const Op = DB.Sequelize.Op;

module.exports ={
    list: (req, res)=>{
        DB.Genero
            .findAll(({include:[{association:"canciones"} ]}))
            .then(generos => {
                return res.status(200).json({
                    total: generos.length,
                    data: generos,
                    status: 200
                }) 
       
            })
    },
    show:(req, res)=>{
        DB.Genero
            .findByPk(req.params.id,({include:[{association:"canciones"} ]}))
            .then(genero =>{
                return res.status(200).json({
                    data: genero,
                    status: 200
                })
            })
    },

    store: (req, res)=>{
        DB.Genero
        .create(req.body)
        .then (genero =>{
            return res.status(200).json({
                data: genero,
                status: 200, 
                created: "ok"
            })
        })
    },
    delete:(req, res)=>{
        DB.Genero
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
        DB.Genero
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