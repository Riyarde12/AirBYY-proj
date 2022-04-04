
<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container modal-reserve">
          <div class="modal-title">
            <h1>Order details</h1>
          </div>
          <div class="modal-body">
            <div class="trip-side">
              <div class="trip-info">
                <div class="line">
                  <h2>Your trip</h2>
                </div>
                <div class="line">
                  <h4>Dates</h4>
                  <p>{{ showDates(0) }} - {{ showDates(1) }}</p>
                </div>
                <div class="line">
                  <h4>Guests</h4>
                  <p>
                    <span v-if="booked.guests.adults">
                      {{ booked.guests.adults }} adults
                    </span>
                    <span v-if="booked.guests.children">
                      , {{ booked.guests.children }} children
                    </span>
                    <span v-if="booked.guests.infants">
                      , {{ booked.guests.infants }} infants
                    </span>
                    <span v-if="booked.guests.pets">
                      , {{ booked.guests.pets }} pets
                    </span>
                  </p>
                </div>
                <div class="line">
                  <h4>Booked at</h4>
                  <p>{{ dateForShow }}</p>
                </div>
                <div class="line">
                  <h4>Status</h4>
                  <p>{{ booked.status }}</p>
                </div>
              </div>
            </div>
            <div class="order-side">
              <div class="room-details">
                <img
                  :src="`https://res.cloudinary.com/canjan22/image/upload/v1648083472/AirByy/${room.imgUrls[1]}`"
                  alt="room image"
                />
                <div class="room-details-info">
                  <p>{{ room.propertyType }}</p>

                  <p>{{ room.name }}</p>
                  <p>
                    <span>{{ room.address.city }}</span>
                    <span>{{ room.address.country }}</span>
                  </p>
                  <div class="preview-rating">
                    <img src="../../assets/img/star.png" alt="" />
                    <span class="rating">{{ getAvgRating }}</span>
                    <span class="num-of-reviews"
                      >({{ room.numOfReviews }})</span
                    >
                  </div>
                </div>
              </div>
              <div class="price-details">
                <h3>Price details</h3>
                <div class="line">
                  <p>
                    <span class="price">${{ room.price }}</span> x 1 night
                  </p>
                  <p>total price</p>
                </div>
                <div class="line">
                  <p>
                    <span class="service-fee">service-fee</span>
                  </p>
                  <p>total price</p>
                </div>
                <div class="line">
                  <p>
                    <span class="cleaning-fee">cleaning fee</span>
                  </p>
                  <p>total price</p>
                </div>
              </div>
              <div class="order-total">
                <h4>Total</h4>
                <span>${{ booked.totalAmount }}</span>
              </div>
            </div>
          </div>
          <div class="modals-footer">
            <h2>Thank you {{ loggedInUser.fullname }}</h2>
            <button
              class="modal-default-button demo-tracking"
              @click="$emit('close')"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "reserve-modal",
  props: {
    show: Boolean,
    // loggedInUser: Object,
    room: Object,
  },
  data() {
    return {
      booked: null,
      loggedInUser: null,
    };
  },
  created() {
    this.booked = this.$store.getters.booked;
    this.loggedInUser = this.$store.getters.loggedInUser;
  },
  methods: {
    showDates(idx) {
      if (!this.booked) return;
      const dates = Object.values(this.booked.dates);
      const date = new Date(dates[idx]);
      return date.toDateString();
    },
  },
  computed: {
    dateForShow() {
      const { dateOrdered } = this.booked;
      let date = new Date(dateOrdered);
      return date.toLocaleString();
    },
    getAvgRating() {
      return this.room.reviewScores.rating / 20;
    },
  },
};
</script>

<style>
</style>