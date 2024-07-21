const AbstractRepository = require("./AbstractRepository");

class PaymentRepository extends AbstractRepository {
  constructor() {
    super({ table: "payment" });
  }

  async create(payment) {
    const [result] = await this.database.query(
      `insert into ${this.table} (amount, date, method, reservation_id) values (?, ?, ?, ?)`,
      [payment.amount, payment.date, payment.method, payment.reservation_id]
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

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result.affectedRows > 0;
  }
}

module.exports = PaymentRepository;
