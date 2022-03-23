<template>
  <section class="room-app page-layout">
    <!-- <room-filter @setFilter="setFilter" /> -->
    <room-list v-if="rooms" :rooms="rooms"></room-list>
    APP
  </section>
</template>

<script>
import roomList from "../components/room-list.vue";
import roomFilter from "../components/room-filter.vue";

export default {
  name: "explore-page",
  components: {
    roomList,
    roomFilter,
  },
  created() {
    const params = this.$route.query;
    console.log("params", params);
    this.$store.dispatch({
      type: "loadRooms",
      filterBy: params,
    });
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    rooms() {
      return this.$store.getters.rooms;
    },
  },
};
</script>