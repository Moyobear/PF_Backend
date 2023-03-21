const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const DoctorModel = require("./models/Doctor");
const PatientModel = require("./models/Patient");
const PaidsModel = require("./models/Paids");
const ScheduleModel = require("./models/Schedule");
const PlanModel = require("./models/Plan");
const PaymentModel = require("./models/Payment");
const SpecialityModel = require("./models/Speciality");
const TicketMedicalModel = require("./models/TicketMedical ");
const TicketAnalysislModel = require("./models/TicketAnalysis");
const UserModel = require("./models/User");
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
ScheduleModel(sequelize);
PlanModel(sequelize);
PaymentModel(sequelize);
SpecialityModel(sequelize);
TicketMedicalModel(sequelize);
TicketAnalysislModel(sequelize);
UserModel(sequelize);

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
const {
  Doctor,
  Paids,
  Patient,
  Payment,
  Plan,
  Schedule,
  Speciality,
  TicketMedical,
  TicketAnalysis,
  User,
} = sequelize.models;

// *Aca vendrian las relaciones:
// ?Patient vs TicketMedical = 1 : N
// ?Patient vs TicketAnalysis = 1 : N
// ?Doctor vs TicketMedical = 1 : N
// ?TicketAnalysis vs Payment = 1 : 1
// ?Doctor vs Speciality = N : N
// ?Patient vs Plan = 1 : N
// ?Plan vs User = 1 : N
// ?User vs Paid = 1 : N
// ?User vs Patient = 1 : N
// ?Plan vs Paids = 1 : N
// ?User vs Doctor = 1 : N
// ?Doctor vs Schedule = 1 : 1

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
