const app = require("./app");
const mongoose = require("mongoose");
const config = require("./config");

const connect = (url) => {
  return mongoose.connect(url, config.db.options);
};
connect(config.db.prod);
mongoose.connection.on("error", console.log);

app.listen(config.port, () => {
  console.log(`app working on ${config.port}`);
});

module.exports = { connect };
