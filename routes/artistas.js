const express = require("express");
const router = express.Router();

const artistasController = require ("../controllers/artistasController");
router.get("/", artistasController.list);

//listar
router.get("/", artistasController.list);
//buscar 
router.get("/:id", artistasController.show);
//crear 
router.post("/", artistasController.store);
//update 
router.put("/:id", artistasController.update);
//delete 
router.delete("/:id", artistasController.delete);


module.exports = router;