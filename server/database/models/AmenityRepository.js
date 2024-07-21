const AbstractRepository = require("./AbstractRepository");

class AmenityRepository extends AbstractRepository {
  constructor() {
    super({ table: "amenity" });
  }

  async create(amenity) {
    const { name, logo, category } = amenity;

    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, logo, category) VALUES (?, ?, ?)`,
      [name, logo, category]
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

  async update(amenity) {
    const { name, logo, category, id } = amenity;

    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name = ?, logo = ?, category = ? WHERE id = ?`,
      [name, logo, category, id]
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

module.exports = AmenityRepository;
