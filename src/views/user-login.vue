<template>
  <section class="user-login page-layout">
    <login-modal />
  </section>
</template>

<script>
import loginModal from "../components/user-cmps/login-modal.vue";
export default {
  name: "user-login",
  components: {
    loginModal,
  },
};
</script>

<style>
</style>