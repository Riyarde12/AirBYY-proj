<template>
  <section class="home-app page-layout">
    <h1>AirBYY</h1>
    <h2>Travel the world whith AirBYY</h2>
    <div class="explore-layout" v-if="rooms">
      <div>
        <div v-for="destination in destinations" :key="destination._id">
          <home-page-preview :destination="destination" @goTo="goTo" />
        </div>
      </div>
      <br />
      <hr />
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
  name: "home-app",
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
/* h1 {
  text-align: center;
  margin: 25px;
}
.card-container {
  display: flex;
  gap: 50px;
  justify-content: center;
}
.home-card {
  cursor: pointer;
}

.coupon {
  border: 5px solid #bbb;
  width: 80%;
  border-radius: 15px;
  margin: 0 auto;
  max-width: 600px;
}

.container {
  padding: 2px 16px;
  background-color: #f1f1f1;
}

.promo {
  background: #ccc;
  padding: 3px;
}

.expire {
  color: red;
} */
</style>
