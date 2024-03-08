const Router = require('express')
const router = new Router()

const medicineRouter = require('./medicineRouter')
const orderRouter = require('./orderRouter')
const storeRouter = require('./storeRouter')


router.use('/medicine', medicineRouter)
router.use('/order', orderRouter)
router.use('/store', storeRouter)



module.exports = router