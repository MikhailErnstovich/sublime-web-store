module.exports = {
    removeItem(cart, id) {
        return new Promise((res, rej) => {
            cart.items = cart.items.filter(el => el.id !== id);
            res(JSON.stringify(cart));
        })
    },

    changeItemAmount(cart, id, value) {
        return new Promise((res, rej) => {
            const item = cart.items.find(el => el.id === id);
            if (item) {
                item.amount += value;
            }
            if(item.amount && item.amount > 0) {
                res(JSON.stringify(cart));
            } else {
                cart.items = cart.items.filter(el => el.amount > 0);
                res(JSON.stringify(cart));
            }
        });
    },

    addNewItem(cart, catalog, id) {
        return new Promise((res, rej) => {
            const item = catalog.items.find(el => el.id === id);
            if (item) {
                item.amount = 1;
                if(!cart.items.find(el => el.id === id)) {
                    cart.items.push(item);
                    res(JSON.stringify(cart));
                } else {
                    cart.items.find(el => el.id === id).amount++;
                    res(JSON.stringify(cart));
                }
            }
        });
    }
};