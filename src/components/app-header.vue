<template>
  <section class="app-header explore-layout">
    <section class="header-contact">
      <section class="home-btn">
        <router-link to="/">
          <section class="home-btn-link">
            <img src="../assets/logo/logo.ico" alt="home" />
            <h1>airbyy</h1>
          </section>
        </router-link>
      </section>
        <search-bar />
      <section class="user-btn">
        <button>tom</button>
        <button>mor</button>
        <button>ow</button>
      </section>
    </section>
  </section>
</template>

<script>
import searchBar from './search-bar.vue'
export default {
  name: "app-header",

  components :{
    searchBar
  }
};
</script>

<style></style>
