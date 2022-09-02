const DB = require("../database/models");
const Op = DB.Sequelize.Op;

module.exports ={

    list:(req, res)=> {
        DB.Cancion
            .findAll()
            .then(canciones =>{
                return res.status(200).json({
                    total: canciones.length,
                    data: canciones,
                    status: 200
                })
            })
    },

    show:(req, res)=>{
        DB.Cancion
            .findAll()
            .then(cancion =>{
                return res.status(200).json({
                    data: cancion,
                    status: 200
                })
            })
    },

    store:(req, res)=> {

        DB.Cancion
            .create(req.body)
            .then (cancion =>{
                return res.status(200).json({
                    data: cancion,
                    status: 200, 
                    created: "ok"
                })
            })
    },

    delete:(req, res)=>{
        DB.Cancion
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
        DB.Cancion
        .replace({
            where:{
                id:req.params.id
            }
        })
        .then(response =>{
            return res.json(response)
        })
        
    }


    //     DB.Cancion
    //         .replace({
    //             where:{
    //                 id: req.params.id
    //             }
    //         })
    //         .then(response =>{
    //             return res.json(response)
    //         })
}
