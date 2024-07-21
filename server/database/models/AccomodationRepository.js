/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class AccomodationRepository extends AbstractRepository {
  constructor() {
    super({ table: "accomodation" });
  }

  async create(accomodation) {
    const {
      name,
      adress,
      zip_code,
      city,
      description,
      note,
      price_per_night,
      max_adults,
      max_children,
      max_pets,
      is_validated,
      user_id,
      acc_category_id,
    } = accomodation;

    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, adress, zip_code, city, description, note, price_per_night, max_adults, max_children, max_pets, is_validated, user_id, acc_category_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        adress,
        zip_code,
        city,
        description,
        note,
        price_per_night,
        max_adults,
        max_children,
        max_pets,
        is_validated,
        user_id,
        acc_category_id,
      ]
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

  async update(accomodation) {
    const {
      name,
      adress,
      zip_code,
      city,
      description,
      note,
      price_per_night,
      max_adults,
      max_children,
      max_pets,
      is_validated,
      user_id,
      acc_category_id,
    } = accomodation;

    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name = ?, adress = ?, zip_code = ?, city = ?, description = ?, note = ?, price_per_night = ?, max_adults = ?, max_children = ?, max_pets = ?, is_validated = ?, user_id = ?, acc_category_id = ? WHERE id = ?`,
      [
        name,
        adress,
        zip_code,
        city,
        description,
        note,
        price_per_night,
        max_adults,
        max_children,
        max_pets,
        is_validated,
        user_id,
        acc_category_id,
      ]
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

  async searchAccomodation() {
    const [rows] = await this.database.query(
      `SELECT a.id, a.name, a.adress, a.zip_code, a.city, a.description, a.note, a.price_per_night, a.max_adults, a.max_children, a.max_pets, a.is_validated, ac.name, r.check_in_date, r.check_out_date FROM ${this.table} AS a JOIN acc_category AS ac ON a.acc_category_id = ac.id JOIN reservation AS r ON a.id = r.accomodation_id `
    );

    return rows;
  }
}

module.exports = AccomodationRepository;
