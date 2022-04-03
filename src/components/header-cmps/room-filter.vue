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

		<!-- TYPE OF PLACE -->

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

		<!-- AMENITIES FILTER BUTTONS -->

		<button
			v-for="(item, idx) in amenitiesForShow"
			:key="idx"
			@click="onAmenities(item)"
			class="filter-btn"
		>
			<p>{{ item }}</p>
		</button>

		<div class="modals modal-type" v-if="modalType">
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

		<div class="modals modal-price" v-if="modalPrice" id="app">
			<section class="options">
				<HistogramSlider
					style="margin: 200px auto"
					:width="400"
					:bar-height="100"
					:data="pricesForDisplay"
					:min="0"
					:max="300"
					:force-edges="false"
					:colors="['#b0b0b0', '#717171']"
					:barWidth="6"
					@change="onChangePrice"
				/>
			</section>
			<section class="btns-area">
				<button class="clear">Clear</button>
				<button class="save" @click="sendFilterBy">Save</button>
			</section>
		</div>
		<div v-if="tapOut" @click="closeMdal" class="tap-close-modal"></div>
		<!-- <pre>{{ pricesForDisplay }}</pre> -->
	</section>
</template>

<script>
	export default {
		name: "room-filter",
		created() {
			this.filterBy.roomType = this.$store.getters.filterByRoomType;
			this.filterBy.price = this.$store.getters.filterByPrice;
			// this.filterBy.amenities = this.$store.getters.filterByAmenities;
			window.addEventListener("scroll", this.scroll);
			console.log("this.filterBy.amenities", this.filterBy.amenities);
		},
		data() {
			return {
				tapOut: false,
				modalType: false,
				modalPrice: false,
				value: null,
				filterBy: {
					amenities: [],
				},
			};
		},
		methods: {
			closeMdal() {
				(this.tapOut = false),
					(this.modalType = false),
					(this.modalPrice = false);
			},
			scroll() {
				this.modalType = false;
				this.modalPrice = false;
			},
			toggleModalType() {
				this.modalType = !this.modalType;
				this.tapOut = !this.tapOut;
			},
			toggleModalPrice() {
				this.modalPrice = !this.modalPrice;
				this.tapOut = !this.tapOut;
			},
			async sendFilterBy() {
				this.modalType = false;
				this.modalPrice = false;
				console.log("filterBy", this.filterBy);
				this.$store.commit({
					type: "setFilterByRoomType",
					filterBy: JSON.parse(JSON.stringify(this.filterBy)),
				});
				try {
					await this.$store.dispatch({
						type: "loadRooms",
					});
					this.setRouterParams();
				} catch (err) {
					console.log("Cannot loadRooms", err);
					throw err;
				}
			},
			onAmenities(amenity) {
				if (this.filterBy.amenities.includes(amenity))
					this.filterBy.amenities.pop();
				else this.filterBy.amenities.push(amenity);
				console.log("amenities", amenity);

				this.$store.commit({
					type: "setAmenities",
					amenities: [...this.filterBy.amenities],
				});
				this.setRouterParams();
			},
			setRouterParams() {
				const { price } = this.filterBy;
				const { from, to } = price;
				const filterByRoomType = [];
				const filterBy = this.$store.getters.filterBy;
				const { roomType, amenities } = filterBy;
				const { entirePlace, privateRoom } = roomType;
				if (entirePlace) filterByRoomType.push("Entire place");
				if (privateRoom) filterByRoomType.push("Private room");
				this.$router.push({
					path: "explore",
					query: {
						destination: filterBy.destination,
						adults: filterBy.adults,
						children: filterBy.children,
						infants: filterBy.infants,
						pets: filterBy.pets,
						roomType: filterByRoomType,
						pricefrom: from,
						priceTo: to,
						amenities: amenities,
					},
				});
			},
			onChangePrice(e) {
				const { from, to } = e;
				this.filterBy.price = { from, to };
			},
		},
		computed: {
			pricesForDisplay() {
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