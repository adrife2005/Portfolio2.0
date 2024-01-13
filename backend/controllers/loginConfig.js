const moongose = require("mongoose");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc Get data
// @rute GET /login
// @status private
const getData = asyncHandler(async (req, res) => {
  const getUsers = await User.find();

  await res.status(200).json(getUsers);
});

// @desc Set data
// @rute POST /login
// @status private
const setData = asyncHandler(async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.proyect) {
    res.status(400);
    throw new Error("Pleas fill out all the fields");
  }

  const setUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    proyect: req.body.proyect,
  });

  res.redirect("/#form");
});

// @desc Update data
// @rute PUT /login:id
// @status private
const updateData = asyncHandler(async (req, res) => {
  const find = await User.findById(req.params.id);

  if (!find) {
    res.status(400);
    throw new Error("User ID not found");
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedUser);
});

// @desc Delete data
// @rute DELETE /login/:id
// @status private
const deleteData = asyncHandler(async (req, res) => {
  const find = await User.findById(req.params.id);
  const findData = await User.find(req.body);

  if (!find) {
    res.status(400);
    throw new Error("User ID not found");
  }

  await find.deleteOne();

  res.send({
    msg: `User of the id: ${req.params.id}, deleted succesfully`,
  });
});

module.exports = {
  getData,
  setData,
  updateData,
  deleteData,
};
