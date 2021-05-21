const express = require('express');
const app = express();

app.get('/', (req,res,next) => {
    res.send('Welcome to the homepage');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Fuck AWS");
});

