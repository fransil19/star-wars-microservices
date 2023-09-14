const Planet = require("../data");

module.exports = (req, res) => {
  const planets = Planet.list();
  return res.status(200).json(planets)
}