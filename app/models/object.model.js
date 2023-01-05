const { Sequelize, INTEGER } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const Object = sequelize.define("object", {
      name: {
        type: Sequelize.STRING
      },
      PID: {
        type: Sequelize.INTEGER
      }
      }
    );
  
    return Object;
  };