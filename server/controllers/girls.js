const Girl = require("../models/girls");

exports.getAllGirls = async (req, res) => {
  try {
    const result = await Girl.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Girls found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Girls not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getGirlById = async (req, res) => {
  try {
    const result = await Girl.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Girl found",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Girl not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteGirl = async (req, res) => {
  try {
    const result = await Girl.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Girl deleted",
      });
    }
    res.status(500).send({ msg: "Something went wrong" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateGirl = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      age: req.body.age,
      hobby: req.body.hobby,
    };
    const result = await Girl.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Girl updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Girl was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createGirl = async (req, res) => {
  try {
    const data = new Girl({
      name: req.body.name,
      age: req.body.age,
      hobby: req.body.hobby,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Girl created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Girl was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
