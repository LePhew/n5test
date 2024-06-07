const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const environment = process.env.ENVIRONMENT_NAME || "local";

app.get('/', (req, res) => {
    res.send(`Hello from ${environment}`)
})

app.listen(port, () => {
    console.log(`App running on port: ${port}`)
})
