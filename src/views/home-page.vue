<template>
  <section class="home-page explore-layout page-layout">
    <h1 class="destination-title">Inspiration for your next trip</h1>
    <div class="grid-layout destination-navbar" v-if="rooms">
      <div v-for="destination in destinations" :key="destination._id">
        <home-page-preview :destination="destination" @goTo="goTo" />
      </div>
    </div>
    <h1 class="destination-title">Top rated</h1>
    <div class="grid-layout destination-navbar" v-if="rooms">
      <div v-for="room in topRated" :key="room._id">
        <room-preview :room="room" />
      </div>
    </div>
  </section>
</template>

<script>
import { utilService } from "../service/util-service.js";
import homePagePreview from "../components/home-page-preview.vue";
import roomPreview from "../components/room-preview.vue";

export default {
  name: "home-page",
  data() {
    return {
      rooms: null,
      topRated: null,
    };
  },
  components: {
    homePagePreview,
    roomPreview,
  },
  methods: {
    goTo(place) {
      // console.log(place);
      this.$router.push({ path: "explore", query: { destination: place } });
    },
    topRooms() {
      const topRated = this.rooms.filter(
        (room) => room.reviewScores.rating > 80
      );
      const idx = utilService.getRandomInt(0, topRated.length - 4);
      this.topRated = topRated.slice(idx, idx + 4);
    },
  },
  async created() {
    try {
      this.rooms = await this.$store.dispatch({
        type: "loadRooms",
      });
    } catch (err) {
      console.log("err", err);
    }
  },
  computed: {
    destinations() {
      const destinations = [];
      this.rooms.map((room) => {
        if (!destinations.includes(room.address.country)) {
          destinations.push(room);
        }
      });
      this.topRooms();
      return destinations.slice(0, 4);
    },
    // topRooms() {
    //   const topRated = this.rooms.filter(
    //     (room) => room.reviewScores.rating > 80
    //   );
    //   this.topRated = topRated.slice(0, 4);
    // return topRated.slice(0, 4);
    // },
  },
};
</script>

<style>
</style>
