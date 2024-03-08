const Router = require('express')
const router = new Router()

const StoreController = require('../controllers/storeController')

router.post('/', StoreController.create)
router.get('/', StoreController.getAll)


module.exports  = router