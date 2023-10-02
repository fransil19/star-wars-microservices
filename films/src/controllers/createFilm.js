const { response } = require("../utils")
const Film = require("../data")

module.exports = async (req, res) => {
  const { _id, title, opening_crawl, director, producer, release_date, characters, planets } = req.body;
  const newFilm = await Film.create({ _id, title, opening_crawl, director, producer, release_date, characters, planets });
  response(res, 201, newFilm)
}