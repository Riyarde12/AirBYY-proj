<template>
  <section class="modal-display-checkout sticky">
    <div class="checkout-modal">
      <div class="checkout-container flex">
        <div>
          <div class="tools-container flex space-between align-center">
            <div class="top-modal-container flex">
              <div v-if="room">${{ showPrice }} / Night</div>
              <div class="display-review-info flex">
                <span><img src="../../assets/img/star.png" alt="" /></span>
                <span v-if="room">{{ avgReviewScores }}</span>
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

                              <!-- DATE-PICKER -->
                        <div class="datePicker">
                          <div class="demo-date-picker">
                            <div class="block">
                              <el-date-picker
                                v-model="value1"
                                type="daterange"
                                range-separator="To"
                                start-placeholder="CHECK-IN"
                                end-placeholder="CHECKOUT"
                              />
                            </div>
                          </div>
                        </div>
                          <!-- DATE-PICKER -->


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
</template>
<script>
// import '' from ''
export default {
  name: "modal-checkout",
  components: {},
  props: {
    room: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {
    showPrice() {
      return this.room.price;
    },
    avgReviewScores() {
      return this.room.reviewScores.rating / 20;
    },
  },
};
</script>

<style>
.el-date-editor{
  left: 205px;
  bottom: 60px;
  /* z-index: -1; */
  /* position: relative  !important; */
  /* opacity: 0 !important; */
  /* width: 320px !important; */
  height: 1px !important;
  /* --el-input-hover-border-color:none !important */
}
.el-picker-panel{
  z-index: 100 !important;
  /* position: relative !important; */
}

</style>