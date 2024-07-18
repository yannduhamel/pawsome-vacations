const AbstractSeeder = require("./AbstractSeeder");

const UserSeeder = require("./UserSeeder");

class AccomodationSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "accomodation",
      truncate: true,
      dependencies: [UserSeeder],
    });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeAccomodation = {
        name: this.faker.lorem.words(6),
        adress: this.faker.location.streetAddress(false),
        zip_code: this.faker.number.int(5),
        city: this.faker.location.city(),
        description: this.faker.lorem.paragraph(),
        note: this.faker.number.int({ min: 0, max: 5 }),
        price_per_night: this.faker.number.int({ min: 50, max: 200 }),
        max_adults: this.faker.number.int({ min: 1, max: 5 }),
        max_children: this.faker.number.int({ min: 0, max: 5 }),
        max_pets: this.faker.number.int({ min: 1, max: 5 }),
        is_validated: this.faker.datatype.boolean(),
        user_id: this.faker.number.int({ min: 0, max: 5 }),
        acc_category_id: this.faker.number.int({ min: 0, max: 5 }),
      };

      this.insert(fakeAccomodation);
    }
  }
}

module.exports = AccomodationSeeder;
