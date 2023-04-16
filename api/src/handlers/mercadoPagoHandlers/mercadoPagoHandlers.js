
const {createPago} = require('../../controllers/mercadoPagoController/mercadoPagoController')


const POST_PAGO = async (req, res) => {
  try {
    const {id, title, description, picture_url, quantity, currency_id, unit_price} =req.body
    const request = await createPago(id, title, description, picture_url, quantity, currency_id, unit_price);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

  const GET_FILE= async (req, res) => {
    try {
      const {collection_status} = req.query
        console.log(collection_status);
          return res.status(200).json(req.query);
    } catch (error) {
          return res.status(400).json({error:error.message})
    }
 
        };









module.exports = {
  POST_PAGO,
  GET_FILE,
};
