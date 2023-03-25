const { Paids } = require("../../db.js")


const getPaidsAll = async () => {
    const paids = await Paids.findAll();
    return paids;
}

const getPaidsByUserId = async (userId) => {
    const  paids = await Paids.findAll({
        where: {
            userId: userId
        }
    })  
    return paids  
}

const getPaidsByPlanId = async (planId) => {
    const  paids = await Paids.findAll({
        where: {
            planId: planId
        }
    })  
    return paids  
}
const getPaidById = async (id) => {
    const paid = await Paids.findByPk(id);
    return paid;
}

const updatePaidById = async (id, check) => {
    const paid = await Paids.findByPk(id);
    if(!paid) throw Error(`No existe ticket con el id = ${id}`)

    paid.check = check;
    await paid.save()

    return paid
}   


module.exports = {
    getPaidsAll,
    getPaidsByUserId,
    getPaidsByPlanId,
    getPaidById,
    updatePaidById
}