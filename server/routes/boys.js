var express = require("express");
var router = express.Router();

const boysController = require("../controllers/boys");

router.get("/", boysController.getAllBoys);

//localhost:3000/boys/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", boysController.getBoyById);

router.delete("/:id", boysController.deleteBoy);

router.put("/:id", boysController.updateBoy);

router.post("/", boysController.createBoy);

module.exports = router;
