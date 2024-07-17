const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const usersRouter = require("./users/router");
const rolesRouter = require("./roles/router");
const animalsRouter = require("./animals/router");
const amenitiesRouter = require("./amenities/router");
const accomodationCategoriesRouter = require("./accomodationsCategories/router");
const accomodationsRouter = require("./accomodations/router");
const reservationsRouter = require("./reservations/router");
const paymentsRouter = require("./payments/router");

router.use("/users", usersRouter);
router.use("/roles", rolesRouter);
router.use("/animals", animalsRouter);
router.use("/amenities", amenitiesRouter);
router.use("/accomodationCategories", accomodationCategoriesRouter);
router.use("/accomodations", accomodationsRouter);
router.use("/reservations", reservationsRouter);
router.use("/payments", paymentsRouter);

/* ************************************************************************* */

module.exports = router;
