<template>
	<section class="room-app page-layout explore-layout header-recognaizer">
		<div class="alerts">
			<p>
				{{ getNumberOfRooms }} stays in {{ searchedLocation }}
				<br />
				<span>Filter the search results by :</span>
				<br />
				<span v-for="(item, index) in getAmenitiesFilterForDisplay" :key="index"
					>{{ item }}{{ " " }}
				</span>
			</p>
		</div>
		<room-list v-if="rooms && rooms.length" :rooms="rooms"></room-list>
	</section>
</template>

<script>
	import { hydrate } from "@vue/runtime-dom";
	import roomList from "../components/room-list.vue";

	export default {
		name: "room-app",
		components: {
			roomList,
		},
		data() {
			return {
				rooms: null,
				searchedLocation: null,
				params: null,
			};
		},
		async created() {
			try {
				await this.setCurrRooms();

				this.searchedLocation = this.params.destination;
			} catch (err) {
				console.log("err", err);
			}
		},
		methods: {
			async setCurrRooms() {
				this.params = this.$route.query;

				this.$store.commit({
					type: "saveDestination",
					destination: this.params.destination,
				});
				try {
					await this.$store.dispatch({
						type: "filter",
						filterBy: JSON.parse(JSON.stringify(this.params)),
					});

					this.rooms = this.$store.getters.rooms;
				} catch (err) {
					console.log("Cannot load rooms", err);
					throw err;
				}
			},
		},
		computed: {
			getNumberOfRooms() {
				return this.$store.getters.rooms.length;
			},
			getSearch() {
				return this.$store.getters.currSearch;
			},
			getAmenitiesFilterForDisplay() {
				return this.params.amenities;
				// console.log("example", this.params.amenities);
			},
		},
		watch: {
			"$route.params": {
				handler() {
					this.setCurrRooms();
				},
				deep: true,
				immediate: true,
			},
		},
	};
</script>