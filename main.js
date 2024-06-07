const express = require('express');
const hbs = require('hbs');

const app = express();

//Setting up some variables that reference env, so we can modify them from the outside
const port = process.env.PORT || 3000;
const environment = process.env.ENVIRONMENT_NAME || "local";

//Setting up handlebars view engine
app.set('view engine', 'hbs');

//Default route that will render main handlebars file from the views directory
app.get('/', (req, res) => {
    res.render('main', { environment_name: environment })
})

//Starting the webserver
app.listen(port, () => {
    console.log(`App running on port: ${port}`)
})
