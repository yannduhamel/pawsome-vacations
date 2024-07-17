const AbstractSeeder = require("./AbstractSeeder");

class RoleSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "role", truncate: true });
  }

  run() {
    for (let i = 0; i < 3; i += 1) {
      const fakeRole = {
        name: this.faker.word.noun(5),
        refName: `role_${i}`,
      };

      this.insert(fakeRole);
    }
  }
}

module.exports = RoleSeeder;
