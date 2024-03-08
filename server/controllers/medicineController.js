const {Medicine} = require('../models/models')

class MedicineController {

    async create(req, res) {
        const {name, price, storeId, img } = req.body
        const medicine =   await Medicine.create({name, price, storeId, img})
        return res.json(medicine)
    }

    async getAll(req, res){
        const {storeId} = req.query
        let medicines
        if(!storeId) {
            medicines = await Medicine.findAll({})
        }

        if (storeId) {
            medicines = await Medicine.findAll({where: {storeId}})
        }

        return res.json(medicines)

    }

    async getOne(req, res){
        const {id} = req.params
        const medicine = await Medicine.findOne(
            {
                where: {id}
            },
        )
        return res.json(medicine)
    }
}

module.exports = new MedicineController()