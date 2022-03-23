<template>
  <section class="room-list">
    <ul>
      <li v-for="room in rooms" :key="room._id">
        <pre>
          {{ room }}
        </pre>
      </li>
    </ul>
    <pre>
  {{ rooms }}
  <!-- {{ console.log(rooms) }} -->
</pre>
  </section>
</template>

<script>
export default {
  props: {
    rooms: { type: Array, required: true },
  },
  name: "room-list",
  props: {},
  created() {},
  data() {
    return {
      rooms: this.rooms,
    };
  },
  components: {},
  methods: {},
  computed: {},
};
</script>

<style></style>
