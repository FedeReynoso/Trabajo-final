const DB = require("../database/models");
const Op = DB.Sequelize.Op;

module.exports ={
    list: (req, res)=>{
        DB.Album
            .findAll()
            .then(albumes => {
                return res.status(200).json({
                    total: albumes.length,
                    data: albumes,
                    status: 200
                }) 
       
            })
    },


   store: (req, res)=>{
    DB.Album
    .create(req.body)
    .then (album =>{
        return res.status(200).json({
            data: album,
            status: 200, 
            created: "ok"
        })
    })
},
}
