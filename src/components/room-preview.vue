<template>
	<section v-if="room" class="room-preview">
		<div class="preview-img-section">
			<el-carousel
				class="preview-carousel"
				:autoplay="false"
				trigger="click"
				arrow="hover"
			>
				<el-carousel-item v-for="imgUrl in imgForDisplay" :key="imgUrl">
					<img
						@click="scrollToTop(), goToRoom()"
						:src="`https://res.cloudinary.com/canjan22/image/upload/v1648083472/AirByy/${imgUrl}`"
						@error="replaceImgByDefault"
						alt="Image"
					/>
				</el-carousel-item>
				<svg
					class="preview-like-btn"
					viewBox="0 0 32 32"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					role="presentation"
					focusable="false"
				>
					<path
						d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"
					></path>
				</svg>
			</el-carousel>
		</div>
		<router-link :to="`/room/${room._id}`">
			<div class="preview-details">
				<div class="preview-reviews">
					<div class="preview-rating">
						<img src="../assets/img/star.png" alt="" />
						<span class="rating">{{ getAvgRating }}</span>
						<span class="num-of-reviews">({{ room.numOfReviews }})</span>
					</div>
				</div>
				<p>{{ room.roomType }} · {{ room.address.city }}</p>
				<p>{{ room.name }}</p>
				<p>
					<span class="price">${{ room.price }}</span> / night
				</p>
			</div>
		</router-link>
	</section>
</template>

<script>
	export default {
		name: "room-preview",
		props: {
			room: Object,
		},
		data() {
			return {};
		},
		components: {},
		methods: {
			scrollToTop() {
				window.scrollTo(0, 0);
			},
			goToRoom() {
				this.$router.push(`/room/${this.room._id}`);
			},
			replaceImgByDefault(e) {
				e.target.src = this.getImage("room.jpeg");
			},
		},
		computed: {
			getAvgRating() {
				return this.room.reviewScores.rating / 20;
			},
			imgForDisplay() {
				return this.room.imgUrls;
			},
			getImage() {
				return (path) => new URL(`../assets/img/${path}`, import.meta.url).href;
			},
		},
	};
</script>

<style>
</style>
