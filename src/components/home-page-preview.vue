<template>
	<section
		class="home-page-preview"
		@click="country(destination.address.country)"
	>
		<img class="preview-carousel" :src="getImg" alt="" />
		<div class="location-title">
			<h1>{{ destination.address.country }}</h1>
			<h6>{{ destination.numOfReviews }} kilometers away</h6>
		</div>
	</section>
</template>

<script>
	export default {
		props: {
			destination: Object,
		},
		methods: {
			country(place) {
				// console.log(place);
				this.$emit("goTo", place);
			},
		},
		computed: {
			getImg() {
				return `src/assets/img/${this.destination.address.country}.jpg`;
			},
		},
	};
</script>

<style></style>
