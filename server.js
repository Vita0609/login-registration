const mongoose = require("mongoose");
const app = require("./app");
// const obj = {
//     name: "Mango",
//     age: 20,
// };
// const { name, age } = obj;
// console.log(age);

const { DB_HOST, PORT } = process.env;
mongoose.set("strictQuery", true);

mongoose
    .connect(DB_HOST)
    .then(() => {
        app.listen(PORT);
        console.log(`подключились успешно к порту ${PORT}`);
    })
    .catch((error) => {
        console.log(error.message);
        process.exit(1);
    });
