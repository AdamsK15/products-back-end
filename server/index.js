require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const products_controller = require('./products_controller');

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

app.get('/api/products', products_controller.getAll);
app.get('/api/products/:id', products_controller.getOne);
app.put('/api/products/:id', products_controller.update);
app.post('/api/products', products_controller.create);
app.delete('/api/products/:id', products_controller.delete);

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(dbInstance => {
    app.set('db', dbInstance);
})
    .catch(err => console.log(err));

app.listen(SERVER_PORT, () => {
    console.log(`DB connected & Server is running in port ${SERVER_PORT}`);
});