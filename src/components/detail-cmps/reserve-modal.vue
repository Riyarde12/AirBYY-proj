
<template>
	<Transition name="modal">
		<div v-if="show" class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container modal-reserve">
					<div class="modal-header">
						<h4>{{ getTitle }}</h4>
					</div>
					<div class="modal-title">
						<h1>Request to book</h1>
					</div>
					<div class="modal-body">
						<div class="trip-side">
							<h3>Your trip</h3>
							<div class="trip-info">
								<div class="line">
									<div class="mini-title">
										<h4>Dates</h4>
										<p>From: {{ showDates(0) }}</p>
										<p>To: {{ showDates(1) }}</p>
									</div>
									<button class="clear">Edit</button>
								</div>
								<div class="line">
									<div class="mini-title">
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
									<button class="clear">Edit</button>
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
						<h4>press send to proceed</h4>
						<button
							class="modal-default-button demo-tracking"
							@click="$emit('close')"
						>
							Send
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