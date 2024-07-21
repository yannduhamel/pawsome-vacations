/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class AccomodationCategoryRepository extends AbstractRepository {
  constructor() {
    super({ table: "acc_category" });
  }

  async create(accCategory) {
    const { category_name, category_image } = accCategory;

    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (category_name, category_image ) VALUES (?, ?)`,
      [category_name, category_image]
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

  async update(accCategory) {
    const { category_name, category_image, id } = accCategory;

    const [result] = await this.database.query(
      `UPDATE ${this.table} SET category_name = ?, set category_image WHERE id = ?`,
      [category_name, category_image, id]
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

module.exports = AccomodationCategoryRepository;
