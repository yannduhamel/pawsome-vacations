/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    const { firstname, lastname, email, phone_number, password } = user;

    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, email, phone_number, password, profile_picture) VALUES (?, ?, ?, ?, ?, ?)`,
      [firstname, lastname, email, phone_number, password]
    );

    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    return rows;
  }

  async update(user) {
    const {
      firstname,
      lastname,
      email,
      phone_number,
      password,
      profile_picture,
      note,
      is_validated,
      id,
    } = user;

    const [result] = await this.database.query(
      `UPDATE ${this.table} SET firstname = ?, lastname = ?, email = ?, phone_number = ?, password = ?, profile_picture = ?, note = ?, is_validated = ? WHERE id = ?`,
      [
        firstname,
        lastname,
        email,
        phone_number,
        password,
        profile_picture,
        note,
        is_validated,
        id,
      ]
    );

    return result.affectedRows > 0;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return result.affectedRows > 0;
  }

  async findUserByEmail(email) {
    const [result] = await this.database.query(
      `SELECT firstname, lastname, password FROM ${this.table} WHERE email = ?`,
      [email]
    );
    return result;
  }
}

module.exports = UserRepository;
