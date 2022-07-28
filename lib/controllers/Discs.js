const { Router } = require('express');
const Disc = require('../models/Disc');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const disc = await Disc.getDiscById(req.params.id);
    res.json(disc);
  })
  .get('/', async (req, res) => {
    const discs = await Disc.getAllDiscs();
    const ids = discs.map((disc) => ({ id: disc.id, name: disc.name}));
    res.json(ids);
  });
