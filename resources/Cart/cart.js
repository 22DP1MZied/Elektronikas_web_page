
import { createStore } from 'vuex';

const store = createStore({
    state: {
        cart: JSON.parse(localStorage.getItem('cart')) || [], // Array to store cart items
    },

    mutations: {
        ADD_TO_CART(state, product) {

            state.cart.push({ ...product, quantity: product.quantity || 1 });


            // Save updated cart to localStorage
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },


        CLEAR_CART(state) {
            state.cart = [];
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
    },
    getters: {
        cartItems: (state) => state.cart,
        cartTotal: (state) =>
            state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
    },
});

export default store;
