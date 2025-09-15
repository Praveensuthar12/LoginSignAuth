require('dotenv').config({ quiet: true });
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

const dbconnect = require("./config/dbconnect");
const AuthRouter = require('./Routes/AuthRoute');
const ProductRouter = require('./Routes/ProductRoute');

const PORT = process.env.PORT || 8080;
const HOSTNAME = process.env.HOSTNAME;

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

dbconnect().then(() => {
    console.log("Database Connected Successfully");
    app.listen(PORT, () => {
        console.log(`Server is running on http://${HOSTNAME}:${PORT}`)
    })
});
