<template>
  <section class="app">
    <!-- <app-header /> -->
    <router-view />
    <app-footer />
  </section>
</template>

<script>
import appHeader from "./components/app-header.vue";
import appFooter from "./components/app-footer.vue";
export default {
  name: "App",
  components: {
    appHeader,
    appFooter,
  },
};
</script>

<style></style>
