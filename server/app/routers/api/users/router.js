const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../../../controllers/userActions");

const validateUserSchema = require("../../../middlewares/validateUserSchema");
const hashPassword = require("../../../services/hashPassword");

router.get("/", browse);
router.get("/:id", read);
router.put("/:id", validateUserSchema, hashPassword, edit);
router.post("/", validateUserSchema, hashPassword, add);
router.delete("/:id", destroy);

module.exports = router;
