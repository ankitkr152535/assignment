
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
require('dotenv').config();

const userContactsRoute = require("./routes/userContactsRoute");

const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api', userContactsRoute);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('<h1>This is the server</h1>');
});