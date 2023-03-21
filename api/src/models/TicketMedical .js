const { DataTypes, DATEONLY } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "ticketMedical",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoincrement: true,
        unique: true,
      },
      titile: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      observations: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      hour: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      is_confirmed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: false }
  );
};
