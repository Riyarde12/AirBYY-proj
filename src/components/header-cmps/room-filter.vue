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

		<!-- FILTER BUTTONS -->

		<button
			v-for="(item, idx) in amenitiesForShow"
			:key="idx"
			@click="onFilterAmenities(item)"
			class="filter-btn"
		>
			<p>{{ item }}</p>
		</button>

		<div class="modals modal-type" v-if="ModalType">
			<section class="options">
				<div class="filter-option">
					<input
						v-model="filterBy.roomType.entirePlace"
						id="Entire"
						type="checkbox"
					/>
					<label for="Entire">
						<p class="title-option">Entire place</p>
						<p class="desc-option">Have a place to yourself</p>
					</label>
				</div>
				<div class="filter-option">
					<input
						v-model="filterBy.roomType.privateRoom"
						id="Private"
						type="checkbox"
					/>
					<label for="Private">
						<p class="title-option">Private room</p>
						<p class="desc-option">
							Have your own room and share some common spaces
						</p>
					</label>
				</div>
				<div class="filter-option">
					<input id="Hotel" type="checkbox" v-model="filterBy.roomType.hotal" />
					<label for="Hotel">
						<p class="title-option">Hotel room</p>
						<p class="desc-option">
							Have a private or shared room in a boutique hotel, hostel, and
							more
						</p>
					</label>
				</div>
				<div class="filter-option">
					<input
						v-model="filterBy.roomType.sharedRoom"
						id="Shared"
						type="checkbox"
					/>
					<label for="Shared">
						<p class="title-option">Shared room</p>
						<p class="desc-option">
							Stay in a shared space, like a common room
						</p>
					</label>
				</div>
			</section>
			<section class="btns-area">
				<button class="clear">Clear</button>
				<button class="save" @click="sendFilterBy">Save</button>
			</section>
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
			this.filterBy = this.$store.getters.filterBy;
			console.log("this.filterBy", this.filterBy);
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
			onFilterAmenities(amenities) {
				this.$store.commit({ type: "setAmenities", amenities });
				console.log("amenities", amenities);
			},
			sendFilterBy() {
				this.$store.commit({
					type: "setFilterByRoomType",
					filterBy: JSON.parse(JSON.stringify(this.filterBy)),
				});
				this.$store.dispatch({ type: "loadRooms" });
				console.log("this.filterBy", this.filterBy);
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
			amenitiesForShow() {
				return [
					"Wifi",
					"Kitchen",
					"Air conditioning",
					"Free canellation",
					"Gym",
					"Dryer",
					"Pool",
					"Elevator",
					"TV",
					"Essentials",
				];
			},
		},
	};
</script>

<style>
</style>