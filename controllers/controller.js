const  bookData = require('../data/books.json')

class Controller{
    static getAll(req,res){
        res.send(bookData)
    }

    static getOne(req,res){
        let id = req.params.id
        res.send(bookData[Number(id-1)])
    }

    static ejsBook(req,res){
        let data = [...bookData]
        res.render('home',{data})
    }
}

module.exports = Controller