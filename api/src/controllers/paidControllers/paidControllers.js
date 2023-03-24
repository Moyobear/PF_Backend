const { Paids } = require("../../db.js")


const getPaidsAll = async () => {
    const paids = await Paids.findAll();
    return paids;
}

const getPaidsByCode = async (code) => {
    const  paids = await Paids.findAll({
        where: {
            code: code
        }
    })    
}

const getPaidById = async (id) => {
    const paid = await Paids.findByPK(id);
    return paid;
}

module.exports = {
    getPaidsAll,
    getPaidsByCode,
    getPaidById
}