const { Analisys } = require("../../db")

//getAnalysis devuelve todos los campos que tenga la tabla Analysis
const getAnalysis = async () => {
    const request = await Analysis.findAll({
        order: [['speciality', 'ASC']]
    })
    return request
}

//createAnalysis crea un nuevo analysis
const createAnalysis = async (params) => {
    if (params) {
        const nuevaAnalisys= await Analisys.create({
        name: params.name
    });
    return {
        message: "El registro del Analisis se ha creado exitosamente"
    }; 
    }else { throw new Error("Necesita parametros para crear el registro de analisis")
    }
   
}

// changeSpeciality modifica el valor de la tabla analysis
const changeAnalysis = async (id, name) => {
    const request = await Analisys.findByPk(id);
    if (request) {
      request.name = name;
      await request.save();
      return {message: "modificado con exito"}
    } else {
      throw new Error("Analisis no encontrado");
    }
  };

  // deleteAnalysis permite eliminar especialidades en la tabla Analisis
const deleteAnalysis = async (params) => {
    const deleteAnaly = await Analisys.destroy({
        where: {
            name: params.name
        }
    });
    if (deleteAnaly === 1) {
        return {
            message: `Se ha eliminado el analisis ${params.name} exitosamente`
        };
    } else { throw new Error (`No se ha encontrado la especialidad ${params.speciality}`)
    }
}






module.exports ={
    getAnalysis,
    createAnalysis,
    changeAnalysis,
    deleteAnalysis

}