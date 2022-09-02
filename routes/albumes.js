const express = require("express");
const router = express.Router();

const albumesController = require ("../controllers/albumesController");
router.get("/", albumesController.list);
router.get("/", albumesController.store);
router.post("/", albumesController.store);


module.exports = router;