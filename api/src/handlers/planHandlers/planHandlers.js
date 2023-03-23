const {
    getPlanAll,
    getPlanByCode,
    updatePlan,
    addPlan,
    deletePlan
} = require("../../controllers/planControllers/planControllers.js")

const getPlansHandler = async () => {
    const { code } = req.query
    try {
        const plan = code ? await getPlanByCode(code)
                          : await getPlanAll()
        
        return res.status(200).json(plan)
    } catch(error){
        return res.status(400).json({error: error.message})
    }
}

const getPlanByIdHandler = async () => {
    const { id } = req.params
    try {
        const plan = await getPlanById(id);
        return res.status(200).json(plan)
    } catch(error) {
        return res.status(400).json({error: error.message})
    }
}

const updatePlanHandler = async () => {
    const { id, name, members, price, description, code, consultations_per_patients } = req.body;

    try {
        const response = await updatePlan(id);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(400).json({error: error})
    }
}

const addPlanHandler = async () => {
    const { name, members, price, description, code, consultations_per_patients } = req.body;
    try{
        if(!name || !members || !price || !description || !code || !consultations_per_patients){
            throw Error("No pueden haber campos vacios")
        }

        const planNew = await addPlan(name, members,price,description, code, consultations_per_patients)

        return res.status(200).json(planNew)
    } catch (error) {
        return res.status(400).json({error: error})
    }
}

const deletePlanHandler = async () => {
    const { id } = req.params;
    try {
        const result = await deletePlan(id);

        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json({error: error})
    }
}

module.exports = {
    getPlansHandler,
    getPlanByIdHandler,
    updatePlanHandler,
    addPlanHandler,
    deletePlanHandler
}