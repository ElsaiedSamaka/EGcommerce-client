const Product = require( './models/product' )
const Category = require('./models/category')

const router = require( "express" ).Router();
router.get("/",async (req, res) => {
    try {
    const products = await Product.find({})
      .sort("-createdAt")
      .populate("category");
      res.send( products );
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});
module.exports = (app) => {
  app.use("/api", router);
};
