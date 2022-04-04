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
									<div>
										<div class="guests">GUESTS</div>
										<span class="guests-val" v-if="guestsForDisplay">
											{{ guestsForDisplay }}
										</span>
									</div>
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
									:currOrder="currOrder"
									@closeModal="onCloseModal"
									@onRemove="onRemove"
									@onAdd="onAdd"
								/>
							</div>
						</div>
						<button
							:class="checkIsReserved"
							class="availability-container tracking"
							ref="button"
							@click="onReserve"
							@mousemove="set"
						>
							<span>{{ showCheckReserveTxt }}</span>
							<!-- <pre>{{ totalPrice }}</pre> -->
						</button>
					</div>

					<section class="reserve-modal" v-if="dates">
						<span class="reserve-msg">You won't be charged yet</span>
						<p>
							<span class="reserve-title"
								>${{ room.price }} x {{ daysCounter }} nights </span
							><span>${{ totalPrice }}</span>
						</p>
						<p>
							<span class="reserve-title">Cleanning fee </span
							><span>${{ showCleanningFee }}</span>
						</p>
						<p>
							<span class="reserve-title">Service fee </span
							><span>${{ showServiceFee }}</span>
						</p>
						<p>
							<span class="reserve-title">Occupancy taxes and fees </span
							><span>$0</span>
						</p>
						<p v-if="room.securityDeposit">
							<span class="reserve-title">Security deposite</span>
							<span>${{ securityDeposit }}</span>
						</p>
						<p class="reserve-total">
							<span>Total</span>
							<span>${{ calcTotalPriceWithServices }}</span>
							<pre>{{this.currOrder.guests}}</pre>
							<pre>{{this.currOrder}}</pre>
						</p>
					</section>
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
				openGuestsModal: true,
				openGuestsModal: false,
				currOrder: { ...this.preOrder },
				dates: null,
				isReserved: false,
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
				console.log("this.currOrder.guests", this.currOrder.guests);
			},
			onAdd(guest) {
				this.currOrder.guests[guest] += 1;
				console.log("this.currOrder.guests", this.currOrder.guests);
			},
			onReserve() {
				const { _id, address, name, host } = this.room;
				this.currOrder.reserve.hostId = host._id;
				this.currOrder.reserve.roomId = _id;
				this.currOrder.dateOrdered = Date.now();
				this.currOrder.totalAmount = this.calcTotalPriceWithServices;
				this.currOrder.reserve.destination = address.country;
				this.currOrder.reserve.roomName = name;
				this.$emit("onReserve", this.currOrder);
				this.currOrder.guests = { adults: 0, children: 0, pets: 0, infants: 0 };
				this.isReserved = true;
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
			checkIsReserved() {
				return this.isReserved ? "disable" : "";
			},
			showPrice() {
				return this.room.price;
			},
			avgReviewScores() {
				return this.room.reviewScores.rating / 20;
			},
			guestsForDisplay() {
				const guests = this.currOrder.guests;
				let sum = 0;
				for (const item in guests) {
					sum += guests[item];
				}
				return sum === 0 ? `Add guest` : `${sum} guest`;
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
			calcTotalPriceWithServices() {
				if (!this.dates) return;
				let amount =
					this.room.price * this.daysCounter +
					this.showServiceFee +
					this.securityDeposit;
				console.log("amount", amount);
				return amount;
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
				if (this.isReserved) return "Booked";
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
			securityDeposit() {
				if (!this.room.securityDeposit) return 0;
				return this.room.securityDeposit;
			},
		},
	};
</script>

<style>
</style>