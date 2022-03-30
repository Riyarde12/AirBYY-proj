<template>
	<section class="room-filter">
		<button class="filter-btn" @click="toggleModalPrice">
			<p>Price</p>
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
						d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"
					></path>
				</g>
			</svg>
		</button>

		<button @click="toggleModalType" class="filter-btn">
			<p>Type Of Place</p>
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
						d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"
					></path>
				</g>
			</svg>
		</button>

		<button @click="ff" class="filter-btn">
			<p>Txt</p>
		</button>

		<div class="modals" v-if="ModalType">
			<div class="modal-type">
				<label for="Entire">
					<input type="checkbox" />
					<p>Entire place</p>
					<p>Have a place to yourself</p>
				</label>
				<br />
				<input type="checkbox" @change="onFilter" />
				<p>Private room</p>
				<p>Have your own room and share some common spaces</p>
				<br />
				<input type="checkbox" @change="onFilter" />
				<p>Hotel room</p>
				<p>
					Have a private or shared room in a boutique hotel, hostel, and more
				</p>
				<br />
				<input type="checkbox" @change="onFilter" value="Shared room" />
				<p>Shared room</p>
				<p>Stay in a shared space, like a common room</p>
			</div>
		</div>

		<!-- <div id="app">
			<HistogramSlider
				style="margin: 200px auto"
				:width="300"
				:bar-height="100"
				:data="pricesForDisplay"
				:drag-interval="true"
				:force-edges="false"
				:colors="['#4facfe', '#00f2fe']"
				:min="0"
				:max="250"
				:barWidth="6"
				:update="pricesForDisplay"
			/>
		</div>
		<pre>{{ pricesForDisplay }}</pre> -->
	</section>
</template>

<script>
	export default {
		name: "room-filter",
		created() {
			this.value = this.$store.getters.roomsPrices;
			// this.filterBy = this.$store.getters.filterBy;
		},
		data() {
			return {
				ModalType: false,
				value: null,
				filterBy: {},
			};
		},
		methods: {
			toggleModalType() {
				this.ModalType = !this.ModalType;
			},
			onFilter() {
				// this.filterBy[]
			},
		},
		computed: {
			pricesForDisplay() {
				console.log(
					"this.$store.getters.roomPrices",
					this.$store.getters.roomPrices
				);
				return this.$store.getters.roomsPrices;
			},
		},
	};
</script>

<style>
</style>