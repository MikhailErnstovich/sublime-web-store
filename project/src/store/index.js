import { createStore } from 'vuex'

import Catalog from './modules/catalog.js';
import Cart from './modules/cart.js';
import Search from './modules/search.js';

export default createStore({
  modules: { Catalog, Cart, Search },
});
