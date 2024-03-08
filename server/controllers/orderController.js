const {Order, Medicine} = require('../models/models')
class OrderController {
    async create(req, res) {
        const {name, email, phone, address} = req.body
        const order =   await Order.create({name, email, phone, address})
        return res.json(order)
    }

}

module.exports = new OrderController()