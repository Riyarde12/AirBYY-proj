<template>
	<section
		class="home-page-preview"
		@click="country(destination.address.country)"
	>
		<img class="preview-carousel" :src="getImg" alt="" />
		<div class="location-title">
			<h1>{{ destination.address.country }}</h1>
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
				return `src/assets/img/${this.destination.address.country}.jpg`;
			},
			getKm() {
				const country = this.destination.address.country
				switch (country) {
					case 'Canada':
						return '9,537'
					case 'Portugal':
						return '3,970'
					case 'United States':
						return '10,853'
					case 'Spain':
						return '3,584'
				}
			}
		},
	};
</script>

<style></style>
