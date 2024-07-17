const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "user", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeUser = {
        firstname: this.faker.person.firstName(),
        lastname: this.faker.person.lastName(),
        email: this.faker.internet.email(),
        phone_number: this.faker.string.numeric(10),
        password: this.faker.internet.password(),
        profile_picture: this.faker.image.avatar(),
        note: this.faker.number.int(5),
        is_validated: this.faker.datatype.boolean(),
        refName: `user_${i}`,
      };

      this.insert(fakeUser);
    }
  }
}

module.exports = UserSeeder;
