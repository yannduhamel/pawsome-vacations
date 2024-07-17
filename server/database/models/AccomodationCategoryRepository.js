const AbstractRepository = require("./AbstractRepository");

class AccomodationCategoryRepository extends AbstractRepository {
  constructor() {
    super({ table: "acc_category" });
  }

  async create(accCategory) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name) values (?)`,
      [accCategory.name]
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

  async update(accCategory) {
    const [result] = await this.database.query(
      `update ${this.table} set name = ? where id = ?`,
      [accCategory.name, accCategory.id]
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

module.exports = AccomodationCategoryRepository;
