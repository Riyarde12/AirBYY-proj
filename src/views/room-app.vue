<template>
	<section class="room-app page-layout explore-layout header-recognaizer">
		<div class="alerts">
			<p>{{ getNumberOfRooms }} stays in {{ searchedLocation }}</p>
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