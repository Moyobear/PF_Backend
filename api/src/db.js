const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const MedicoModel = require("./models/Medico");
const PacienteModel = require("./models/Paciente");
const UsuarioModel = require("./models/Usuario");
const PaymentModel = require("./models/Payment");
const ServicioModel = require("./models/Servicio");
const TurnoModel = require("./models/Turno");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://postgres:bearfreelance@localhost:5432/clinica`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

MedicoModel(sequelize);
PacienteModel(sequelize);
UsuarioModel(sequelize);
PaymentModel(sequelize);
ServicioModel(sequelize);
TurnoModel(sequelize);

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });
// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// *En sequelize.models están todos los modelos importados como propiedades
// *Para relacionarlos hacemos un destructuring
const { Medico, Paciente, Usuario, Payment, Servicio, Turno } =
  sequelize.models;

// *Aca vendrian las relaciones
Turno.belongsToMany(Paciente, { through: "Paciente_Turno" });
Paciente.belongsToMany(Turno, { through: "Paciente_Turno" });

Usuario.hasOne(Paciente);
Paciente.belongsTo(Usuario);

// Usuario.hasMany(Turno);
// Turno.belongsTo(Usuario);

Medico.hasMany(Turno);
Turno.belongsTo(Medico);

Turno.hasOne(Payment);
Payment.belongsTo(Turno);

Servicio.belongsToMany(Medico, { through: "Medico_Servicio" });
Medico.belongsToMany(Servicio, { through: "Medico_Servicio" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
