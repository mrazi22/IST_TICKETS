const express = require("express");
const cors = require("cors");
const userRoutes = require("./Routes/userRoutes");
const products = require("./Routes/ProductRoutes");
const orderRoutes = require("./Routes/orderRoutes");

require('dotenv').config()
require('./helpers/init_mongodb')


const app = express();
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000'
}))


app.use(userRoutes)
app.use(products)
app.use(orderRoutes)



app.listen(5000, () => {
    console.log("server is listening on port 5000");
});
