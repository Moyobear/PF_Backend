// *Creamos varios Middlewares para verificar que nos envían los datos que son obligatorios por sus modelos para crear y actualizar:
// *Validador para crear a un doctor:
const validatorCreateDoctor = (req, res, next) => {
  const {
    code,
    dni,
    full_name,
    gender,
    age,
    birthday,
    phone,
    address,
    image,
    speciality,
  } = req.body;
  if (
    ![
      code,
      dni,
      full_name,
      gender,
      age,
      birthday,
      phone,
      address,
      image,
      speciality,
    ].every(Boolean)
  )
    return res.status(404).json({ error: "Falta enviar datos obligatorios" });

  next();
};

// *Validador para actualizar al registro de un médico:
const validatorUpdateDoctor = (req, res, next) => {
  const { id } = req.body;
  if (!id) return res.status(404).json({ error: "Falta el id" });
  next();
};

// *Validador para crear a un paciente:
const validatorCreatePatient = (req, res, next) => {
  const { full_name, dni, gender, age, birthday, phone, address } = req.body;

  if (![full_name, dni, gender, age, birthday, phone, address].every(Boolean))
    return res.status(404).json({ error: "Falta enviar datos obligatorios" });

  next();
};

// *Validador para actualizar al registro de un paciente:
const validatorUpdatePatient = (req, res, next) => {
  const { id } = req.body;
  if (!id) return res.status(404).json({ error: "Falta el id" });
  next();
};

module.exports = {
  validatorCreateDoctor,
  validatorUpdateDoctor,
  validatorCreatePatient,
  validatorUpdatePatient,
};