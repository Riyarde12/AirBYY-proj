<template>
  <section class="room-list">
    <ul>
      <li v-for="room in rooms" :key="room._id">
        <pre>
          {{ room._id }}
           XXXX
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
    rooms: {
      type: [Object],
    },
  },
  name: "room-list",
  props: {},
  created() {},
  data() {
    return {
      // rooms: this.rooms,
    };
  },
  components: {},
  methods: {},
  computed: {},
};
</script>

<style></style>
