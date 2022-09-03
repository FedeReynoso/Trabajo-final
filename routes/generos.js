const express = require("express");
const router = express.Router();

const generosController = require ("../controllers/generosController");

//listar
router.get("/", generosController.list);
//buscar 
router.get("/:id", generosController.show);
//crear 
router.post("/", generosController.store);
//update 
router.put("/:id", generosController.update);
//delete 
router.delete("/:id", generosController.delete);


module.exports = router;