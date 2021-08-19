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
      <input type="text" v-model="city" :class="{'form-control': true, 'is-invalid': !isCityNameValid}" id="city" placeholder="City">
    </div>
    <div class="col-12">
      <label for="address" class="form-label">Address</label>
      <input type="text" v-model="address" :class="{'form-control': true, 'is-invalid': !isAddressNameValid}" id="address" placeholder="Address">
    </div>
    <div class="col-md-6">
      <label for="email" class="form-label">Email Address</label>
      <input type="email" v-model="emailAddress" :class="{'form-control': true, 'is-invalid': !isEmailAddressNameValid}" id="email" placeholder="Email Address">
    </div>
    <div class="col-md-6">
      <label for="phone" class="form-label">Phone</label>
      <input type="text" v-model="phone" :class="{'form-control': true, 'is-invalid': !isPhoneNumberValid}" id="phone" placeholder="+380 ">
    </div>
  </form>
</template>

<script>
export default {
  name: "CartBillingForm",
  data: () => ({
    errors : [],
    firstName: "",
    lastName: "",
    city: "",
    address: "",
    emailAddress: "",
    phone: "",
    isFirstNameValid : true,
    isLastNameValid : true,
    isCityNameValid : true,
    isAddressNameValid : true,
    isEmailAddressNameValid : true,
    isPhoneNumberValid : true
  }),
  watch: {
    firstName(newValue) {
      if ((newValue === "")
          ||(newValue[0] !== newValue[0].toUpperCase())
          || (newValue.length > 10)
          || (newValue !== newValue.replace(/^\s+|\s+$/g,''))) {
        this.isFirstNameValid = false;
        this.errors.push('Incorrectly entered firstname');
      }
    },
    lastName(newValue) {
      if ((newValue === "")
          || (newValue[0] !== newValue[0].toUpperCase())
          || (newValue.length > 20)
          || (newValue !== newValue.replace(/^\s+|\s+$/g,''))) {
        this.isLastNameValid = false;
        this.errors.push('Incorrectly entered lastname');
      }
    },
    city(newValue) {
      if ((newValue === "")
          || (newValue[0] !== newValue[0].toUpperCase())
          || (newValue.length > 20)
          || (newValue !== newValue.replace(/^\s+|\s+$/g,''))) {
        this.isCityNameValid = false;
        this.errors.push('Incorrectly entered name city');
      }
    },
    address(newValue) {
      if ((newValue === "")
          || newValue.length > 50) {
        this.isAddressNameValid = false;
        this.errors.push('Incorrectly entered name address');
      }
    },
    emailAddress(newValue) {
      if ((newValue === "")
          || (newValue.length > 30)
          || (newValue !== newValue.replace(/^\s+|\s+$/g,''))) {
        this.isEmailAddressNameValid = false;
        this.errors.push('Incorrectly entered email');
      }
    },
    phone(newValue) {
      if ((newValue === "")
          || (newValue.length > 9)
          || (newValue !== newValue.replace(/^\s+|\s+$/g,''))) {
        this.isPhoneNumberValid = false;
        this.errors.push('Incorrectly entered phone');
      }
    }
  },
  methods: {
    placeOrder() {}
    },
  computed: {
    isErrorInArray() {
      return this.errors.length > 0;
    }
  }
}
</script>

<style scoped>

</style>