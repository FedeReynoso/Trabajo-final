const express = require("express");
const router = express.Router();

const artistasController = require ("../controllers/artistasController");
router.get("/", artistasController.list);

module.exports = router;