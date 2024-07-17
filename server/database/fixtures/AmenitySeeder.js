const AbstractSeeder = require("./AbstractSeeder");

class AmenitySeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "amenity",
      truncate: true,
    });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeAmenity = {
        name: this.faker.lorem.words(6),
        logo: this.faker.image.url,
        category: this.faker.lorem.words(6),
      };

      this.insert(fakeAmenity);
    }
  }
}

module.exports = AmenitySeeder;
