var express = require("express");
var router = express.Router();

const dogsController = require("../controllers/dogs");

router.get("/", dogsController.getAllDogs);

//localhost:3000/dogs/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", dogsController.getDogById);

router.delete("/:id", dogsController.deleteDog);

router.put("/:id", dogsController.updateDog);

router.post("/", dogsController.createDog);

module.exports = router;
