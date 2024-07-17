const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    const [result] = await this.database.query(
      `insert into ${this.table} (firstname, lastname, email, phone_number, password, profile_picture, note, is_validated) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.phone_number,
        user.password,
        user.profile_picture,
        user.note,
        user.is_validated,
      ]
    );

    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async update(user) {
    const [result] = await this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, phone_number = ?, password = ?, profile_picture = ?, note = ?, is_validated = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.phone_number,
        user.password,
        user.profile_picture,
        user.note,
        user.is_validated,
        user.id,
      ]
    );

    return result.affectedRows > 0;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result.affectedRows > 0;
  }
}

module.exports = UserRepository;
