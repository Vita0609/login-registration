const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { Unauthorized } = require("http-errors");
const bcrypt = require("bcryptjs");
const { secretKey } = process.env;
const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const passwordCompare = bcrypt.compareSync(password, user.password);
    if (!user || !passwordCompare) {
        throw Unauthorized("Email or password is wrong");
    }
    const payload = { id: user._id };
    const token = jwt.sign(payload, secretKey);
    await User.findByIdAndUpdate(user._id, { token });
    res.status(200).json({ message: "login ok", email: user.email });
};
module.exports = login;
