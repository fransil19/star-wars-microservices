const Film = require("../data")
module.exports = (req, res) => {
  const films = Film.list();
  return res.status(200).json(films);
}