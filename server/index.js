const express = require('express')
const app = express();

app.get('/', (req,res) =>{
    res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// https://nameless-bayou-20772.herokuapp.com/ 
// https://git.heroku.com/nameless-bayou-20772.gitp