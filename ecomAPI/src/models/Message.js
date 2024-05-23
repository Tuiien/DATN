"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Phương pháp trợ giúp để xác định liên kết.
     * Phương pháp này không phải là một phần của vòng đời Sequelize.
     * Tệp `models/index` sẽ tự động gọi phương thức này.
     */
    static associate(models) {}
  }
  Message.init(
    {
      text: DataTypes.TEXT("long"),
      userId: DataTypes.INTEGER,
      roomId: DataTypes.INTEGER,
      unRead: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Message",
    }
  );
  return Message;
};
