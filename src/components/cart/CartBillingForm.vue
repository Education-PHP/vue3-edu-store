<template>
  <h5>
    Billing details
  </h5>
  <form @submit.prevent="placeOrder" ref="reset" class="row g-3 mb-3">
    <div class="col-md-6">
      <label for="firstName" class="form-label">First Name</label>
      <input type="text" v-model="firstName" :class="{'form-control': true, 'is-invalid': !isFirstNameValid}" id="firstName" placeholder="First Name">
    </div>
    <div class="col-md-6">
      <label for="lastName" class="form-label">Last Name</label>
      <input type="text" v-model="lastName" :class="{'form-control': true, 'is-invalid': !isLastNameValid}" id="lastName" placeholder="Last Name">
    </div>
    <div class="col-12">
      <label for="city" class="form-label">City</label>
      <input type="text" v-model="city" :class="{'form-control': true, 'is-invalid': !isCityValid}" id="city" placeholder="City">
    </div>
    <div class="col-12">
      <label for="address" class="form-label">Address</label>
      <input type="text" v-model="address" :class="{'form-control': true, 'is-invalid': !isAddressValid}" id="address" placeholder="Address">
    </div>
    <div class="col-md-6">
      <label for="email" class="form-label">Email Address</label>
      <input type="email" v-model="emailAddress" :class="{'form-control': true, 'is-invalid': !isEmailAddressValid}" id="email" placeholder="Email Address">
    </div>
    <div class="col-md-6">
      <label for="phone" class="form-label">Phone</label>
      <input type="text" v-model="phone" :class="{'form-control': true, 'is-invalid': !isPhoneNumberValid}" id="phone" placeholder="+380 ">
    </div>
    <div class="modal-footer">
      <button type="button" @click="order" :disabled="hasError" :class="`${(hasError) ? 'btn btn-secondary' : 'btn btn-success'}`">Place Order</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "CartBillingForm",
  data: () => ({
    firstName: "",
    lastName: "",
    city: "",
    address: "",
    emailAddress: "",
    phone: "",
    isFirstNameValid : true,
    isLastNameValid : true,
    isCityValid : true,
    isAddressValid : true,
    isEmailAddressValid : true,
    isPhoneNumberValid : true
  }),
  watch: {
    firstName(newValue) {
      this.isFirstNameValid = true;
      if ((newValue === "")
          ||(newValue[0] !== newValue[0].toUpperCase())
          || (newValue.length > 10)
          || (newValue !== newValue.replace(/^\s+|\s+$/g,''))) {
        this.isFirstNameValid = false;
      }
    },
    lastName(newValue) {
      this.isLastNameValid = true;
      if ((newValue === "")
          || (newValue[0] !== newValue[0].toUpperCase())
          || (newValue.length > 20)
          || (newValue !== newValue.replace(/^\s+|\s+$/g,''))) {
        this.isLastNameValid = false;
      }
    },
    city(newValue) {
      this.isCityValid = true;
      if ((newValue === "")
          || (newValue[0] !== newValue[0].toUpperCase())
          || (newValue.length > 20)
          || (newValue !== newValue.replace(/^\s+|\s+$/g,''))) {
        this.isCityValid = false;
      }
    },
    address(newValue) {
      this.isAddressValid = true;
      if ((newValue === "")
          || newValue.length > 50) {
        this.isAddressValid = false;
      }
    },
    emailAddress(newValue) {
      this.isEmailAddressValid = true;
      if ((newValue === "")
          || (newValue.length > 30)
          || (newValue !== newValue.replace(/^\s+|\s+$/g,''))) {
        this.isEmailAddressValid = false;
      }
    },
    phone(newValue) {
      this.isPhoneNumberValid = true;
      if ((newValue === "")
          || (newValue.length !== 8)
          || (newValue !== newValue.replace(/^\s+|\s+$/g,''))) {
        this.isPhoneNumberValid = false;
      }
    }
  },
  methods: {
    placeOrder() {},
    order() {
      console.log(this.products);
      console.log(this.firstName, this.lastName, this.city, this.address, this.emailAddress, this.phone);
      this.firstName = "";
      this.lastName = "";
      this.city = "";
      this.address = "";
      this.emailAddress = "";
      this.phone = "";
    },
  },
  computed: {
    hasError() {
      return (!this.isFirstNameValid
      || !this.isLastNameValid
      || !this.isCityValid
      || !this.isAddressValid
      || !this.isEmailAddressValid
      || !this.isPhoneNumberValid);
    },
    products() {
      return this.$root.cartProducts;
    },
  },
}
</script>

<style scoped>

</style>