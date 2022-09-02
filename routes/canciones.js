const express = require("express");
const router = express.Router();

const cancionesController = require ("../controllers/cancionesController");


router.get("/", cancionesController.list);
router.get("/:id", cancionesController.show);
router.post("/", cancionesController.store);
router.delete("/:id", cancionesController.delete);

//ruteo para update 
router.get("/:id", cancionesController.update);
router.put("/:id", cancionesController.update);




module.exports = router;