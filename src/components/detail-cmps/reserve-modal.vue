
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
							<div class="trip-info">
								<div class="line">
									<h4>Dates</h4>
									<p>{{ showDates(0) }} - {{ showDates(1) }}</p>
								</div>
								<div class="line">
									<h4>Guests</h4>

									<pre>{{ preOrder.guests.adults }}</pre>
									<span v-if="preOrder.guests.adults">{{
										preOrder.guests.adults
									}}</span>
									<span v-if="preOrder.guests.children">
										{{ preOrder.guests.children }}</span
									>
									<span v-if="preOrder.guests.infants">{{
										preOrder.guests.infants
									}}</span>
									<span v-if="preOrder.guests.pets">{{
										preOrder.guests.pets
									}}</span>
								</div>
							</div>
						</div>
						<div class="order-side">
							<span>{{ preOrder.reserve.roomName }}</span>
							<!-- <h4>Guests:</h4> -->
							<div class="order-total">
								<h4>Total</h4>
								<span>${{ preOrder.totalAmount }}</span>
							</div>
							<!-- <pre>{{ order }}</pre> -->
						</div>
					</div>
					<h2>Thank you {{ loggedInUser.fullname }}</h2>
					<div class="modals-footer">
						<h4>press ok to continue</h4>
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
			preOrder: Object,
		},
		data() {
			return {
				// order: this.preOrder,
			};
		},
		methods: {
			showDates(idx) {
				const dates = Object.values(this.preOrder.dates);
				const date = new Date(dates[idx]);
				return date.toDateString();
			},
		},
		computed: {
			showAmountGuests() {},
		},
	};
</script>

<style>
</style>