
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
							<h3>Your trip</h3>
							<h4>{{ room.address.country }}</h4>
							<h4>{{ room.address.city }}</h4>
							<h4>
								Status <span>{{ booked.status }}</span>
							</h4>
							<div class="trip-info">
								<div class="line">
									<h4>Dates</h4>
									<span>Booked At {{ dateForShow }}</span>
									<p>{{ showDates(0) }} - {{ showDates(1) }}</p>
								</div>
								<div class="line">
									<h4>Guests</h4>
									<span v-if="booked.guests.adults"
										>Adults {{ booked.guests.adults }}</span
									>
									<span v-if="booked.guests.children">
										Children {{ booked.guests.children }}</span
									>
									<span v-if="booked.guests.infants">
										infants {{ booked.guests.infants }}</span
									>
									<span v-if="booked.guests.pets">
										Pets {{ booked.guests.pets }}</span
									>
								</div>
							</div>
						</div>
						<div class="order-side">
							<span>{{ booked.reserve.roomName }}</span>
							<div class="order-total">
								<h4>Total</h4>
								<span>${{ booked.totalAmount }}</span>
							</div>
						</div>
					</div>
					<h2>Thank you {{ loggedInUser.fullname }}</h2>
					<div class="modals-footer">
						<!-- <h4>press ok to continue</h4> -->
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
			loggedInUser: Object,
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
		},
	};
</script>

<style>
</style>