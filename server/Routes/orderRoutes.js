const express = require("express");
const orderControllers = require("../Controller/orderController");
const router = express.Router();

router.get("/orders", orderControllers.getOrders);
router.post("/addorder", orderControllers.addOrder);

module.exports = router