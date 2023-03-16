// *Creamos varios Middlewares para verificar que nos envían los datos que son obligatorios por sus modelos para crear y actualizar:
// *Validador para crear a un médico:
const validadorCreateMedico = (req, res, next) => {
  const {
    codigo,
    dni,
    nombre,
    apellido,
    servicios,
    genero,
    edad,
    fecha_nacimiento,
    email,
    telefono,
    foto,
  } = req.body;
  if (!codigo)
    return res
      .status(400)
      .json({ error: "Falta el código del Médico. Dato obligatorio" });
  if (!dni)
    return res
      .status(400)
      .json({ error: "Falta el DNI del Médico. Dato obligatorio" });
  if (!nombre)
    return res
      .status(400)
      .json({ error: "Falta el nombre del médico. Dato obligatorio" });
  if (!apellido)
    return res
      .status(400)
      .json({ error: "Falta el apellido del médico. Dato obligatorio" });
  if (!servicios)
    return res
      .status(400)
      .json({ error: "Falta la especialidad del médico. Dato obligatorio" });
  if (!genero)
    return res
      .status(400)
      .json({ error: "Falta el genero del médico. Dato obligatorio" });
  if (!edad)
    return res
      .status(400)
      .json({ error: "Falta la edad del médico. Dato obligatorio" });
  if (!fecha_nacimiento)
    return res.status(400).json({
      error: "Falta la fecha de nacimiento del médico. Dato obligatorio",
    });
  if (!email)
    return res.status(400).json({
      error: "Falta el email del médico. Dato obligatorio",
    });
  if (!telefono)
    return res.status(400).json({
      error: "Falta el telefono del médico. Dato obligatorio",
    });
  if (!foto)
    return res.status(400).json({
      error: "Falta la foto del médico. Dato obligatorio",
    });

  next();
};

// *Validador para actualizar al registro de un médico:
const validadorUpdateMedico = (req, res, next) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: "Falta el id" });
  next();
};

// *Validador para crear a un paciente:
const validadorCreatePaciente = (req, res, next) => {
  const {
    nombre,
    apellido,
    dni,
    genero,
    edad,
    fecha_nacimiento,
    email,
    telefono,
    direccion,
    enfermedades,
    medicamentos,
    alergias,
  } = req.body;

  if (!dni)
    return res
      .status(400)
      .json({ error: "Falta el DNI del paciente. Dato obligatorio" });
  if (!nombre)
    return res
      .status(400)
      .json({ error: "Falta el nombre del paciente. Dato obligatorio" });
  if (!apellido)
    return res
      .status(400)
      .json({ error: "Falta el apellido del paciente. Dato obligatorio" });
  if (!genero)
    return res
      .status(400)
      .json({ error: "Falta el genero del paciente. Dato obligatorio" });
  if (!edad)
    return res
      .status(400)
      .json({ error: "Falta la edad del paciente. Dato obligatorio" });
  if (!fecha_nacimiento)
    return res.status(400).json({
      error: "Falta la fecha de nacimiento del paciente. Dato obligatorio",
    });
  if (!email)
    return res.status(400).json({
      error: "Falta el email del paciente. Dato obligatorio",
    });
  if (!telefono)
    return res.status(400).json({
      error: "Falta el telefono del paciente. Dato obligatorio",
    });
  if (!direccion)
    return res.status(400).json({
      error: "Falta la dirección del paciente. Dato obligatorio",
    });
  if (!enfermedades)
    return res.status(400).json({
      error: "Falta detallar las enfermedades del paciente. Dato obligatorio",
    });
  if (!medicamentos)
    return res.status(400).json({
      error:
        "Falta detallar que medicamentos toma el paciente. Dato obligatorio",
    });
  if (!alergias)
    return res.status(400).json({
      error: "Falta detallar que alergias tiene el paciente. Dato obligatorio",
    });

  next();
};

// *Validador para actualizar al registro de un paciente:
const validadorUpdatePaciente = (req, res, next) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: "Falta el id" });
  next();
};

module.exports = {
  validadorCreateMedico,
  validadorUpdateMedico,
  validadorCreatePaciente,
  validadorUpdatePaciente
};
