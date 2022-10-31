const mongoose = require('mongoose')

//Database name created here in the connection method
mongoose.connect('mongodb://localhost/authors',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {
    console.log("Connected to authors DB")
}).catch((err) => {
    console.log(err)
})