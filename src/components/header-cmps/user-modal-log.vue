<template>
	<section class="user-login-modal">
		<button @click="openModalLogin">Sign up</button>
		<button @click="openModalLogin">Log in</button>
		<button @click="logout">Log out</button>
		<div class="break"></div>
		<button>Host your home</button>
		<button>Host an experience</button>
		<button>Help</button>
	</section>
</template>

<script>
	export default {
		components: {},
		data() {
			return {};
		},
		methods: {
			openModalLogin() {
				console.log("hey");
				this.$emit("openModalLogin");
			},
			logout(){
				this.$emit('logout')
			}
		},
	};
</script>

<style>
</style>