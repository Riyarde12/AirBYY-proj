<template>
  <!-- DETAIL HEADER -->

  <section v-if="room" class="room-detail detail-layout page-layout">
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

        <div>
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
          <h2>Discripation {{ room.summary }}</h2>
        </div>
        <div class="offer-info-container">
          <h3>What this place to offers</h3>
          <ul v-for="(item, idx) in amenitiesForDisplay" :key="idx">
            <li>{{ item }}</li>
          </ul>
        </div>
      </div>
      <!-- MODAL CHECKOUT -->

      <section class="modal-display-checkout">
        <div class="checkout-modal sticky">
          <div class="checkout-container flex">
            <div>
              <div
                class="
                  header-checkout-container
                  flex
                  space-between
                  align-center
                "
              >
                <div class="top-modal-container flex">
                  <div>${{ showPrice }} / Night</div>
                  <div class="display-review-info flex">
                    <span><img src="../assets/img/star.png" alt="" /></span>
                    <span>{{ avgReviewScores }}</span>
                    <span>({{ room.numOfReviews }})</span>
                  </div>
                </div>
                <div>
                  <div class="display-order-container">
                    <div class="checkin-checkout-container flex">
                      <button class="checkin-btn">
                        <div>
                          <span>CHECK-IN</span>
                          <span>Add date</span>
                          <span>CHECKOUT</span>
                          <div class="change-dates-checkin">Add dates</div>
                        </div>
                        <div>GUESTS</div>
                        <div>1 guest</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>

    <hr />
    <!-- REVIEWS -->
    <section>
      <div class="room-reviews-header">
        <span class="star-review"
          ><img src="../assets/img/star.png" alt=""
        /></span>
        <h2>{{ avgReviewScores }}</h2>
        <h2>Reviews {{ room.numOfReviews }}</h2>
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
    imgForDisplay() {
      return this.room.imgUrls;
    },
    showPrice() {
      return this.room.price;
    },
  },
  methods: {},
};
</script>

<style>
</style>

