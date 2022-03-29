<template>
  <section class="room-app page-layout explore-layout header-reco">
    <room-filter />
    <div class="alerts">
      <p>{{ getNumberOfRooms }} stays in {{ searchedLocation }}</p>
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
      searchedLocation: null,
    };
  },
  async created() {
    const params = this.$route.query;
    this.searchedLocation = params.destination;

    try {
      await this.$store.dispatch({
        type: "filter",
        filterBy: JSON.parse(JSON.stringify(params)),
      });
      this.rooms = this.$store.getters.rooms;
      console.log('rooms',this.rooms );
    } catch (err) {
      console.log("err", err);
    }
  },
  methods: {},
  computed: {
    getNumberOfRooms() {
      return this.$store.getters.rooms.length;
    },
    getSearch() {
      return this.$store.getters.currSearch;
    },
  },
};
</script>