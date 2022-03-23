<template>
  <section class="room-list">
    <h1>hello</h1>
    <h2 v-if="rooms">
      {{ roomss }}
    </h2>
  </section>
</template>

<script>
export default {
  name: "room-list",
  props: {
    rooms: {
      type: Array,
    },
  },
  created() {},
  data() {
    return {
      // rooms: this.rooms,
    };
  },
  components: {},
  methods: {},
  computed: {
    roomss() {
      return this.rooms;
    },
  },
};
</script>

<style></style>
