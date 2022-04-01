<template>
  <section class="modal-display-checkout sticky">
    <div class="checkout-modal">
      <div class="checkout-container flex">
        <div class="tools-container flex space-between align-center">
          <div class="top-modal-container flex">
            <div v-if="room">
              <span class="price">${{ showPrice }} </span> / night
            </div>
            <div class="display-review-info flex">
              <span><img src="../../assets/img/star.png" alt="" /> </span>
              <span v-if="room"> {{ avgReviewScores }} · </span>
              <span class="under-line">{{ room.numOfReviews }} reviews</span>
            </div>
          </div>

          <div class="display-order-container pointer">
            <div class="checkin-checkout-container flex">
              <div class="checkin-btn">
                <div class="modal-date-btn flex">
                  <div class="add-dates-container right-border">
                    <div class="checkin-out">CHECK-IN</div>
                    <div class="add-date">{{ showDate(0) }}</div>
                    <el-date-picker
                      v-model="dates"
                      type="daterange"
                      start-placeholder="CHECK-IN"
                      end-placeholder="CHECKOUT"
                    />
                  </div>
                  <div class="add-dates-container">
                    <div class="checkin-out">CHECKOUT</div>
                    <div class="add-date">{{ showDate(1) }}</div>
                  </div>
                </div>
                <div
                  class="add-guests-container flex space-between"
                  @click.stop="addGuests"
                >
                  <div class="guests">GUESTS</div>
                  <span v-if="guestsForDisplay">
                    {{ guestsForDisplay }}
                  </span>
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
                <guests-modal
                  v-if="openGuestsModal"
                  :currOrder1="currOrder"
                  @closeModal="onCloseModal"
                  @onRemove="onRemove"
                  @onAdd="onAdd"
                />
              </div>
            </div>
            <button
              class="availability-container tracking"
              ref="button"
              @click="onReserve"
              @mousemove="set"
            >
              <span>{{ showCheckReserveTxt }}</span>
              <!-- <pre>{{ totalPrice }}</pre> -->
            </button>
          </div>
          <div v-if="dates">
            <span>You won't be charged yet</span>
            <p>
              ${{ room.price }} x {{ daysCounter }} nights
              <span>${{ totalPrice }}</span>
            </p>
            <p>
              Cleanning fee <span>${{ showCleanningFee }}</span>
            </p>
            <p>Service fee <span>$0</span></p>
            <p>Occupancy taxes and fees <span>$0</span></p>
            <p>
              <span>Total</span>
              <span>{{ totalPrice }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import guestsModal from "./guests-modal.vue";
export default {
  name: "modal-checkout",
  components: {
    guestsModal,
  },
  props: {
    room: {
      type: Object,
      require: true,
    },
    preOrder: { type: Object },
  },
  data() {
    return {
      openGuestsModal: false,
      currOrder: this.preOrder,
      dates: null,
    };
  },
  created() {},
  methods: {
    addGuests() {
      this.openGuestsModal = !this.openGuestsModal;
    },
    onCloseModal(guests) {
      this.openGuestsModal = false;
      this.currOrder.guests = guests;
    },
    onRemove(guest) {
      if (this.currOrder.guests[guest] <= 0) return;
      this.currOrder.guests[guest]--;
      console.log("this.currOrder", this.currOrder);
    },
    onAdd(guest) {
      this.currOrder.guests[guest] += 1;
      console.log("this.currOrder", this.currOrder);
    },
    onReserve() {
      const { _id, address } = this.room;
      this.currOrder.reserve.roomId = _id;
      this.currOrder.reserve.destination = address.country;
      this.$emit("onReserve", this.currOrder);
      this.currOrder.guests = { adults: 0, children: 0, pets: 0, infants: 0 };
    },
    showDate(idx) {
      if (!this.dates) return "Add dates";
      const date = new Date(this.dates[idx]);
      if (idx === 0) this.currOrder.dates.from = this.dates[idx];
      else this.currOrder.dates.to = this.dates[idx];
      return date.toDateString();
    },
  },
  computed: {
    showPrice() {
      return this.room.price;
    },
    avgReviewScores() {
      return this.room.reviewScores.rating / 20;
    },
    guestsForDisplay() {
      const guests = this.currOrder.guests;
      console.log("guests", guests);
      let sum = 0;
      for (const item in guests) {
        sum += guests[item];
      }
      if (sum === 0) return "";
      if (sum === 1) return `guest ${sum}`;
      else return `guests ${sum}`;
    },
    daysCounter() {
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      const firstDate = new Date(this.dates[0]);
      const secondDate = new Date(this.dates[1]);
      const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
      return diffDays;
    },
    totalPrice() {
      if (!this.dates) return;
      let totalPrice = this.room.price * this.daysCounter;
      return totalPrice;
    },
    set() {
      let btn = document.querySelector(".tracking");
      btn.addEventListener("mousemove", (e) => {
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        btn.style.setProperty("--x", x + "px");
        btn.style.setProperty("--y", y + "px");
      });
    },
    showCheckReserveTxt() {
      const { from, to } = this.currOrder.dates;
      if (from && to) return "Reserve";
      else return "Check avalability";
    },
    showCleanningFee() {
      if (!this.room.cleanningfee) return 0;
    },
    showServiceFee() {
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }
      let serviceFee = getRandomInt(0, 100);
      return serviceFee;
    },
  },
};
</script>

<style>
</style>