const express = require("express");
const productControllers = require("../Controller/productController");
const router = express.Router();


router.get("/products", productControllers.getProducts);
router.post("/addproducts", productControllers.addProducts);
module.exports = router