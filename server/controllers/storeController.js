const {Store} = require('../models/models')

class StoreController {

    async create(req, res) {
        const {name} = req.body
        const store =   await Store.create({name})
        return res.json(store)
    }

    async getAll(req, res){
        const stores = await Store.findAll()
        return res.json(stores)
    }

}

module.exports = new StoreController()