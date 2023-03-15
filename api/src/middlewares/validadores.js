// *Creamos un Middleware para verificar que nos envían los datos que son obligatorios por el modelo:
const validadorCreateMedico = (req, res, next) => {
  const {
    codigo,
    nombre,
    apellido,
    servicios,
    genero,
    fecha_nacimiento,
    email,
    telefono,
    foto,
  } = req.body;
  if (!codigo)
    return res
      .status(400)
      .json({ error: "Falta el código del Médico. Dato obligatorio" });
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

const validadorUpdateMedico = (req, res, next) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: "Falta el id" });
  next();
};

module.exports = {
  validadorCreateMedico,
  validadorUpdateMedico,
};
