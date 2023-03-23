const { Speciality } = require("../../db")


//getSpeciality devuelve todos los campos que tenga la tabla Speciality
const getSpeciality = async () => {
    const request = await Speciality.findAll({
        order: [['speciality', 'ASC']]
    })
    return request
}
// createSpeciality permite crear mas especialidades en la tabla Speciality

const createSpeciality = async (params) => {
    const nuevaSpeciality = await Speciality.create({
        speciality: params.speciality
    });
    return {
        message: "El registro de especialidad se ha creado exitosamente"
    };
};


// changeSpeciality modifica el valor de la tabla Speciality

const changeSpeciality = async (id, newSpeciality) => {
    const result = await Speciality.update(
        {
            speciality: newSpeciality
        },
        {
            where: {
                id: id
            }
        }
    );

    if (result[0] === 1) {
        return {
            message: `Se ha actualizado la especialidad con id ${id} exitosamente`
        };
    } else {
        return {
            message: `No se ha encontrado la especialidad con id ${id}`
        };
    }
};



// deleteSpeciality permite eliminar especialidades en la tabla Speciality
const deleteSpeciality = async (params) => {
    const deleteSpeci = await Speciality.destroy({
        where: {
            speciality: params.speciality
        }
    });
    if (deleteSpeci === 1) {
        return {
            message: `Se ha eliminado la especialidad ${params.speciality} exitosamente`
        };
    } else {
        return {
            message: `No se ha encontrado la especialidad ${params.speciality}`
        };
    }

}
module.exports = {
    getSpeciality,
    createSpeciality,
    changeSpeciality,
    deleteSpeciality
}