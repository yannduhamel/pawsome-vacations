const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const usersRouter = require("./users/router");
const rolesRouter = require("./roles/router");
const animalsRouter = require("./animals/router");

router.use("/users", usersRouter);
router.use("/roles", rolesRouter);
router.use("/animals", animalsRouter);

/* ************************************************************************* */

module.exports = router;
