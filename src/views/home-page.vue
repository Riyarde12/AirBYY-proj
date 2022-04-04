<template>
  <section class="home-page">
    <section class="main-hero">
      <img src="../assets/img/hero.jpg" alt="" />
    </section>
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
      <div class="become-host">
        <div class="home-host-btn">
          <h1>
            Questions <br />
            about<br />
            hosting?
          </h1>
          <button>Ask a Superhost</button>
        </div>
        <div class="img">
          <img src="../assets/img/host.jpg" alt="" />
        </div>
      </div>
    </section>
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
      loggedInUser: null,
    };
  },
  components: {
    homePagePreview,
    roomPreview,
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    goTo(place) {
      window.scrollTo(0, 0);
      this.$router.push({ path: "explore", query: { destination: place } });
    },
    topRooms() {
      const topRated = this.rooms.filter(
        (room) => room.reviewScores.rating > 80
      );
      const idx = utilService.getRandomInt(0, topRated.length - 4);
      this.topRated = topRated.slice(idx, idx + 4);
    },
    setDestination() {
      this.$store.commit({ type: "saveDestination" });
    },
  },
  async created() {
    try {
      this.$store.commit({ type: "clearFliterBy" });
      await this.$store.dispatch({
        type: "loadRooms",
      });
      this.rooms = this.$store.getters.rooms;
      this.setDestination();
      await this.$store.dispatch({ type: "loadUser" });
      this.loggedInUser = this.$store.getters.loggedInUser;
      console.log("this.rooms", this.rooms);
      // console.log("this.loggedInUser", this.loggedInUser);
    } catch (err) {
      console.log("err", err);
    }
  },
  computed: {
    destinations() {
      // var ops = ['United States','Cnada','Portugal','brazil']
      // const destination = [];
      // console.log("destinations", destinations);
      // let destinations = rooms[0].address.country;

      // this.rooms.forEach((room) => {
      // 	if (destination.indexOf(room.address.country)===-1) {
      //     console.log(destination.indexOf(room.address.country));
      //     console.log(room.address.country);
      // 		destination.push(room);
      // 	}
      // });

      this.topRooms();
      return this.rooms.slice(1, 5);
      // return destination;
      // return ops;

      // return destinations.slice(0, 4);
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

<style></style>
