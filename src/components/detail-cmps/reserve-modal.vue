
<template>
	<Transition name="modal">
		<div v-if="show" class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
					<div class="modal-header"></div>
					<div class="modal-body">
						<slot name="body">
							<h2>Thank you Ben{{ loggedInUser.fullname }}</h2>
							<h3>Your order has been accepted</h3>
						</slot>
						<div>
							<h3>You order for a room:</h3>
							<span>{{ order.reserve.roomName }}</span>
							<!-- <h4>Guests:</h4> -->
							<h4>Total paid</h4>

							<span v-if="order.guests.adults">{{ order.guests.adults }}</span>
							<span v-if="order.guests.children">
								{{ order.guests.children }}</span
							>
							<span v-if="order.guests.infants">{{
								order.guests.infants
							}}</span>
							<span v-if="order.guests.pets">{{ order.guests.pets }}</span>
							<!-- <span>Total paid</span> -->
							<span>${{ order.totalAmount }}</span>
							<pre>{{ order }}</pre>
						</div>
					</div>
					<div class="modal-footer">
						<slot name="footer">
							<button class="modal-default-button" @click="$emit('close')">
								OK
							</button>
						</slot>
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
				order: this.preOrder,
			};
		},
	};
</script>

<style>
</style>