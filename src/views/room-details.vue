<template>
	<!-- DETAIL HEADER -->

	<section
		v-if="room"
		class="room-detail detail-layout page-layout header-reco"
	>
		<h1>{{ room.name }}</h1>
		<section class="room-short-detail flex align-center space-between">
			<div class="short-detail-container flex">
				<div class="star-review">
					<img src="../assets/img/star.png" alt="" />
					<h4 class="review-scores">{{ avgReviewScores }} ·</h4>
				</div>
				<h4 class="under-line">{{ room.numOfReviews }} Reviews ·</h4>
				<div class="address">
					<h4 class="under-line">{{ room.address.city }}</h4>
					<h4 class="under-line">{{ room.address.street }}</h4>
				</div>
			</div>
			<div class="flex">
				<button class="flex">
					<span
						><svg
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
							</g></svg
					></span>
					<span class="under-line">Save</span>
				</button>
				<button class="flex">
					<span
						><svg
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
							></path></svg
					></span>
					<span class="under-line">Share</span>
				</button>
			</div>
		</section>

		<!-- IMAGES SECTION -->
		<section class="imgs-container grid">
			<img v-for="imgUrl in imgForDisplay" :key="imgUrl" :src="imgUrl" alt="" />
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
							:src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
						/>
					</div>
				</div>

				<!-- SHORT DETAIL -->

				<div class="short-info-container">
					<div class="container">
						<div>
							<!-- ICON MISSING -->
							<!-- <img src="" alt=""> -->
						</div>
						<div>
							<p class="title">{{ room.propertyType }}</p>
							<p class="subtitle">{{ room.roomType }}</p>
						</div>
					</div>
					<form v-if="`${showGreatloc > 8}`">
						<div>
							<p class="title">Great location {{ showGreatloc }}</p>
							<p class="subtitle">
								90% of recent guests gave the location a
								{{ showGreatloc }} scores
							</p>
						</div>
					</form>
					<p class="title">{{ room.cancellationPolicy }}</p>
				</div>

				<div class="descripation-container">
					<p class="discription">{{ room.summary }}</p>
				</div>

				<!-- OFFERS -->

				<div class="offer-info-container">
					<h2>What this place to offers</h2>
					<ul class="clean-list flex">
						<li v-for="(item, idx) in amenitiesForDisplay" :key="idx">
							{{ item }}
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
	</section>
</template>
<script>
	import modalCheckout from "../components/detail-cmps/modal-checkout.vue";
	import roomReview from "../components/detail-cmps/room-review.vue";

	export default {
		name: "room-detail",
		data() {
			return {
				room: null,
				preOrder: {},
				status: false,
			};
		},
		components: {
			modalCheckout,
			roomReview,
		},
		async created() {
			const { roomId } = this.$route.params;
			this.preOrder = this.$store.getters.getPreOrder;
			console.log("this.preOrder", this.preOrder);
			try {
				this.room = await this.$store.dispatch({ type: "getRoom", id: roomId });
			} catch (err) {
				console.log("err", err);
			}
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
			// showPrice() {
			//   return this.room.price;
			// },
			// reviewScore() {
			//   const { accuracy, cleanliness, checkin, communication, location, value } =
			//     this.room.reviewScores;

			//   const scores = {
			//     accuracy,
			//     cleanliness,
			//     checkin,
			//     communication,
			//     location,
			//     value,
			//   };

			//   return scores;
			// },
		},
		methods: {
			sendReserve(order) {
				this.$store.dispatch({
					type: "addOrder",
					order: JSON.parse(JSON.stringify(order)),
				});
			},
		},
	};
</script>

<style>
.el-progress__text {
  min-width: 0 !important;
}
</style>