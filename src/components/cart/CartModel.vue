<template>
  <div class="modal fade" id="cartModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-labelledby="cartModalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="cartModalTitle">
            Shopping Cart (7 Items)
          </h5>
          <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-4">
          <!-- CartProductsList component -->
            <cart-product-list></cart-product-list>
          <!-- CartBillingForm component -->
          <cart-billing-form></cart-billing-form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success">Place Order</button>
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
  components: {CartBillingForm, CartProductList}
}
</script>

<style scoped>

</style>