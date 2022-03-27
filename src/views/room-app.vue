<template>
  <section class="room-app page-layout explore-layout header-reco">
    <room-filter />
    <div class="alerts">
      <p>{{ getNumberOfRooms }} stays in {{ getSearch }}</p>
      <p class="covid-alerts">
        Review COVID-19 travel restrictions before you book.
      </p>
    </div>
    <room-list v-if="rooms && rooms.length" :rooms="rooms"></room-list>
  </section>
</template>

<script>
import roomList from "../components/room-list.vue";
import roomFilter from "../components/room-filter.vue";

export default {
  name: "room-app",
  components: {
    roomList,
    roomFilter,
  },
  data() {
    return {
      rooms: null,
    };
  },
  async created() {
    const params = this.$route.query;
    console.log("params", params);

    try {
      await this.$store.dispatch({
        type: "filter",
        filterBy: { ...params },
      });
      this.rooms = this.$store.getters.rooms;
      console.log("this.rooms", this.rooms);
    } catch (err) {
      console.log("err", err);
    }
  },
  methods: {},
  computed: {
    getNumberOfRooms() {
      console.log("filterBy is:", this.$store.getters.rooms.length);
      return this.$store.getters.rooms.length;
    },
    getSearch() {
      return this.$store.getters.currSearch;
    },
    // rooms() {
    //   console.log("example", this.$store.getters.rooms);
    //   return this.$store.getters.rooms;
    // },
  },
};
</script>