const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const animals = await tables.animal.readAll();
    res.json(animals);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const animal = await tables.animal.read(req.params.id);

    if (animal == null) {
      res.sendStatus(404);
    } else {
      res.json(animal);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const animal = { ...req.body, id: req.params.id };

  try {
    await tables.animal.update(animal);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const animal = req.body;

  try {
    const insertId = await tables.animal.create(animal);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.animal.delete(req.params.id);
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
