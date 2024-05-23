"use strict";

const { sequelize } = require("../models");
// Định nghĩa các thay đổi cấu trúc cơ sở dữ liệu
// Khi mà chạy ctrinh thì dựa vào model để tạo ra các bảng tương ứng, được gọi là lịch sử thay đổi của CSDL

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("AddressUsers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      shipName: {
        type: Sequelize.STRING,
      },
      shipAdress: {
        type: Sequelize.STRING,
      },
      shipEmail: {
        type: Sequelize.STRING,
      },
      shipPhonenumber: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("AddressUsers");
  },
};
