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
					<span>Total Revenuse</span>
					<span>{{ totalRevenuse }}</span>
				</div>

				<div>
					<span>Orders</span>
					<span>Orders {{ totalOrders }}</span>
				</div>

				<div>
					<span>Guests</span>
					<div v-if="orders">Guests {{ totalGuests }}</div>
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
		data() {
			return {
				orders: [],
				hostLoggin: null,
			};
		},
		async created() {
			try {
				await this.$store.dispatch({ type: "loadOrders" });
				this.orders = this.$store.getters.orders;
			} catch (err) {
				console.log("Cannot load order");
				throw err;
			}
		},
		methods: {
			guestsAmount(guests) {
				let sum = 0;
				for (const item in guests) {
					sum += guests[item];
				}
				if (sum === 0) return "";
				if (sum === 1) return `guest ${sum}`;
				else return `guests ${sum}`;
			},
			dateForDisplay(reviewDate) {
				const date = new Date(reviewDate);
				return date.toDateString();
			},
			dateOrderedForDisplay(dateOrdered) {
				const date = new Date(dateOrdered);
				return date.toLocaleString();
			},
		},
		computed: {
			totalRevenuse() {
				let totalAmount = 0;
				this.orders.forEach((order) => {
					if (!order.totalAmount) return;
					totalAmount += order.totalAmount;
				});
				return totalAmount.toLocaleString("en-US", {
					style: "currency",
					currency: "USD",
				});
			},
			totalOrders() {
				return this.orders.length;
			},
			totalGuests() {
				let totalGuests = 0;
				this.orders.forEach((item) => {
					if (!item.guests) return;
					Object.values(item.guests).forEach((num) => (totalGuests += num));
				});
				return totalGuests;
			},
		},
	};
</script>