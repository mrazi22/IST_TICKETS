const joi = require("joi");
const { removeListener } = require("../models/usermodel");

const loginSchema = joi.object({
    
    email: joi.string().email().required(),
    password: joi.string().required().min(8),
    role: joi.string().required(),
    


});

module.exports = {loginSchema}