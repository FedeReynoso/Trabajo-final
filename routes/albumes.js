const express = require("express");
const router = express.Router();

const albumesController = require ("../controllers/albumesController");

//listar
router.get("/", albumesController.list);
//buscar 
router.get("/:id", albumesController.show);
//crear 
router.post("/", albumesController.store);
//update 
router.put("/:id", albumesController.update);
//delete 
router.delete("/:id", albumesController.delete);


module.exports = router;