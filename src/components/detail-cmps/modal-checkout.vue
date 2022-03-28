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
								<span v-if="room">{{ avgReviewScores }} </span>
								<span class="under-line">{{ room.numOfReviews }} reviews</span>
							</div>
						</div>

						<div class="display-order-container pointer">
							<div class="checkin-checkout-container flex">
								<div class="checkin-btn">
									<div class="flex">
										<div class="add-dates-container flex">
											<div>
												<div class="checkin-out">CHECK-IN</div>
												<div class="add-date">Add date</div>

												<!-- DATE-PICKER -->
												<div class="datePicker">
													<div class="demo-date-picker">
														<div class="block">
															<el-date-picker
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
											<div class="checkin-out">CHECKOUT</div>
											<div class="add-date">Add dates</div>
										</div>
									</div>
									<div
										class="add-guests-container flex space-between"
										@click.stop="addGuests"
									>
										<div class="guests">GUESTS</div>
										<div>
											<!-- <svg
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
											</svg> -->
										</div>
										<guests-modal
											v-if="openGuestsModal"
											:currOrder="currOrder"
											@onCloseModal="closeModal"
											@onRemove="onRemove"
											@onAdd="onAdd"
										/>
									</div>
								</div>
							</div>
							<div class="availability-container" @click="onReserve">
								Check availability
							</div>
						</div>
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
			};
		},
		created() {},
		methods: {
			updatePreOrder() {},
			addGuests() {
				console.log("hey");
				this.openGuestsModal = !this.openGuestsModal;
				console.log("this.openGuestsModal", this.openGuestsModal);
			},
			closeModal(guests) {
				this.openGuestsModal = false;
				console.log("this.openGuestsModal", this.openGuestsModal);
				this.currOrder.guests = guests;
			},
			onRemove(guest) {
				if (this.currOrder.guests[guest] <= 0) return;
				this.currOrder.guests[guest]--;
				console.log(this.currOrder);
			},
			onAdd(guest) {
				this.currOrder.guests[guest]++;
				console.log(this.currOrder);
			},
			onReserve() {
				console.log("this.currOrder", this.currOrder);
				this.$emit("onReserve", { ...this.currOrder });
			},
		},
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