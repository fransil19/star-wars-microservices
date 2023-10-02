const axios = require("axios")

module.exports = {
  list: async () => {
    const character = await axios.get("http://database:8004/Character");
    return character.data;
  },
  create: async (character) => {
    const response = await axios.post("http://database:8004/Character", character)
    return response.data;
  }
}