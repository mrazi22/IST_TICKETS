const order = require("../models/orderModel");
const createError = require("http-errors");


module.exports = {

    addOrder: async (req, res, next) => {
        try {
          const { products, price, email } = req.body; // Destructuring for cleaner code
      
          const orderDetail = new order({ // Create a new Orders instance
            products,
            price,
            email,
          });
      
          // Validation (optional, but recommended):
          const validationErrors = orderDetail.validateSync(); // Perform validation check
          if (validationErrors) {
            const errorMessages = Object.values(validationErrors.errors)
              .map((error) => error.message)
              .join(', ');
            return res.status(400).json({ message: errorMessages }); // Send a bad request response with specific error messages
          }
      
          const savedOrder = await orderDetail.save(); // Use `save` for asynchronous saving
      
          console.log("Order added to database:", savedOrder);
          res.status(201).json({ message: "Order created successfully", order: savedOrder }); // Send a created response with the order data
        } catch (error) {
          console.error("Error adding order:", error);
          res.status(500).json({ message: "Error creating order. Please try again later." }); // Send an internal server error response with a generic message
        }
  
    },

    getOrders: async (req, res, next) => {
        try {
          const { email } = req.body; // Destructuring for cleaner code
      
          
      
          const userOrders = await order.find({ email }); // Mongoose query with filter
      
          if (!userOrders) {
            return res.status(404).json({ message: "No orders found for this email." }); // Handle no orders case with a specific response
          }
      
          res.status(200).json({ message: "Orders retrieved successfully", orders: userOrders }); // Send a success response with order data
        } catch (error) {
          next(error); // Send an internal server error response with a generic message
        }
      },
}