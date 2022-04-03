<template>
  <section
    class="dashboard explore-layout page-layout details-header-recognaizer"
  >
    <h1>Hello dashboard</h1>
    <div class="main-layout-dashboard">
      <div class="dashboard-chart">
        <div class="dashboard-line dashboard-title">
          <div class="dashboard-name">Place</div>
          <div class="dashboard-order-date">Booking time</div>
          <div class="dashboard-date">Dates</div>
          <div class="dashboard-amount">Amount</div>
          <div class="dashboard-user">Name</div>
          <div class="dashboard-status">Status</div>
        </div>
        <ul v-if="orders">
          <li class="dashboard-line" v-for="order in orders" :key="order._id">
            <div class="dashboard-name">
              <span>{{ order.reserve.roomName }}</span>
            </div>
            <div class="dashboard-order-date">
              <span>{{ dateOrderedForDisplay(order.dateOrdered) }}</span>
            </div>
            <div class="dashboard-date">
              <span>{{ dateForDisplay(order.dates.from) }}</span
              ><span> {{ dateForDisplay(order.dates.to) }}</span>
            </div>
            <div class="dashboard-amount">{{ guestsAmount(order.guests) }}</div>
            <div class="dashboard-user">{{ guestsAmount(order.guests) }}</div>

            <div class="dashboard-status">
              <button class="dashboard-approve" @click="onReponse">
                Approve
              </button>
              <button class="dashboard-decline" @click="onReponse">
                Decline
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div class="dashboard-modals-area">
        <!-- <pre>{{ orders }}</pre> -->

        <div>
          <span>Total Rate</span>
          <span>Avg</span>
          <span>Reviews</span>
        </div>

        <div>
          <span>Total Revenus</span>
        </div>

        <div>
          <span>Orders</span>
          <span>Orders</span>
        </div>

        <div>
          <span>Guests</span>
          <span>Guests</span>
        </div>
        <!-- ORDERS -->
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "dashboard-page",
  components: {},
  async created() {
    await this.$store.dispatch({ type: "loadOrders" });
    this.orders = this.$store.getters.orders;
    console.log("this.orders", this.orders);
  },
  data() {
    return {
      orders: [],
      hostLoggin: null,
    };
  },
  methods: {
    guestsAmount(guests) {
      let sum = 0;
      for (const item in guests) {
        sum += guests[item];
      }
      // console.log("guests", sum);
      if (sum === 0) return "";
      if (sum === 1) return `guest ${sum}`;
      else return `guests ${sum}`;
    },
    dateForDisplay(reviewDate) {
      const date = new Date(reviewDate);
      const year = date.toDateString().substring(11, 15);
      const month = date.toDateString().substring(4, 7);
      return date.toDateString();
    },
    dateOrderedForDisplay(dateOrdered) {
      const date = new Date(dateOrdered);
      return date.toLocaleString();
    },
  },
  computed: {},
};
</script>