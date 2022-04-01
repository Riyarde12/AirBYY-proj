<template>
	<section class="room-app page-layout explore-layout header-recognaizer">
		<div class="alerts">
			<p>{{ getNumberOfRooms }} stays in {{ searchedLocation }}</p>
			<p class="covid-alerts">
				Review COVID-19 travel restrictions before you book.
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
			this.params = this.$route.query;
			this.searchedLocation = this.params.destination;
			try {
				await this.$store.dispatch({
					type: "filter",
					filterBy: JSON.parse(JSON.stringify(this.params)),
				});
				this.setCurrRooms();
				// this.rooms = this.$store.getters.rooms;
				console.log("rooms", this.rooms);
			} catch (err) {
				console.log("err", err);
			}
		},
		methods: {
			setCurrRooms() {
				console.log("hey");
				this.rooms = this.$store.getters.rooms;
			},
		},
		computed: {
			getNumberOfRooms() {
				return this.$store.getters.rooms.length;
			},
			getSearch() {
				return this.$store.getters.currSearch;
			},
		},
		watch: {
			params: {
				handler() {
					console.log("hey");
					this.setCurrRooms();
				},
			},
		},
	};
</script>