const express = require('express');
const { db } = require('./db.js');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
    origin: '*'
}));

const dbConnect = async () => {

    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
dbConnect();

const routes = require('./routes/index.js');

app.use(routes);

app.listen(3001, () => {
    console.log('server on port 3001');
    db.sync({force: false});
});
