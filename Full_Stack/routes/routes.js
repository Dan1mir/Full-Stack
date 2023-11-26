const Router = require('express')
const router = new Router()
const Controller = require('../controllers/controller.js')//Сразу-же импортируем класс контроллера который мы создали

router.post('/wheel', Controller.create)
router.get('/wheel', Controller.getAll)
router.get('/wheel/:id', Controller.getOne) //указываем id для получения нужного объекта
router.put('/wheel', Controller.update)
router.delete('/wheel/:id', Controller.deleteItem) //то-же самое

module.exports = router