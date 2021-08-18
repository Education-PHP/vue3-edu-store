<template>
  <table class="table cart-table">
    <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col" class="text-center">Quantity</th>
      <th scope="col" class="text-center">Price</th>
      <th scope="col"></th>
    </tr>
    </thead>
    <tbody>
    <!-- CartProductItem component -->
    <cart-product-item
        v-for="product in products"
        :key="product.id"
        :name="product.name"
        :price="product.price"
        :amount="product.amount"
        :image="product.image"
    ></cart-product-item>
    </tbody>
    <tfoot>
    <tr class="fw-bold px-4">
      <td class="text-end">
        Total:
      </td>
      <td class="text-center">2</td>
      <td class="text-end">$2998</td>
    </tr>
    </tfoot>
  </table>
</template>

<script>
import CartProductItem from "./CartProductItem";
export default {
  name: "CartProductList",
  components: CartProductItem,
  computed: {
    products() {
      return this.$root.cartProducts;
    }
    }
}
</script>

<style scoped>

</style>