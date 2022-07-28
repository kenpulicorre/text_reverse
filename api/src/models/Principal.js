const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("principal", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nameReverse: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    palindrome: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  });
};
