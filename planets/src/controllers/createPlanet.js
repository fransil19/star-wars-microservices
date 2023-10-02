const Planet = require("../data");
const { response } = require("../utils")

module.exports = async (req, res) => {
  const {
    _id,
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    residents,
    films
  } = req.body

  const newPlanet = await Planet.create({
    _id,
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    residents,
    films
  });

  response(res, 201, newPlanet)
}