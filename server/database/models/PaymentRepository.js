/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class PaymentRepository extends AbstractRepository {
  constructor() {
    super({ table: "payment" });
  }

  async create(payment) {
    const { amount, date, method, reservation_id } = payment;

    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (amount, date, method, reservation_id) VALUES (?, ?, ?, ?)`,
      [amount, date, method, reservation_id]
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

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return result.affectedRows > 0;
  }
}

module.exports = PaymentRepository;
