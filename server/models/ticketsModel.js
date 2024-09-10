const mongoose = require("mongoose")

const  Schema = mongoose.Schema

const orderSchema = new Schema({
  price: Number,
  products: Array,
  email: String,
  address: Object,

})
const Order = mongoose.model("Order", orderSchema)

module.exports = Order