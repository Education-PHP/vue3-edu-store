import { createApp } from "vue";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

import ProductList from "./components/ProductList";
import CartButton from "./components/cart/CartButton";

const app = createApp({
    data: () => ({
        cartProducts: [],
    }),
    methods: {
        addToCart(product) {
            this.cartProducts.push(product);
        },
    },
});
app.component("product-list", ProductList);
app.component("cart-button", CartButton);
app.mount("#app");
