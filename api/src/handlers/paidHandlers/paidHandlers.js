const {
    getPaidsAll,
    getPaidsByCode,
    getPaidById
} = require("../../controllers/paidControllers/paidControllers.js")


const getPaidsHandler = async () => {
    const { code } = req.query

    try {
        const paids = code ? getPaidsByCode(code)
                           : getPaidsAll();
        resizeBy.status(200).json(paids)
    } catch (erro ){
        resizeBy.status(400).json({error: error})
    }   
}

const getPaidByIdHandler = async () => {
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