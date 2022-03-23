<template>
  <section class="room-app page-layout">
    <room-filter @setFilter="setFilter" />
    APP
  </section>
</template>

<script>
export default {
  name: "room-app",
  data() {
    return {
      rooms: null,
    };
  },
  computed: {},
  created() {},
  methods: {},
  components: {},
};
</script>

<style></style>
