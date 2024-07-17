const AbstractSeeder = require("./AbstractSeeder");

const UserSeeder = require("./UserSeeder");

class AnimalSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "animal", truncate: true, dependencies: [UserSeeder] });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeAnimal = {
        species: this.faker.animal.type(),
        size: "small",
        user_id: this.getRef(`user_${i}`).insertId,
      };

      this.insert(fakeAnimal);
    }
  }
}

module.exports = AnimalSeeder;
