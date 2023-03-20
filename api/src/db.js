const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const DoctorModel = require("./models/Doctor");
const PatientModel = require("./models/Patient");
const PaidsModel = require("./models/Paids");
const ContractedPlanModel = require("./models/ContractedPlan");
const PlanModel = require("./models/Plan");
const PaymentModel = require("./models/Payment");
const SpecialityModel = require("./models/Speciality");
const TicketModel = require("./models/Ticket ");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://postgres:bearfreelance@localhost:5432/clinica`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

DoctorModel(sequelize);
PatientModel(sequelize);
PaidsModel(sequelize);
ContractedPlanModel(sequelize);
PlanModel(sequelize);
PaymentModel(sequelize);
SpecialityModel(sequelize);
TicketModel(sequelize);

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

// *Aca vendrian las relaciones
// !Patient vs Ticket = 1 : N
// !Doctor vs Ticket = 1 : N
// !Ticket vs Payment = 1 : 1
// !Doctor vs Speciality = N : N
// !Patient vs ContractedPlan = 1 : N
// !ContractedPlan vs Plan = 1 : 1
// !ContractedPlan vs Paids = 1 : N

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
