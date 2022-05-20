const express = require('express');

const reader = require('../plugins/reader');
const writer = require('../plugins/writer');
const cart = require ('./components/shopping');

const port = 3000;
const server = express();
const options = { encoding: 'utf-8' };


server.use(express.json());

server.get('/:comp', async (req, res) => {
    const path = `./src/public/${req.params.comp}.json`;
    try {
        res.json(await reader(path, options));
    } catch (err) {
        throw err;
    }
});

server.get('/catalog/:id', async (req, res) => {
    const path = './src/public/catalog.json';
    const id = req.params.id;
    try {
        const catalog = await reader(path, options);
        const result = catalog.items.find(el => el.id === +id);
        res.json(result);
    } catch (err) {
        throw err;
    }
});

server.delete('/cart/:id', async (req, res) => {
    const path = './src/public/cart.json';
    try {
        const data = await reader(path, options);
        cart.removeItem(data, +req.params.id)
            .then(async d => await writer(path, d))
            .then(d => res.json(d));
    } catch (err) {
        throw err;
    }
});

server.put('/cart/:id', async (req, res) => {
    const path = './src/public/cart.json';
    try {
        const data = await reader(path, options);
        cart.changeItemAmount(data, +req.params.id, req.body.value)
            .then(async d => await writer(path, d))
            .then(d => res.json(d));
    } catch (err) {
        throw err;
    }
});

server.post('/catalog/:id', async (req, res) => {
    const path = './src/public/';
    try {
        const cartData = await reader(path + 'cart.json', options);
        const catalogData = await reader(path + 'catalog.json', options);
        cart.addNewItem(cartData, catalogData, +req.params.id)
            .then(async d => await writer(path + 'cart.json', d))
            .then(d => res.json(d));
    } catch (err) {
        throw err;
    }
});


server.listen(port, () => {
    console.log(`App listening on localhost:${port}`)
});