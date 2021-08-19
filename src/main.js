import { createApp } from "vue";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

import ProductList from "./components/ProductList";
import CartButton from "./components/cart/CartButton";
import CartModel from "./components/cart/CartModel";

const app = createApp({
    data: () => ({
        cartProducts: [],
    }),
    methods: {
        addToCart(product) {
            this.cartProducts.push({...product, amount: 1});
        },
        isInCart(id) {
           return !!this.cartProducts.find((item) => item.id === id);
        },
        removeProduct(index) {
            this.cartProducts.splice(index, 1);
        },
        addMore(index) {
            const product = this.cartProducts[index];
            this.cartProducts.splice(index, 1, {...product, amount: product.amount + 1});
        },
        removeOne(index) {
            const product = this.cartProducts[index];
            this.cartProducts.splice(index, 1, {...product, amount: product.amount - 1});
        },
    },
    computed: {
        isCartEmpty() {
            return !!this.cartProducts.length;
        },
        totalAmount() {
            return this.cartProducts.reduce((total, item) => total + item.amount, 0);
        },
        totalPrice() {
            return this.cartProducts.reduce((total, {price, amount}) => total + (amount * price), 0);
        },
        cartProducts() {
            return this.cartProducts;
        },
    },
});
app.component("product-list", ProductList);
app.component("cart-button", CartButton);
app.component("cart-model", CartModel);
app.mount("#app");
