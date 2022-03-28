

<template>
	<section class="guests-modal">
		<div>
			<div>
				<span>Adults</span>
				<span>Age 13+</span>
				<button @click.stop="onRemove('adults')">-</button>
				<span>{{}}</span>
				<button @click.stop="onAdd('adults')">+</button>
			</div>
			<div>
				<span>Children</span>
				<span>2-12</span>
				<button @click.stop="onRemove('children')">-</button>
				<span>{{}}</span>
				<button @click.stop="onAdd('children')">+</button>
			</div>
			<div>
				<span>Infants</span>
				<span>Under 2</span>
				<button @click.stop="onRemove('infants')">-</button>
				<span>{{}}</span>
				<button @click.stop="onAdd('infants')">+</button>
			</div>
			<div>
				<span>Pets</span>
				<button @click.stop="onRemove('pets')">-</button>
				<span>{{}}</span>
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
		created() {},
		data() {
			return {};
		},
		methods: {
			onCloseModal() {
				this.$emit("onCloseModal");
			},
			onRemove(guest) {
				this.$emit("onRemove", guest);
			},
			onAdd(guest) {
				this.$emit("onAdd", guest);
			},
		},
	};
</script>