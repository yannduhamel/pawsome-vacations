const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const reservations = await tables.reservation.readAll();
    res.json(reservations);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  const { id } = req.params;

  try {
    const reservation = await tables.reservation.read(id);

    if (reservation == null) {
      res.sendStatus(404);
    } else {
      res.json(reservation);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const reservation = { ...req.body, id: req.params.id };

  try {
    await tables.reservation.update(reservation);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const reservation = req.body;

  try {
    const insertId = await tables.reservation.create(reservation);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  const { id } = req.params;

  try {
    await tables.reservation.delete(id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
