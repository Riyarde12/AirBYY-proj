<template>
  <section class="room-app page-layout">
    <!-- <room-filter @setFilter="setFilter" /> -->
    <room-list v-if="rooms && rooms.length" :rooms="rooms"></room-list>
    <!-- <pre>
      {{ rooms }}
    </pre> -->
  </section>
</template>

<script>
import roomList from "../components/room-list.vue";
import roomFilter from "../components/room-filter.vue";

export default {
  name: "room-app",
  components: {
    roomList,
    // roomFilter,
  },
  data() {
    return {
      rooms: null,
    };
  },
  async created() {
    const params = this.$route.query;

    try {
      await this.$store.dispatch({
        type: "loadRooms",
        filterBy: params,
      });
      this.rooms = this.$store.getters.rooms;
      console.log("this.rooms", this.rooms);
    } catch (err) {
      console.log("err", err);
    }
  },
  methods: {},
  computed: {
    // rooms() {
    //   console.log("example", this.$store.getters.rooms);
    //   return this.$store.getters.rooms;
    // },
  },
};
</script>