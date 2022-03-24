<template>
  <section v-if="room" class="room-details page-layout">
    <!-- <pre>{{ room }} </pre> -->
    <!-- <div v-for="imgUrl in room.imgUrls" :key="imgUrl">
      <img :src="getImgForDisplay(imgUrl)" alt="" />
    </div> -->
    <div>
      <h3>{{ room.propertyType }}</h3>
      <h5>{{ room.roomType }}</h5>
      <form v-if="`${showGreatloc > 8}`">
        <h3>Great location {{ showGreatloc }}</h3>
        <h5>
          90% of recent guests gave the location a {{ showGreatloc }} scores
        </h5>
        <h3>{{ room.cancellationPolicy }}</h3>
      </form>
      <hr />
      <h3>What this place to offers</h3>
      <ul v-for="(item, idx) in room.amenities" :key="idx">
        <li>{{ item }}</li>
      </ul>
      <hr />

      <!-- REVIEWS -->
      <section>
        <div room-reviews-header>
          <!-- <span>Star(img)</span> -->
          <h2>{{ room.numOfReviews }}</h2>
        </div>

        <section class="room-review-list">
          <ul class="review-list-container clean-list">
            <li
              class="review-preview-container"
              v-for="(review, idx) in room.reviews"
              :key="idx"
            >
              <section class="review-header">
                <div>
                  <!-- <img src="" alt=""> -->
                  <div>
                    <h4>{{ review.by.fullname }}</h4>
                    <h5>{{ review.at }}</h5>
                  </div>
                </div>
                <span>{{ review.txt }}</span>
              </section>
            </li>
          </ul>
        </section>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: "room-detail",
  data() {
    return {
      room: null,
    };
  },
  async created() {
    const { roomId } = this.$route.params;
    try {
      this.room = await this.$store.dispatch({ type: "getRoom", id: roomId });
      console.log("this.room", this.room);
    } catch (err) {
      console.log("err", err);
    }
    console.log("roomId", roomId);
  },
  computed: {
    showGreatloc() {
      return this.room.reviewScores.location;
    },
    // getAvgScoresReviews() {
    //   this.room.reviews.reduce((accum, review) => {
    //     review.
    //   }, 0);
    //   this.room.numOfReviews / (this.room.reviewScores.rating / 10);
    // },
  },
  methods: {
    // getImgForDisplay(imgNumber) {
    //   imgNumber.splice;
    //   return `https://res.cloudinary.com/canjan22/image/upload/v1648083467/AirByy/${imgNumber}_bfhbli.jpg`;
    // },
  },
};
</script>

<style>
</style>

