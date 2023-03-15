const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "medico",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoincrement: true,
        unique: true,
      },
      codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genero: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha_nacimiento: {
        type: "TIMESTAMP",
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefono: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      foto: {
        type: DataTypes.STRING,
        defaultValue:
          "https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png",
      },
    },
    { timestamps: false }
  );
};
