const characters = require("./characters.json");

module.exports = {
  list: async () => {
    return characters
  },
  create: async() => {
    throw Error("Hubo un error al crear el personaje")
  }
}