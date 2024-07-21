const AbstractRepository = require("./AbstractRepository");

class ReservationRepository extends AbstractRepository {
  constructor() {
    super({ table: "reservation" });
  }

  async create(reservation) {
    const [result] = await this.database.query(
      `insert into ${this.table} (booking_date, check_in_date, check_out_date, adults_number, children_number, pets_number, user_id, accomodation_id) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        reservation.booking_date,
        reservation.check_in_date,
        reservation.check_out_date,
        reservation.adults_number,
        reservation.children_number,
        reservation.pets_number,
        reservation.user_id,
        reservation.accomodation_id,
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

  async update(reservation) {
    const [result] = await this.database.query(
      `update ${this.table} set booking_date = ?, check_in_date = ?, check_out_date = ?, adults_number = ?, children_number = ?, pets_number = ? where id = ?`,
      [
        reservation.booking_date,
        reservation.check_in_date,
        reservation.check_out_date,
        reservation.adults_number,
        reservation.children_number,
        reservation.pets_number,
        reservation.id,
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

module.exports = ReservationRepository;
