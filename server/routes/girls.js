var express = require("express");
var router = express.Router();

const girlsController = require("../controllers/girls");

router.get("/", girlsController.getAllGirls);

//localhost:3000/girls/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", girlsController.getGirlById);

router.delete("/:id", girlsController.deleteGirl);

router.put("/:id", girlsController.updateGirl);

router.post("/", girlsController.createGirl);

module.exports = router;
