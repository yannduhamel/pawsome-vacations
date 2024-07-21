/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class ReservationRepository extends AbstractRepository {
  constructor() {
    super({ table: "reservation" });
  }

  async create(reservation) {
    const {
      booking_date,
      check_in_date,
      check_out_date,
      adults_number,
      children_number,
      pets_number,
      user_id,
      accomodation_id,
    } = reservation;

    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (booking_date, check_in_date, check_out_date, adults_number, children_number, pets_number, user_id, accomodation_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        booking_date,
        check_in_date,
        check_out_date,
        adults_number,
        children_number,
        pets_number,
        user_id,
        accomodation_id,
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

  async update(reservation) {
    const {
      booking_date,
      check_in_date,
      check_out_date,
      adults_number,
      children_number,
      pets_number,
      id,
    } = reservation;

    const [result] = await this.database.query(
      `UPDATE ${this.table} SET booking_date = ?, check_in_date = ?, check_out_date = ?, adults_number = ?, children_number = ?, pets_number = ? WHERE id = ?`,
      [
        booking_date,
        check_in_date,
        check_out_date,
        adults_number,
        children_number,
        pets_number,
        id,
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
}

module.exports = ReservationRepository;
