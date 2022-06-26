const express = require ("express");
const router = express.Router();
const controllers = require("../controllers/controladores");

router.get ("/", controllers.home);
router.get ("/detalle/:id", controllers.detalle)
router.get ("/detalle/search", controller.search)


module.exports = router;


