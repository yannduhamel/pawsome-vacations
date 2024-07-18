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

  async searchAccomodation() {
    const [rows] = await this.database.query(
      `select a.id,
    a.name,
    a.adress,
    a.zip_code,
    a.city,
    a.description,
    a.note,
    a.price_per_night,
    a.max_adults,
    a.max_children,
    a.max_pets,
    a.is_validated,
    ac.name,
    r.check_in_date,
    r.check_out_date from ${this.table} as a join acc_category as ac on a.acc_category_id = ac.id join reservation as r on a.id = r.accomodation_id `
    );

    return rows;
  }
}

module.exports = AccomodationRepository;
