<template>
	<section class="login-modal">
		<h4>log in or sign up</h4>
		<h1>Welcome to Airbyy</h1>
		<button @click="onToggle">log in/sign up</button>
		<hr />
		<form v-if="!signUp">
			<h1>sign in</h1>
			<input type="text" placeholder="Full name" v-model="fullname" />
			<input type="text" placeholder="password" v-model="password" />
			<button @click="onLogin">Continue</button>
			<hr />
		</form>
		<form v-if="signUp">
			<h1>sign up</h1>
			<input type="text" placeholder="Fullname" v-model="fullname" />
			<input type="text" placeholder="Username" v-model="username" />
			<input type="text" placeholder="password" v-model="password" />
		</form>
		<hr />
		<p>
			We’ll call or text you to confirm your number. Standard message and data
			rates apply. <span>Privacy Policy</span>
		</p>
		<button @click.prevent="signup">Continue</button>
	</section>
</template>

<script>
	export default {
		name: "login-modal",
		data() {
			return {
				fullname: "",
				username: "",
				password: "",
				loggedInUser: null,
				signUp: false,
			};
		},
		methods: {
			async onLogin() {
				try {
					const user = await this.$store.dispatch({
						type: "login",
						username: this.username,
						password: this.password,
					});
					this.loggedInUser = user.data;
					console.log("example", this.loggedInUser);
					console.log("username:", this.username);
					console.log("password:", this.password);
				} catch (err) {
					console.log("err", err);
				}
			},
			signup() {
				this.$store.dispatch({
					type: "signUp",
					userSignUp: {
						fullname: this.fullname,
						username: this.username,
						password: this.password,
					},
				});
			},
			onToggle() {
				this.signUp = !this.signUp;
			},
		},
		computed: {},
	};
</script>

<style>
</style>