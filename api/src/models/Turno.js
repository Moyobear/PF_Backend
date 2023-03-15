const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "turno",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoincrement: true,
        unique: true,
      },
      motivo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      observaciones: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fecha_cita: {
        type: "TIMESTAMP",
        allowNull: false,
        unique: true,
      },
      hora_cita: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      precio: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
