/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class AnimalRepository extends AbstractRepository {
  constructor() {
    super({ table: "animal" });
  }

  async create(animal) {
    const { species, size, user_id } = animal;

    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (species, size, user_id) VALUES (?, ?, ?)`,
      [species, size, user_id]
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

  async update(animal) {
    const { size, id } = animal;

    const [result] = await this.database.query(
      `UPDATE ${this.table} SET size = ? WHERE id = ?`,
      [size, id]
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

module.exports = AnimalRepository;
