<template>
	<!-- DETAIL HEADER -->
	<section
		v-if="room"
		class="room-detail detail-layout page-layout details-header-recognaizer"
	>
		<h1>{{ room.name }}</h1>
		<section class="room-short-detail flex align-center space-between">
			<div class="short-detail-container flex">
				<div class="star-review">
					<img src="../assets/img/star.png" alt="" />
					<h4 class="review-scores">{{ avgReviewScores }} ·</h4>
				</div>
				<h4 class="under-line">{{ room.numOfReviews }} Reviews</h4>
				<p>·</p>
				<div class="address">
					<h4 class="under-line">{{ room.address.city }}</h4>
					<h4 class="under-line">{{ room.address.street }}</h4>
				</div>
			</div>

			<div class="options-btn flex">
				<button class="flex">
					<svg
						viewBox="0 0 32 32"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						role="presentation"
						focusable="false"
						style="
							display: block;
							fill: none;
							height: 16px;
							width: 16px;
							stroke: currentcolor;
							stroke-width: 2;
							overflow: visible;
						"
					>
						<g fill="none">
							<path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path>
							<path d="M16 3v23V3z"></path>
							<path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path>
						</g>
					</svg>
					<p class="under-line">Share</p>
				</button>
				<button class="flex">
					<svg
						viewBox="0 0 32 32"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						role="presentation"
						focusable="false"
						style="
							display: block;
							fill: none;
							height: 16px;
							width: 16px;
							stroke: currentcolor;
							stroke-width: 2;
							overflow: visible;
						"
					>
						<path
							d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"
						></path>
					</svg>
					<p class="under-line">Save</p>
				</button>
			</div>
		</section>

		<!-- IMAGES SECTION -->

		<section class="imgs-container grid">
			<img
				v-for="imgUrl in imgForDisplay"
				:key="imgUrl"
				:src="`https://res.cloudinary.com/canjan22/image/upload/v1648083472/AirByy/${imgUrl}`"
				@error="replaceImgByDefault"
				alt="room img"
			/>
		</section>

		<!-- DETAILS-INFO -->

		<article class="room-detail-info flex">
			<div class="info-side">
				<div class="room-present-info">
					<div class="info">
						<h2>
							{{ room.roomType }} rental unit hosted by {{ room.host.fullname }}
						</h2>
						<h5>
							{{ room.capacity }} Guests · {{ room.beds }} Beds ·
							{{ room.bedrooms }} Bedrooms · {{ room.bathrooms }} Bathrooms
						</h5>
					</div>
					<div>
						<el-avatar
							:size="56"
							:src="'https://res.cloudinary.com/canjan22/image/upload/v1648736344/avatars/19.jpg'"
						/>
					</div>
				</div>

				<!-- SHORT DETAIL -->

				<div class="short-info-container">
					<div class="info-line">
						<svg
							viewBox="0 0 32 32"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							role="presentation"
							focusable="false"
							style="
								display: block;
								height: 24px;
								width: 24px;
								fill: currentcolor;
							"
						>
							<path
								d="m24.3334 1.66675c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323-.00065 24.666 3.00065.00075v2h-26.66665v-2l3-.00075v-24.666c0-1.05436681.81587301-1.91816558 1.850737-1.99451429l.149263-.00548571zm-4.00065 2h-12.666l-.00075 24.66625 12.66675-.00025zm4.00065 0h-2.00065v24.666l2.00025.00025zm-7.0001 11.00002c.7363778 0 1.33333.5969522 1.33333 1.33333s-.5969522 1.33333-1.33333 1.33333-1.33333-.5969522-1.33333-1.33333.5969522-1.33333 1.33333-1.33333z"
							></path>
						</svg>
						<div class="container">
							<p class="title">{{ room.propertyType }}</p>
							<p class="subtitle">{{ room.roomType }}</p>
						</div>
					</div>

					<form v-if="`${showGreatloc > 8}`">
						<div class="info-line">
							<svg
								viewBox="0 0 32 32"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								role="presentation"
								focusable="false"
								style="
									display: block;
									height: 24px;
									width: 24px;
									fill: currentcolor;
								"
							>
								<path
									d="M16 0c6.627 0 12 5.373 12 12 0 6.337-3.814 12.751-11.346 19.257L16 31.82l-1.076-.932C7.671 24.509 4 18.218 4 12 4 5.423 9.397 0 16 0zm0 2C10.504 2 6 6.525 6 12c0 5.44 3.249 11.118 9.831 17.02l.169.149.576-.518c6.178-5.65 9.293-11.092 9.42-16.318L26 12c0-5.523-4.477-10-10-10zm0 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
								></path>
							</svg>
							<div class="container">
								<p class="title">Great location {{ showGreatloc }}</p>
								<p class="subtitle">
									90% of recent guests gave the location a
									{{ showGreatloc }} scores
								</p>
							</div>
						</div>
					</form>
					<div class="info-line">
						<img
							:src="`src/assets/icons/${room.amenities[0].replace(
								/\s/g,
								''
							)}.svg`"
							alt=""
						/>

						<div class="container">
							<p class="title">{{ room.amenities[0] }}</p>
							<p class="subtitle">
								Guests often search for this popular amenity
							</p>
						</div>
					</div>
				</div>

				<div class="descripation-container">
					<p class="discription">{{ room.summary }}</p>
				</div>

				<!-- OFFERS -->

				<div class="offer-info-container">
					<h2>What this place to offers</h2>
					<ul class="clean-list flex">
						<li v-for="(item, idx) in amenitiesForDisplay" :key="idx">
							<img
								:src="`src/assets/icons/${item.replace(/\s/g, '')}.svg`"
								@error="replaceByDefault"
								alt="Icon Missed"
							/>
							<p>{{ item }}</p>
						</li>
					</ul>
				</div>
			</div>

			<!-- MODAL CHECKOUT -->

			<div class="max-height">
				<modal-checkout
					v-if="room"
					:preOrder="preOrder"
					@onReserve="sendReserve"
					:room="room"
				/>
			</div>
		</article>

		<!-- REVIEWS -->

		<room-review v-if="room" :room="room" />

		<!-- RESERVE-MODAL -->

		<Teleport to="body">
			<reserve-modal
				v-if="loggedInUser && isOrderSuccesses"
				:show="showModal"
				@close="onClose"
				:loggedInUser="loggedInUser"
			>
				<template #header>
					<h3>custom header</h3>
				</template>
			</reserve-modal>
		</Teleport>

		<!-- ASK-GUEST-FOR-LOGIN -->

		<Teleport to="body">
			<ask-login
				:showAskLoginModal="showAskLoginModal"
				@close="showAskLoginModal = false"
				@toggleShow="show = false"
			>
				<template #header>
					<h3>custom header</h3>
				</template>
			</ask-login>
		</Teleport>
	</section>
</template>

<script>
	import modalCheckout from "../components/detail-cmps/modal-checkout.vue";
	import roomReview from "../components/detail-cmps/room-review.vue";
	import reserveModal from "../components/detail-cmps/reserve-modal.vue";
	import askLogin from "../components/user-cmps/ask-login.vue";

	export default {
		name: "room-detail",
		data() {
			return {
				room: null,
				preOrder: {},
				isOrderSuccesses: false,
				showModal: false,
				loggedInUser: null,
				showAskLoginModal: false,
				avatar: null,
			};
		},
		components: {
			modalCheckout,
			roomReview,
			reserveModal,
			askLogin,
		},
		async created() {
			const { roomId } = this.$route.params;
			this.preOrder = this.$store.getters.getPreOrder;
			try {
				this.room = await this.$store.dispatch({ type: "getRoom", id: roomId });
			} catch (err) {
				console.log("err", err);
				throw err;
			}
		},
		methods: {
			sendReserve(order) {
				if (!this.loggedInUser) {
					this.showAskLoginModal = true;
					return;
				}
				this.$store.dispatch({
					type: "addOrder",
					order: JSON.parse(JSON.stringify(order)),
				});
				this.showModal = true;
				this.changeStatusOrder();
			},
			replaceByDefault(e) {
				e.target.src = `src/assets/icons/other.svg`;
			},
			replaceImgByDefault(e) {
				e.target.src = `src/assets/img/hero.jpg`;
			},
			changeStatusOrder() {
				this.isOrderSuccesses = !this.isOrderSuccesses;
			},
			onClose() {
				this.showModal = false;
				this.changeStatusOrder();
			},
		},
		computed: {
			showGreatloc() {
				return this.room.reviewScores.location;
			},
			avgReviewScores() {
				return this.room.reviewScores.rating / 20;
			},
			amenitiesForDisplay() {
				return this.room.amenities.slice(0, 8);
			},
			imgForDisplay() {
				return this.room.imgUrls;
			},
			svgForDisplay(str) {
				str = str.replace(/\s/g, "");
			},
			getLoggedInUser() {
				return this.$store.getters.loggedInUser;
			},
		},
		watch: {
			getLoggedInUser: {
				handler(newValue, oldValue) {
					this.loggedInUser = this.getLoggedInUser;
				},
				flush: "post",
			},
		},
	};
</script>

<style>
.el-progress__text {
  min-width: 0 !important;
}
</style>
