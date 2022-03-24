<template>
  <!-- DETAIL HEADER -->
  <section v-if="room" class="room-details details-layout page-layout">
    <h1 class="room-name">{{ room.name }}</h1>
    <section class="room-short-detail">
      <div class="short-detail-container">
        <h4 class="star-review">
          <img src="../assets/img/star.png" alt="" />
        </h4>
        <h4>{{ room.reviewScores.rating / 10 }}</h4>
        <h4>{{ room.numOfReviews }}</h4>
        <h4>{{ room.address.city }}</h4>
        <h4>{{ room.address.street }}</h4>
        <div>
          <button>Save</button>
          <button>Share</button>
        </div>
      </div>
    </section>

    <!-- IMAGES SECTION -->
    <!-- <section class="images-container">
      <div v-for="imgUrl in room.imgUrls" :key="imgUrl">
        <img :src="getImgForDisplay(imgUrl)" alt="" />
      </div>
    </section> -->

    <!-- DETAILS-INFO -->

    <article class="room-detail-info">
      <section class="room-summery-container">
        <div>
          <h2>Discripation {{ room.summary }}</h2>
          <h5>
            Guests {{ room.capacity }} Beds {{ room.beds }} Bedrooms{{
              room.bedrooms
            }}
            Bathrooms {{ room.bathrooms }}
          </h5>
        </div>
        <div>
          <!-- <img src="" alt=""> -->
        </div>
      </section>
      <section>
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
          <ul v-for="(item, idx) in amenitiesForDisplay" :key="idx">
            <li>{{ item }}</li>
          </ul>
        </div>
      </section>

      <hr />
      <!-- REVIEWS -->
    </article>
    <section>
      <div class="room-reviews-header">
        <span class="star-review"
          ><img src="../assets/img/star.png" alt=""
        /></span>
        <h2>{{ avgReviewScores }}</h2>
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
    avgReviewScores() {
      return this.room.reviewScores.rating / 20;
    },
    amenitiesForDisplay() {
      return this.room.amenities.slice(0, 8);
    },
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

