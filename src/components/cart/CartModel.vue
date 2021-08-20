<template>
  <div class="modal fade" id="cartModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-labelledby="cartModalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="cartModalTitle">
            Shopping Cart
          </h5>
          <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-4">
          <div v-if="totalAmount > 0">
            <!-- CartProductsList component -->
            <cart-product-list></cart-product-list>
            <!-- CartBillingForm component -->
            <cart-billing-form></cart-billing-form>
          </div>
          <div v-else>Cart is empty!</div>
        </div>
        <div class="modal-footer">
          <button type="button" @click="order" :disabled="isError" :class="`${(isError) ? 'btn btn-secondary' : 'btn btn-success'}`">Place Order</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartProductList from "./CartProductList";
import CartBillingForm from "./CartBillingForm";
export default {
  name: "CartModel",
  components: {CartBillingForm, CartProductList},
    computed: {
      totalAmount() {
        return this.$root.totalAmount;
      },
      products() {
        return this.$root.cartProducts;
      },
    },
  methods: {
    order() {
        console.log(this.products);
        console.log(document.getElementById('firstName').value);
        document.getElementById('firstName').value = "";
        console.log(document.getElementById('lastName').value);
        document.getElementById('lastName').value = "";
        console.log(document.getElementById('city').value);
        document.getElementById('city').value = "";
        console.log(document.getElementById('address').value);
        document.getElementById('address').value = "";
        console.log(document.getElementById('email').value);
        document.getElementById('email').value = "";
        console.log(document.getElementById('phone').value);
        document.getElementById('phone').value = "";
    },
    isError() {
      this.isErrorInArray();
    }
  }
}
</script>

<style scoped>

</style>