const AbstractRepository = require("./AbstractRepository");

class AmenityRepository extends AbstractRepository {
  constructor() {
    super({ table: "amenity" });
  }

  async create(amenity) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, logo, category) values (?, ?, ?)`,
      [amenity.name, amenity.logo, amenity.category]
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

  async update(amenity) {
    const [result] = await this.database.query(
      `update ${this.table} set name = ?, logo = ?, category = ? where id = ?`,
      [amenity.name, amenity.logo, amenity.category, amenity.id]
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

module.exports = AmenityRepository;
