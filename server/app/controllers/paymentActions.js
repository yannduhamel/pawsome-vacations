const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const payments = await tables.payment.readAll();
    res.json(payments);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  const { id } = req.params;

  try {
    const payment = await tables.payment.read(id);

    if (payment == null) {
      res.sendStatus(404);
    } else {
      res.json(payment);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const payment = req.body;

  try {
    const insertId = await tables.payment.create(payment);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  const { id } = req.params;

  try {
    await tables.payment.delete(id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  add,
  destroy,
};
