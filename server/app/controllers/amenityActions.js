const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const amenities = await tables.amenity.readAll();
    res.json(amenities);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  const { id } = req.params;

  try {
    const amenity = await tables.amenity.read(id);

    if (amenity == null) {
      res.sendStatus(404);
    } else {
      res.json(amenity);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const amenity = { ...req.body, id: req.params.id };

  try {
    await tables.amenity.update(amenity);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const amenity = req.body;

  try {
    const insertId = await tables.amenity.create(amenity);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  const { id } = req.params;

  try {
    await tables.amenity.delete(id);
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
