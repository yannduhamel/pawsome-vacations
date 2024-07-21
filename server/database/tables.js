// Import the repository modules responsible for handling data operations on the tables
const UserRepository = require("./models/UserRepository");
const RoleRepository = require("./models/RoleRepository");
const AnimalRepository = require("./models/AnimalRepository");
const AmenityRepository = require("./models/AmenityRepository");
const AccomodationCategoryRepository = require("./models/AccomodationCategoryRepository");
const AccomodationRepository = require("./models/AccomodationRepository");
const ReservationRepository = require("./models/ReservationRepository");
const PaymentRepository = require("./models/PaymentRepository");

// Create an empty object to hold data repositories for different tables
const tables = {};

/* ************************************************************************* */
// Register data repositories for tables
/* ************************************************************************* */

// Register each repository as data access point for its table
tables.user = new UserRepository();
tables.role = new RoleRepository();
tables.animal = new AnimalRepository();
tables.amenity = new AmenityRepository();
tables.acc_category = new AccomodationCategoryRepository();
tables.accomodation = new AccomodationRepository();
tables.reservation = new ReservationRepository();
tables.payment = new PaymentRepository();

/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
