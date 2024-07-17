const AbstractRepository = require("./AbstractRepository");

class AnimalRepository extends AbstractRepository {
  constructor() {
    super({ table: "animal" });
  }

  async create(animal) {
    const [result] = await this.database.query(
      `insert into ${this.table} (species, size, user_id) values (?, ?, ?)`,
      [animal.species, animal.size, animal.user_id]
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

  async update(animal) {
    const [result] = await this.database.query(
      `update ${this.table} set size = ? where id = ?`,
      [animal.size, animal.id]
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

module.exports = AnimalRepository;
