const {
    getPaidsAll,
    getPaidsByCode,
    getPaidById
} = require("../../controllers/paidControllers/paidControllers.js")


const getPaidsHandler = async (req, res) => {
    const { code } = req.query

    try {
        const paids = code ? getPaidsByCode(code)
                           : getPaidsAll();
        res.status(200).json(paids)
    } catch (erro ){
        res.status(400).json({error: error})
    }   
}

const getPaidByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const paid = await getPaidById(id);
        res.status(200).json(paid)
    } catch ( error ) {
        res.status(400).json({error: error})
    }
}

module.exports = {
    getPaidsHandler,
    getPaidByIdHandler
}