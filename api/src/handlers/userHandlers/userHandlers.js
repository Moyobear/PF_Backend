const {getAllUser, createUser, isAdmin, deleteUser,} = require('../../controllers/userController/userController')


const GET_USER = async (req, res) => {
    const data = await getAllUser()
    res.status(200).json(data)
}

const POST_USER = async (req, res) => {
    try {
        const {full_name, email, password, user_name, image, is_plan_pay} = req.body
        const data = await createUser(full_name, email, password, user_name, image, is_plan_pay)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({error: error.message})
    }}


const PUT_ISADMIN = async (req, res) => {
    try {
        const {id, boolean} = req.body
    const data = await isAdmin(id, boolean)
    res.status(200).json(data)
    } catch (error) {
    res.status(400).json({error: error.message})
    }}


const DELETE_USER = async (req, res) => {
    try {
        const {id} = req.body
    const data = await deleteUser(id)
    res.status(200).json(data) 
    } catch (error) {
    res.status(400).json({error: error.message})
    }
   
}

module.exports = {
    GET_USER,
    POST_USER,
    PUT_ISADMIN,
    DELETE_USER
}