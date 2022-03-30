<template>
	<section class="reserve-modal">
		<h2>Thank you for your reserve</h2>
		<h2>The host will soon response to your reservation</h2>

		<button @click="openModal">Close</button>
	</section>
</template>
<script>
	// import '' from ''
	export default {
		name: "reserve-modal",
		components: {},
		created() {},
		data() {},
	};
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  height: 300px;
  margin-left: -150px;
}
 </style>