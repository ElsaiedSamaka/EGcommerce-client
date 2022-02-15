const router = require("express").Router();
router.get("/", (req, res) => {
  res.json({ mssg: "Hello" });
});
module.exports = (app) => {
  app.use("/api", router);
};
