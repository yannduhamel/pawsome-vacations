const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const accomodations = await tables.accomodation.readAll();
    res.json(accomodations);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const accomodation = await tables.accomodation.read(req.params.id);

    if (accomodation == null) {
      res.sendStatus(404);
    } else {
      res.json(accomodation);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const accomodation = req.body;

  try {
    await tables.accomodation.update(req.params.id, accomodation);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const accomodation = req.body;

  try {
    const insertId = await tables.accomodation.create(accomodation);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.accomodation.delete(req.params.id);
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
