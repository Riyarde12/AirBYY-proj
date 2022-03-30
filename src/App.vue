<template>
<<<<<<< HEAD
	<section class="app">
		<app-header />
		<router-view />
		<app-footer />
	</section>
=======
  <section class="app">
    <app-header />
    <router-view />
    <app-footer />
  </section>
>>>>>>> add99d12c457c9d75f6a29711c803326c34d5b83
</template>

<script>
	import appHeader from "./components/app-header.vue";
	import appFooter from "./components/app-footer.vue";
	export default {
		name: "App",
		components: {
			appHeader,
			appFooter,
		},
	};
</script>

<style></style>
