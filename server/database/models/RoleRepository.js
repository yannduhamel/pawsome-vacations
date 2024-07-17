const AbstractRepository = require("./AbstractRepository");

class roleRepository extends AbstractRepository {
  constructor() {
    super({ table: "role" });
  }

  async create(role) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name) values (?)`,
      [role.name]
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

  async update(role) {
    const [result] = await this.database.query(
      `update ${this.table} set name = ? where id = ?`,
      [role.name, role.id]
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

module.exports = roleRepository;
