const Author = require('../models/author.model')

module.exports = {
    getAllAuthors:(req,res) => {
        Author.find()
        .then((results) => {
            res.json(results)
        }).catch((err) => {
            res.status(400).json(err)
        })
    },
    getOneAuthor:(req,res) => {
        Author.findById(req.params.id)
        .then((results) => {
            res.json(results)
        }).catch((err) => {
            res.status(400).json(err)
        })
    },
    addAuthor:(req,res) => {
        Author.create(req.body)
        .then((results) => {
            res.json(results)
        }).catch((err) => {
            //Error should be handled here differently when validations used in the model.
            res.status(400).json(err)
        })
    },
    updateAuthor:(req,res) => {
        Author.updateOne({_id:req.params.id}, req.body, {new:true, runValidators: true} )
        .then((results) => {
            res.json(results)
        }).catch((err) => {
            res.status(400).json(err)
        })
    },
    deleteAuthor:(req,res) => {
        Author.deleteOne({_id:req.params.id})
        .then((results) => {
            res.json(results)
        }).catch((err) => {
            res.status(400).json(err)
        })
    }
}