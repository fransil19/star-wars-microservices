const server = require("./src/server");
const {Character} = require("./src/database");

const PORT = 8004;

//Character.get(1).then(res=> console.log(res));

/* Character.insertMany({
  _id:"200",
  name:"Franco Silvestro",
  birth_year: "1994"
}).then(res => console.log(res)) */

server.listen(PORT ,() => {
  console.log(`Database service listening on port ${PORT}`);
})