const AbstractSeeder = require("./AbstractSeeder");

class AccomodationCategorySeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "acc_category",
      truncate: true,
    });
  }

  run() {
    for (let i = 0; i < 5; i += 1) {
      const fakeAccomodationCategory = {
        name: this.faker.lorem.words(1),
        refName: `acc_category_${i}`,
      };

      this.insert(fakeAccomodationCategory);
    }
  }
}

module.exports = AccomodationCategorySeeder;
