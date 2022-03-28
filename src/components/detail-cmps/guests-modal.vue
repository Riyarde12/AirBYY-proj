

<template>
	<section class="guests-modal">
		<div>
			<div>
				<span>Adults</span>
				<span>Age 13+</span>
				<button @click.stop="onRemove('adults')">-</button>
				<span>{{ guests.adults }}</span>
				<button @click.stop="onAdd('adults')">+</button>
			</div>
			<div>
				<span>Children</span>
				<span>2-12</span>
				<button @click.stop="onRemove('children')">-</button>
				<span>{{ guests.children }}</span>
				<button @click.stop="onAdd('children')">+</button>
			</div>
			<div>
				<span>Infants</span>
				<span>Under 2</span>
				<button @click.stop="onRemove('infants')">-</button>
				<span>{{ guests.infants }}</span>
				<button @click.stop="onAdd('infants')">+</button>
			</div>
			<div>
				<span>Pets</span>
				<button @click.stop="onRemove('pets')">-</button>
				<span>{{ guests.pets }}</span>
				<button @click.stop="onAdd('pets')">+</button>
			</div>
			<div class="under-line" @click="onCloseModal">Close</div>
		</div>
	</section>
</template>
<script>
	export default {
		name: "guests-modal",
		components: {},
		props: {
			// currOrder: { type: Object },
		},
		created() {},
		data() {
			return {
				guests: {
					adults: 0,
					children: 0,
					pets: 0,
					infants: 0,
				},
			};
		},
		methods: {
			onCloseModal() {
				this.$emit("onCloseModal");
			},
			// onRemove(guest) {
			// 	this.$emit("onRemove", guest);
			// },
			// onAdd(guest) {
			// 	this.$emit("onAdd", guest);
			// },
			onRemove(guest) {
				if (this.guests[guest] <= 0) return;
				this.guests[guest]--;
				this.$emit("onRemove", { ...this.guests });
				console.log(this.guests);
			},
			onAdd(guest) {
				this.guests[guest]++;
				this.$emit("onAdd", { ...this.guests });
				console.log(this.guests);
			},
		},
	};
</script>