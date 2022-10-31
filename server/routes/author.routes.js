const AuthorController = require('../controllers/author.controllers')

module.exports = (app) => {
    //get all authors
    app.get('/api/allAuthors', AuthorController.getAllAuthors)
    //get one author
    app.get('/api/author/:id', AuthorController.getOneAuthor)
    //create new author
    app.post('/api/addAuthor', AuthorController.addAuthor)
    //update author
    app.put('/api/update/:id', AuthorController.updateAuthor)
    //delete author
    app.delete('/api/delete/:id', AuthorController.deleteAuthor)
}