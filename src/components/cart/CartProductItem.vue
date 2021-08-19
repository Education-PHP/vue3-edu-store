<template>
  <tr>
    <td>
      <div class="d-flex">
        <img class="img-fluid rounded-1" :src="image" width="70" :alt="name">
        <p class="mx-2 mb-0">
          {{ name }}
        </p>
      </div>
    </td>
    <td class="text-center">
      <div class="btn-group d-flex align-items-center" role="group">
        <button type="button" @click="removeOne" class="btn shadow-none">-</button>
        <span class="mx-2">{{amount}}</span>
        <button type="button" @click="addMore" class="btn shadow-none ">+</button>
      </div>
    </td>
    <td class="text-center py-3">${{price * amount}}</td>
    <td>
      <button class="btn shadow-none" @click="remove">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
        </svg>
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "CartProductItem",
  props: {
    name: {
      type: String,
      isRequired: Boolean
    },
    price: Number,
    amount: Number,
    image: String,
    index: Number
  },
  methods: {
    remove() {
      this.$root.removeProduct(this.index);
    },
    addMore() {
      if (this.amount < 5) {
        this.$root.addMore(this.index);
      }
    },
    removeOne() {
      if (this.amount > 0) {
        this.$root.removeOne(this.index);
      }
    }
  }
}
</script>

<style scoped>

</style>