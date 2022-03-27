<template>
	<!-- DETAIL HEADER -->

	<section
		v-if="room"
		class="room-detail detail-layout page-layout header-reco"
	>
		<h1>{{ room.name }}</h1>
		<section class="room-short-detail flex align-center space-between">
			<div class="short-detail-container flex">
				<h4 class="star-review">
					<img src="../assets/img/star.png" alt="" />
				</h4>
				<h4 class="review-scores">{{ avgReviewScores }}</h4>
				<h4 class="under-line">Reviews {{ room.numOfReviews }}</h4>
				<h4 class="under-line">{{ room.address.city }}</h4>
				<h4 class="under-line">{{ room.address.street }}</h4>
			</div>
			<div class="flex">
				<button class="flex">
					<!-- TODO: ICON -->
					<span></span>
					<span class="under-line">Save</span>
				</button>
				<button class="flex">
					<!-- TODO: ICON -->
					<span></span>
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
			<div>
				<div class="room-present-info">
					<h2>Entire rental unit hosted by {{ room.host.fullname }}</h2>
					<h5>
						Guests {{ room.capacity }} Beds {{ room.beds }} Bedrooms{{
							room.bedrooms
						}}
						Bathrooms {{ room.bathrooms }}
					</h5>
					<div>
						<!-- <img src="" alt=""> -->
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
				<modal-checkout v-if="room" :room="room" />
			</div>
		</article>

		<hr />
		<!-- REVIEWS -->

		<review v-if="room" :room="room" />
	</section>
</template>

<script>
	import modalCheckout from "../components/detail-cmps/modal-checkout.vue";
	import review from "../components/detail-cmps/review.vue";

	export default {
		name: "room-detail",
		data() {
			return {
				room: null,
			};
		},
		components: {
			modalCheckout,
			review,
		},
		async created() {
			const { roomId } = this.$route.params;
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
		methods: {},
	};
</script>

<style>
.el-progress__text {
  min-width: 0 !important;
}
</style>

