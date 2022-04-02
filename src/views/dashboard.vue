<template>
	<section class="dashboard page-layout details-header-recognaizer">
		<h1>Hello dashboard</h1>

		<!-- <pre>{{ orders }}</pre> -->

		<div>
			<span>Total Rate</span>
			<span>Avg</span>
			<span>Reviews</span>
		</div>

		<div>
			<span>Total Revenus</span>
			<!-- Amount -->
		</div>

		<div>
			<span>Orders</span>
			<span>Orders</span>
		</div>

		<div>
			<span>Guests</span>
			<span>Guests</span>
		</div>

		<div>
			<span>Date</span>

			<span>Book by</span>
			<span>Place</span>
			<span>Trip dates</span>
			<span>nights</span>
			<span>Amount</span>
			<span>Status</span>
		</div>

		<!-- ORDERS -->

		<hr />
		<div>
			<ul v-if="orders">
				<li v-for="order in orders" :key="order._id">
					<div>
						<span>{{ order.reserve.roomName }}</span>
					</div>
					<span>{{ dateOrderedForDisplay(order.dateOrdered) }}</span>
					<div>
						<span>{{ dateForDisplay(order.dates.from) }}</span>
						<span>{{ dateForDisplay(order.dates.to) }}</span>
					</div>
					<div>{{ guestsAmount(order.guests) }}</div>
				</li>
			</ul>
		</div>
	</section>
</template>
<script>
	export default {
		name: "dashboard",
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
				return month + " " + year;
			},
			dateOrderedForDisplay(dateOrdered) {
				let currTimeExpires = Date.now() - dateOrdered;
				const date = new Date(currTimeExpires);
				return date.toLocaleTimeString();
			},
		},
		computed: {},
	};
</script>