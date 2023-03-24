const { Plan } = require("../../db")
const { Op } = requere("sequelize")


const getPlanAll = async () => {
    const plans = await Plan.findAll()
    return plans;
}

const getPlanByCode = async (code) => {
    const planSearch = await Plan.findAll({
        where: {
            code: {
                [Op.iLike]: `%${code}`
            }
        }
    })

    if(!planSearch) return "No existe plan con ese codigo"

    return planSearch
}

const getPlanById = async (id) => {
    const plan = await Plan.findByPK(id);
    if(!plan) return `No se encontro ningun plan con el id = ${id} `
}

const updatePlan = async (id, name, members, price, description, code, consultations_per_patients) => {
    const plan = await Plan.findByPK(id)
    if(!plan) return `No se puede actualizar el plan con el id = ${id}, porque no existe `

    plan.set({
        name,
        members,
        price,
        description,
        code,
        consultations_per_patients
    })

    await plan.save();

    return plan;
}

const addPlan = async (name, members, price, description, code, consultations_per_patients) => {
    const newPlan = await Plan.create({
        name,
        members,
        price,
        description,
        code,
        consultations_per_patients
    })

    return newPlan;
}

const deletePlan = async (id) => {
    const plan = await Plan.findByPK(id)
    if(!plan) return `No existe plan con el  id = ${id} , no se puede eliminar`

    await plan.destroy();

    return `Se elimino el plan con el id = ${id}`
}

module.exports = {
    getPlanAll,
    getPlanByCode,
    getPlanById,
    updatePlan,
    addPlan,
    deletePlan
}