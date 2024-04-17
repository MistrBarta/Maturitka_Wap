const Boy = require("../models/boys");

exports.getAllBoys = async (req, res) => {
  try {
    const result = await Boy.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Boys found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Boys not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getBoyById = async (req, res) => {
  try {
    const result = await Boy.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Boy found",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Boy not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteBoy = async (req, res) => {
  try {
    const result = await Boy.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Boy deleted",
      });
    }
    res.status(500).send({ msg: "Something went wrong" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateBoy = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      age: req.body.age,
      sport: req.body.sport,
    };
    const result = await Boy.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Boy updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Boy was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createBoy = async (req, res) => {
  try {
    const data = new Boy({
      name: req.body.name,
      age: req.body.age,
      sport: req.body.sport,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Boy created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Boy was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
