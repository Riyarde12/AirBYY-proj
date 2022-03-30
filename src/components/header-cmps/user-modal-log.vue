<template>
  <section class="user-login-modal">
    <button>
      <router-link @click="scrollToTop" to="/login"> log in </router-link>
    </button>
    <button>sign up</button>
    <div class="break"></div>
    <button>Host your home</button>
    <button>Host an experience</button>
    <button>Help</button>
  </section>
</template>

<script>
export default {
  created() {
    window.addEventListener("scroll", this.onScroll);
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        this.setCurrPage();
      }
    );
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>
</style>