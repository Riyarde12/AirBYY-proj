<template>
  <!-- DETAIL HEADER -->

  <section
    v-if="room"
    class="room-detail detail-layout page-layout header-reco"
  >
    <h1>{{ room.name }}</h1>
    <section class="room-short-detail flex align-center space-between">
      <div class="short-detail-container flex">
        <h4 class="star-review">
          <img src="../assets/img/star.png" alt="" />
        </h4>
        <h4 class="review-scores">{{ avgReviewScores }}</h4>
        <h4 class="under-line">Reviews {{ room.numOfReviews }}</h4>
        <h4 class="under-line">{{ room.address.city }}</h4>
        <h4 class="under-line">{{ room.address.street }}</h4>
      </div>
      <div>
        <button class="flex">
          <span>(ICON)</span>
          <span class="under-line">Save</span>
        </button>
        <button class="flex">
          <span>(ICON)</span>
          <span class="under-line">Share</span>
        </button>
      </div>
    </section>

    <!-- IMAGES SECTION -->
    <section class="imgs-container grid">
      <img v-for="imgUrl in imgForDisplay" :key="imgUrl" :src="imgUrl" alt="" />
    </section>

    <!-- DETAILS-INFO -->

    <article class="room-detail-info flex">
      <div>
        <div class="room-present-info">
          <h2>Entire rental unit hosted by {{ room.host.fullname }}</h2>
          <h5>
            Guests {{ room.capacity }} Beds {{ room.beds }} Bedrooms{{
              room.bedrooms
            }}
            Bathrooms {{ room.bathrooms }}
          </h5>
          <div>
            <!-- <img src="" alt=""> -->
          </div>
        </div>

        <!-- SHORT DETAIL -->

        <div class="short-info-container">
          <h3>{{ room.propertyType }}</h3>
          <h5>{{ room.roomType }}</h5>
          <form v-if="`${showGreatloc > 8}`">
            <h3>Great location {{ showGreatloc }}</h3>
            <h5>
              90% of recent guests gave the location a
              {{ showGreatloc }} scores
            </h5>
            <h3>{{ room.cancellationPolicy }}</h3>
          </form>
        </div>

        <div class="descripation-container">
          <h2>{{ room.summary }}</h2>
        </div>

        <!-- OFFERS -->

        <div class="offer-info-container">
          <h2>What this place to offers</h2>
          <ul class="clean-list">
            <li v-for="(item, idx) in amenitiesForDisplay" :key="idx">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <!-- MODAL CHECKOUT -->

      <section class="modal-display-checkout">
        <div class="checkout-modal sticky">
          <div class="checkout-container flex">
            <div>
              <div class="tools-container flex space-between align-center">
                <div class="top-modal-container flex">
                  <div>${{ showPrice }} / Night</div>
                  <div class="display-review-info flex">
                    <span><img src="../assets/img/star.png" alt="" /></span>
                    <span>{{ avgReviewScores }}</span>
                    <span>({{ room.numOfReviews }})</span>
                  </div>
                </div>

                <div class="display-order-container pointer">
                  <div class="checkin-checkout-container flex">
                    <div class="checkin-btn">
                      <div class="flex">
                        <div class="add-dates-container flex">
                          <div>
                            <div class="checkin">CHECK-IN</div>
                            <div class="checkin">Add date</div>
                          </div>
                        </div>
                        <div class="add-dates-container flex border-left">
                          <div class="checkout">CHECKOUT</div>
                          <div class="checkout">Add dates</div>
                        </div>
                      </div>
                      <div class="add-guests-container flex space-between">
                        <div class="guests">GUESTS</div>
                        <div>
                          <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                          >
                            <g fill="none">
                              <path
                                d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"
                              ></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="availability-container">Check availability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>

    <hr />
    <!-- REVIEWS -->
    <section class="room-review">
      <section class="review-score">
        <div>
          <div class="room-reviews-header">
            <div class="flex flex-start">
              <span class="star-review"
                ><img src="../assets/img/star.png" alt=""
              /></span>
              <span class="reviews"
                >{{ avgReviewScores }} Reviews {{ room.numOfReviews }}</span
              >
              <!-- <h2>Reviews {{ room.numOfReviews }}</h2> -->
            </div>
            <div class="score-list-container">
              <ul v-if="scoreNames">
                <li
                  class="clean-list"
                  v-for="(item, key) in reviewScore"
                  :key="key"
                >
                  <div class="flex space-between">
                    <div class="progress-container">{{ key }}</div>
                    <div class="flex">
                      <el-progress class="progress-bar" :percentage="item * 10">
                        <span>
                          {{ item / 2 }}
                        </span>
                        <!-- <el-button type="text"></el-button> -->
                      </el-progress>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="room-review-list">
        <ul class="review-list-container clean-list">
          <li
            class="review-preview-container"
            v-for="(review, idx) in room.reviews"
            :key="idx"
          >
            <section class="review-header">
              <div>
                <div class="avatar-container">
                  <!-- <img src="" alt=""> -->
                </div>
                <div class="review-by-container">
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
    imgForDisplay() {
      return this.room.imgUrls;
    },
    showPrice() {
      return this.room.price;
    },
    reviewScore() {
      const { accuracy, cleanliness, checkin, communication, location, value } =
        this.room.reviewScores;

      const scores = {
        accuracy,
        cleanliness,
        checkin,
        communication,
        location,
        value,
      };

      return scores;
    },
  },
  methods: {},
};
</script>

<style>
.el-progress__text {
  min-width: 0 !important;
}
</style>

