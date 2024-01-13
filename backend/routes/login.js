const express = require("express");
const {
  getData,
  setData,
  updateData,
  deleteData,
} = require("../controllers/loginConfig");

const router = express.Router();

router.get("/", getData);

router.post("/", setData);

router.put("/:id", updateData);

router.delete("/:id", deleteData);

module.exports = router;
