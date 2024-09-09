const createError = require("http-errors");
const User = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {loginSchema} = require("../helpers/loginSchema")
const {authSchema} = require("../helpers/ValidationSchema")

const secretKey = "your_very_strong_secret_key";

module.exports = {
    register: async (req, res, next) => {
      try {
        const { fullName, email, password } = req.body;
  
        // Validate the request body using the validation schema
        await authSchema.validateAsync(req.body);
  
        // Check for existing user with the same email
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
          throw createError.Conflict(`${email} already exists`);
        }
  
        // Hash the password securely using bcrypt
        const encryptedPassword = await bcrypt.hash(password, 10);
  
        // Create the user document with the hashed password
        const newUser = new User({
          fullName,
          email,
          password: encryptedPassword,
        });
  
        // Use async/await for concise error handling
        await newUser.save(); // Persist the user document to MongoDB
  
        // Generate a JWT token (payload can be customized)
        const token = jwt.sign({ userId: newUser._id }, secretKey, { expiresIn: "1h" });
  
        // Send a successful response with the token
        res.status(201).json({ message: "User created successfully", token });
      } catch (error) {
        next(error); // Forward the error to the error handler middleware
      }
    },
  
    login: async (req, res, next) => {
      try {
        const { email, password } = req.body;
  
        // Validate the request body using the validation schema
        await loginSchema.validateAsync(req.body);
  
        // Find the user by email
        const user = await User.findOne({ email: email });
  
        if (!user) {
          // Handle user not found scenario (e.g., generic error message for security)
          return res.status(401).json({ message: "Invalid credentials" });
        }
  
        // Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
  
        if (!isMatch) {
          // Handle incorrect password scenario (e.g., generic error message for security)
          return res.status(401).json({ message: "Invalid credentials" });
        }
  
        // Login successful, generate a JWT token
        const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: "1h" });
  
        // Send a successful response with the token (consider filtering sensitive user data)
        res.status(200).json({ message: "Login successful", token, user: { fullName: user.fullName, email: user.email } });
      } catch (error) {
        next(error); // Forward the error to the error handler middleware
      }
    },
  };