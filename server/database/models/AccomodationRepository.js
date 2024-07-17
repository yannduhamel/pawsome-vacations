const AbstractRepository = require("./AbstractRepository");

class AccomodationRepository extends AbstractRepository {
  constructor() {
    super({ table: "accomodation" });
  }

  async create(accomodation) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, adress, zip_code, city, description, note, price_per_night, max_adults, max_children, max_pets, is_validated, user_id, acc_category_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        accomodation.name,
        accomodation.adress,
        accomodation.zip_code,
        accomodation.city,
        accomodation.description,
        accomodation.note,
        accomodation.price_per_night,
        accomodation.max_adults,
        accomodation.max_children,
        accomodation.max_pets,
        accomodation.is_validated,
        accomodation.user_id,
        accomodation.acc_category_id,
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

  async update(accomodation) {
    const [result] = await this.database.query(
      `update ${this.table} set name = ?, adress = ?, zip_code = ?, city = ?, description = ?, note = ?, price_per_night = ?, max_adults = ?, max_children = ?, max_pets = ?, is_validated = ?, user_id = ?, acc_category_id = ? where id = ?`,
      [
        accomodation.name,
        accomodation.adress,
        accomodation.zip_code,
        accomodation.city,
        accomodation.description,
        accomodation.note,
        accomodation.price_per_night,
        accomodation.max_adults,
        accomodation.max_children,
        accomodation.max_pets,
        accomodation.is_validated,
        accomodation.user_id,
        accomodation.acc_category_id,
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

module.exports = AccomodationRepository;
