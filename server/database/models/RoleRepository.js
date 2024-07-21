const AbstractRepository = require("./AbstractRepository");

class RoleRepository extends AbstractRepository {
  constructor() {
    super({ table: "role" });
  }

  async create(role) {
    const { name } = role;

    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name) VALUES (?)`,
      [name]
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

  async update(role) {
    const { name, id } = role;

    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name = ? WHERE id = ?`,
      [name, id]
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
}

module.exports = RoleRepository;
