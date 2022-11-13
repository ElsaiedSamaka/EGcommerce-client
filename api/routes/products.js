const ProductsController = require("../controllers/Products.Controller");
const express = require("express");
const router = express.Router();
const apicache = require("apicache");
let cache = apicache.middleware;

// GET: display all products
router.get("/", cache("2 minutes"), ProductsController.getAllProducts);

// GET: search box
router.get("/search", ProductsController.searchProducts);

// GET: get a certain category by its slug (this is used for the categories navbar)
router.get("/:slug", ProductsController.searchProducts);

// GET: display a certain product by its id
router.get("/:slug/:id", ProductsController.getProductByID);

// POST: post NEW product
router.post("/", ProductsController.addProduct);

// PUT: update product
router.put("/", ProductsController.updateProduct);

// Delete: delete a product
router.delete("/", ProductsController.deleteProduct);
module.exports = router;
