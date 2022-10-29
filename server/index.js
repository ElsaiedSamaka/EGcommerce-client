const app = require("./app");
const mongoose = require("mongoose");
const config = require("./config");

const connect = (url) => {
  return mongoose.connect(url, config.db.options);
};
try {
  connect(config.db.test);
  mongoose.connection.once("open", () => {
    console.log("MONGO 200");
  });
} catch (error) {
  mongoose.connection.on("error", console.log(error));
}

app.listen(config.port, () => {
  console.log(`app working on ${config.port}`);
});

module.exports = { connect };
