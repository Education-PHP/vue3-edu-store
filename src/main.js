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
    computed: {
        totalAmount() {
            return this.cartProducts.length;
        }
    },
    methods: {
        addToCart(product) {

            this.cartProducts.push(product);
        },
        isInCart(id) {
           return !!this.cartProducts.find(item) => item.id === id);
        }
    },
});
app.component("product-list", ProductList);
app.component("cart-button", CartButton);
app.component("cart-model", CartModel);
app.mount("#app");
