<template>
  <section class="room-list">
    <div class="room-list-container explore-layout">
      <ul>
        <li v-for="room in rooms" :key="room._id">
          <room-preview :room="room" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import roomPreview from "./room-preview.vue";
export default {
  name: "room-list",
  props: {
    rooms: {
      type: Array,
      required: true,
    },
  },
  components: {
    roomPreview,
  },
  created() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style></style>
