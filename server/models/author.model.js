const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minLength: [3, "Minimum length is 3"]
    }
},{timestamps: true})
//Options can be added at the end of our schema object. The timestamp object added as an optional here will create an UpdatedAt and CreatedAt along with the _id when new documents are generated in the collection.
// Recommended to always add the timestamp option in.

const Author = mongoose.model('Movie', AuthorSchema)
//The first parameter above defines what the schema will be called in our database, the second brings in the schema we created above.

module.exports = Author