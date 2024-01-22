const Controller = require('../controllers/controller')

const router = require('express').Router()


router.get('/books', Controller.getAll)
router.get('/ejs/books',Controller.ejsBook)
router.get('/books/:id',Controller.getOne)



module.exports = router