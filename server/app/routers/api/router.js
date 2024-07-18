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
const authRouter = require("./auth/router");

router.use("/user", usersRouter);
router.use("/role", rolesRouter);
router.use("/animal", animalsRouter);
router.use("/amenity", amenitiesRouter);
router.use("/accomodationcategory", accomodationCategoriesRouter);
router.use("/accomodation", accomodationsRouter);
router.use("/reservation", reservationsRouter);
router.use("/payment", paymentsRouter);
router.use("/auth", authRouter);

/* ************************************************************************* */

module.exports = router;
