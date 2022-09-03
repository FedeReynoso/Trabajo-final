const express = require("express");
const router = express.Router();

const cancionesController = require ("../controllers/cancionesController");

//listar
router.get("/", cancionesController.list);
//buscar 
router.get("/:id", cancionesController.show);
//crear 
router.post("/", cancionesController.store);
//update 
router.put("/:id", cancionesController.update);
//delete 
router.delete("/:id", cancionesController.delete);


module.exports = router;