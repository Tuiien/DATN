const { Sequelize } = require("sequelize");

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize("ecom", "root", null, {
  host: "localhost",
  dialect: "mysql",
  port: 3308, // Thêm cổng kết nối của Xampp là 3308
  logging: false,
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connectDB;
