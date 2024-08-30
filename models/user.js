const { model, Schema } = require("mongoose");
// const Joy = require("joy");
const bcrypt = require("bcryptjs");

const userSchema = Schema(
    {
        email: {
            type: String,
            required: [true, "email is required"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "passwort is required"],
            minlength: 6,
        },
        token: {
            type: String,
            default: "",
        },
    },
    { versionKey: false, timestamps: true }
);
userSchema.methods.setPassword = async function (password) {
    this.password = await bcrypt.hash(password, 10);
};
userSchema.methods.verifiedPassword = function (password) {
    return bcrypt.compare(password, this.password);
};
const User = model("user", userSchema);
module.exports = User;
