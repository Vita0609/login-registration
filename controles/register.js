const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { Conflict } = require("http-errors");
const { secretKey } = process.env;
const register = async (req, res) => {
    const { email, password } = (req = body);
    const user = await User.findOne({ email });
    if (user) {
        throw new Conflict("email used");
    }
    const newUser = new User({ email });
    await newUser.setPassword(password);
    const payload = { id: newUser._id };
    const token = jwt.sign(payload, secretKey);
    newUser.token = token;
    await newUser.save();
    res.status(201).json({
        message: "registration complited",
        email: newUser.email,
    });
};
module.exports = register;
