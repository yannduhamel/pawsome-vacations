const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const accCategories = await tables.acc_category.readAll();
    res.json(accCategories);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const accCategory = await tables.acc_category.read(req.params.id);

    if (accCategory == null) {
      res.sendStatus(404);
    } else {
      res.json(accCategory);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const accCategory = { ...req.body, id: req.params.id };

  try {
    await tables.acc_category.update(accCategory);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const accCategory = req.body;

  try {
    const insertId = await tables.acc_category.create(accCategory);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.acc_category.delete(req.params.id);
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
