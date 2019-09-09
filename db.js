const mongoose = require('mongoose');
//mongodb://localhost/clasegeek
mongoose.connect('mongodb+srv://dracgeek:TURNruY3yEHTa7ng@cluster0-l1vgh.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
}) 
    .then(db => console.log(`DB is connected`))
    .catch(err => console.error(err));

    