

<template>
	<section class="guests-modal">
		<div>
			<div class="guests-line">
				<div class="guests-title">
					<h1>Adults</h1>
					<h4>Age 13+</h4>
				</div>
				<div class="guests-actions">
					<button @click.stop="onRemove('adults')">-</button>
					<span>{{ currOrder.guests["adults"] }}</span>
					<button @click.stop="onAdd('adults')">+</button>
				</div>
			</div>
			<div class="guests-line">
				<div class="guests-title">
					<h1>Children</h1>
					<h4>Age 2-12</h4>
				</div>
				<div class="guests-actions">
					<button @click.stop="onRemove('children')">-</button>
					<span>{{ currOrder.guests.children }}</span>
					<button @click.stop="onAdd('children')">+</button>
				</div>
			</div>
			<div class="guests-line">
				<div class="guests-title">
					<h1>Infants</h1>
					<h4>Under 2</h4>
				</div>
				<div class="guests-actions">
					<button @click.stop="onRemove('infants')">-</button>
					<span>{{ currOrder.guests.infants }}</span>
					<button @click.stop="onAdd('infants')">+</button>
				</div>
			</div>
			<div class="guests-line">
				<div class="guests-title">
					<h1>Pets</h1>
					<h4>Bringing a service animal?</h4>
				</div>
				<div class="guests-actions">
					<button @click.stop="onRemove('pets')">-</button>
					<span>{{ currOrder.guests.pets }}</span>
					<button @click.stop="onAdd('pets')">+</button>
				</div>
			</div>
			<div class="close-modal">
				<button class="close-btn" @click="onCloseModal">Close</button>
			</div>
		</div>
	</section>
</template>
<script>
	export default {
		name: "guests-modal",
		components: {},
		props: {
			currOrder: { type: Object },
		},
		created() {},
		data() {
			return {};
		},
		methods: {
			onCloseModal() {
				this.$emit("closeModal");
			},
			onRemove(guest) {
				this.$emit("onRemove", guest);
			},
			onAdd(guest) {
				this.$emit("onAdd", guest);
			},
		},
		computed: {},
	};
</script>