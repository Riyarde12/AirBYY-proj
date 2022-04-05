<template>
	<section class="room-review">
		<section class="review-score">
			<div class="room-reviews-header">
				<div class="container flex flex-start">
					<span class="star-review"
						><img src="../../assets/img/star.png" alt=""
					/></span>
					<span v-if="room.reviewScores" class="reviews"
						>{{ avgReviewScores }} · {{ room.numOfReviews }} Reviews</span
					>
				</div>
				<div class="score-list-container">
					<ul v-if="room.reviewScores">
						<li
							class="clean-list"
							v-for="(item, key) in reviewScore"
							:key="key"
						>
							<div class="flex space-between">
								<div class="progress-container">{{ key }}</div>
								<div class="flex">
									<el-progress class="progress-bar" :percentage="item * 10">
										<span>
											{{ item / 2 }}
										</span>
									</el-progress>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
		<section class="room-review-list">
			<ul class="review-list-container clean-list">
				<li
					class="review-preview-container"
					v-for="(review, idx) in room.reviews"
					:key="idx"
				>
					<section class="review-header">
						<div>
							<div class="avatar-container">
								<div class="review-by-container flex">
									<el-avatar
										:size="56"
										:src="`https://res.cloudinary.com/canjan22/image/upload/v1648736344/avatars/${idx}.jpg`"
										@error="replaceImgByDefault"
										alt="Image"
									/>
									<div class="container">
										<h3 class="name">{{ review.by.fullname }}</h3>
										<h3 class="date">{{ getReviewDate(review.at) }}</h3>
									</div>
								</div>
							</div>
						</div>
						<p>{{ showMore[idx] ? review.txt : adjustTxt(review.txt) }}</p>
						<button
							@click="(open = true), readMoreReviews(idx)"
							class="show-more-btn"
							v-if="isLongReview(review.txt.length)"
						>
							<p>Show more</p>

							<svg
								viewBox="0 0 32 32"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								role="presentation"
								focusable="false"
								style="
									display: block;
									fill: none;
									height: 12px;
									width: 12px;
									stroke: currentcolor;
									stroke-width: 5.33333;
									overflow: visible;
								"
							>
								<g fill="none">
									<path
										d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"
									></path>
								</g>
							</svg>
						</button>
					</section>
				</li>
			</ul>
		</section>

		<Teleport to="body">
			<section>
				<div v-if="open" class="modal modal-review">
					<section class="review-modal">
						<div class="review-by-container flex">
							<el-avatar
								:size="56"
								:src="`https://res.cloudinary.com/canjan22/image/upload/v1648736344/avatars/${currReview.idx}.jpg`"
							/>
							<div class="container">
								<h3 class="name">{{ currReview.by.fullname }}</h3>
								<h3 class="date">{{ getReviewDate(currReview.at) }}</h3>
							</div>
						</div>
						<p>{{ currReview.txt }}</p>
						<div class="close-line">
							<button class="close" @click="open = false"><p>Close</p></button>
						</div>
					</section>
				</div>
			</section>
		</Teleport>
	</section>
</template>
 <script>
	export default {
		name: "review",
		components: {},
		props: {
			room: {
				type: Object,
				require: true,
			},
		},
		data() {
			return {
				avatar: "",
				showMore: {
					idx: false,
				},
				open: false,
				currRoom: this.room,
				currReview: null,
			};
		},
		computed: {
			reviewScore() {
				const { accuracy, cleanliness, checkin, communication, location, value } =
					this.room.reviewScores;

				const scores = {
					accuracy,
					cleanliness,
					checkin,
					communication,
					location,
					value,
				};
				return scores;
			},
			avgReviewScores() {
				return this.room.reviewScores.rating / 20;
			},
			getImage() {
				return (path) => new URL(`../assets/img/${path}`, import.meta.url).href;
			},
			// reviewForDisplay(review) {
			// 	return review;
			// },
		},
		methods: {
			readMoreReviews(idx) {
				this.currReview = this.room.reviews[idx];
				this.currReview.idx = idx;
				// return;
			},
			adjustTxt(review) {
				if (review.length <= 170) return review;
				else {
					const newTxt = review.substring(0, 170) + "...";
					return newTxt;
				}
			},
			isLongReview(review) {
				return review >= 170 ? true : false;
			},
			getReviewDate(reviewDate) {
				const date = new Date(reviewDate);
				const year = date.toDateString().substring(11, 15);
				const month = date.toDateString().substring(4, 7);
				return month + " " + year;
			},
			replaceImgByDefault(e) {
				e.target.src = this.getImage("room.jpeg");
			},
		},
	};
</script>

