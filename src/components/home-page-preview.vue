<template>
	<section class="home-page-preview" @click="country(destination.address.city)">
		<img class="preview-carousel" :src="getImg" alt="" />
		<div class="location-title">
			<h1>{{ destination.address.city }}</h1>
			<h6>{{ getKm }} kilometers away</h6>
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
				return `https://res.cloudinary.com/canjan22/image/upload/v1649081637/AirByy/${this.destination.address.city}.jpg`;
			},
			getKm() {
				const city = this.destination.address.city;
				switch (city) {
					case "Montreal":
						return "9,537";
					case "Porto":
						return "3,970";
					case "New York":
						return "10,853";
					case "Barcelona":
						return "3,584";
				}
			},
		},
	};
</script>

<style></style>
