<template>
  <section class="home-app page-layout">
    <h1>Air BYY</h1>
    <div v-if="rooms">
      <div v-for="destination in destinations" :key="destination._id">
        <div class="container">
          <div class="coupon" @click="goTo(destination.address.country)">
            <img src="../assets/img/US.jpg" alt="Avatar" style="width: 100%" />
            <div class="container" style="background-color: white">
              <h2><b>20% OFF YOUR PURCHASE</b></h2>
              <p>
                Lorem ipsum dolor sit amet, et nam pertinax gloriatur. Sea te
                minim soleat senserit, ex quo luptatum tacimates voluptatum,
                salutandi delicatissimi eam ea. In sed nullam laboramus
                appellantur, mei ei omnis dolorem mnesarchum.s
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div v-if="rooms">
      <div v-for="item in topRooms" :key="item._id" class="card-container">
        <pre>{{ item.name }}</pre>
      </div>
    </div>
  </section>
</template>

<script>
import { utilService } from "../service/util-service.js";

export default {
  name: "home-app",
  data() {
    return {
      rooms: null,
    };
  },
  methods: {
    goTo(place) {
      // console.log(place);
      this.$router.push({ path: "explore", query: { destination: place } });
    },
  },
  async created() {
    // const topRooms = await this.$store.dispatch({ type: "topRoomsForDisplay" });
    // console.log(topRooms);
    // this.rooms = topRooms;
    try {
      this.rooms = await this.$store.dispatch({
        type: "loadRooms",
      });
      console.log("this.rooms", this.rooms);
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
      return destinations;
    },
    topRooms() {
      const topRated = this.rooms.filter(
        (room) => room.reviewScores.rating > 80
      );
      return topRated.slice(0, 4);
    },
  },
};
</script>

<style>
h1 {
  text-align: center;
  /* margin: 25px; */
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
}
</style>
