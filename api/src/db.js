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
// *Relaciones 1 a 1:
// ?TicketAnalysis vs Payment = 1 : 1
// Añade una clave foranea analysis_id a la tabla payment
TicketAnalysis.hasOne(Payment, { as: "payment", foreignKey: "analysis_id" });
Payment.belongsTo(TicketAnalysis, {
  as: "ticketAnalysis",
  foreignKey: "analysis_id",
});

// ?Doctor vs Schedule = 1 : 1
// Añade una clave foranea doctor_id a la tabla schedule
Doctor.hasOne(Schedule, { as: "schedule", foreignKey: "doctor_id" });
Schedule.belongsTo(Doctor, { as: "doctor", foreignKey: "doctor_id" });

// *Relaciones 1 a N:
// ?Patient vs TicketMedical = 1 : N
// Se añade una clave foranea ticket_id a la tabla ticketMedical
Patient.hasMany(TicketMedical, {
  as: "ticketMedical",
  foreignKey: "ticket_id",
});
TicketMedical.belongsTo(Patient, { as: "patient" });

// ?Patient vs TicketAnalysis = 1 : N
// Se añade una clave foranea patient_id a la tabla ticketanalysis
Patient.hasMany(TicketAnalysis, {
  as: "ticketAnalysis",
  foreignKey: "patient_id",
});
TicketAnalysis.belongsTo(Patient, { as: "patient" });

// ?Doctor vs TicketMedical = 1 : N
// Se añade una clave foranea doctor_id a la tabla ticketMedical
Doctor.hasMany(TicketMedical, { as: "ticketMedical", foreignKey: "doctor_id" });
TicketMedical.belongsTo(Doctor, { as: "doctor" });

// ?Doctor vs Speciality = N : N
// Se añade una clave foranea doctor_id a la tabla speciality
Doctor.hasMany(Speciality, { as: "speciality", foreignKey: "doctor_id" });
Speciality.belongsTo(Doctor, { as: "doctor" });

// ?Plan vs Patient = 1 : N
// Se añade una clave foranea plan_id a la tabla patient
Plan.hasMany(Patient, { as: "patient", foreignKey: "plan_id" });
Patient.belongsTo(Plan, { as: "plan" });

// ?Plan vs User = 1 : N
// Se añade una clave foranea plan_id a la tabla user
Plan.hasMany(User, { as: "user", foreignKey: "plan_id" });
User.belongsTo(Plan, { as: "plan" });

// ?User vs Paid = 1 : N
// Se añade una clave foranea user_id a la tabla paid
User.hasMany(Paid, { as: "paid", foreignKey: "user_id" });
Paid.belongsTo(User, { as: "user" });

// ?User vs Patient = 1 : N
// Se añade una clave foranea user_id a la tabla patient
User.hasMany(Patient, { as: "patient", foreignKey: "user_id" });
Patient.belongsTo(User, { as: "user" });

// ?Plan vs Paids = 1 : N
// Se añade una clave foranea plan_id a la tabla paids
Plan.hasMany(Paids, { as: "paids", foreignKey: "plan_id" });
Paids.belongsTo(Plan, { as: "plan" });

// ?User vs Doctor = 1 : N
// Se añade una clave foranea user_id a la tabla doctor
User.hasMany(Doctor, { as: "doctor", foreignKey: "user_id" });
Doctor.belongsTo(User, { as: "user" });

// *Relaciones N a N:
// ?Doctor vs Speciality = N : N
// Doctor tiene muchas specialties
Doctor.belongsToMany(Speciality, { through: "doctor_speciality" });
Speciality.belongsToMany(Doctor, { through: "doctor_speciality" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
