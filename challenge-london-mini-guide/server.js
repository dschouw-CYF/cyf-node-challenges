//use expressjs and create a default route returning a string
const express = require('express');
const app = express();
const port = process.env.port || 3000;

const supportedRoutes = [
    {"/pharmcies": "retruns an array of pharmacies in a specific area"}
]

app.get('/', (req, res) => {
    res.send(supportedRoutes);
    }
);
//start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    });

