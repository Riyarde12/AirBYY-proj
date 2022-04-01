<template>
	<section class="login-modal">
		<Transition name="modal">
			<div v-if="loginModalOpen" class="modal-mask">
				<div class="modal-wrapper">
					<section class="modal-container">
						<svg
							viewBox="0 0 32 32"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							role="presentation"
							focusable="false"
							@click="toggleShow"
							class="pointer"
						>
							<path d="m6 6 20 20"></path>
							<path d="m26 6-20 20"></path>
						</svg>
						<div class="modal-header">
							<h4>{{ getTitle }}</h4>
						</div>
						<div class="modal-title">
							<h1>Welcome to Airbyy</h1>
						</div>
						<div class="modal-body" v-if="!signUp">
							<input type="text" placeholder="username" v-model="username" />
							<input type="text" placeholder="password" v-model="password" />
							<button class="tracking" @click.prevent="onLogin">
								<span>Continue</span>
							</button>
						</div>
						<div class="modal-body" v-if="signUp">
							<input type="text" placeholder=" Fullname" v-model="fullname" />
							<input type="text" placeholder=" Username" v-model="username" />
							<input type="text" placeholder=" Password" v-model="password" />
							<button class="tracking" @click.prevent="signup">
								<span>Continue</span>
							</button>
						</div>
						<div class="modal-footer">
							<button @click="onToggle">{{ getButton }}</button>
						</div>
					</section>
				</div>
			</div>
		</Transition>
	</section>
</template>

<script>
	export default {
		name: "login-modal",
		props: {
			loginModalOpen: Boolean,
		},
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
				if (!this.username && !this.password) return;
				try {
					const user = await this.$store.dispatch({
						type: "login",
						username: this.username,
						password: this.password,
					});
					this.loggedInUser = user.data;
					this.toggleShow();
				} catch (err) {
					console.log("Cannot signup", err);
					throw err;
				}
			},
			signup() {
				if (!this.fullname && !this.username && !this.password) return;
				try {
					this.$store.dispatch({
						type: "signUp",
						userSignUp: {
							fullname: this.fullname,
							username: this.username,
							password: this.password,
						},
					});
					this.toggleShow();
				} catch (err) {
					console.log("Cannot signup", err);
					throw err;
				}
			},
			onToggle() {
				this.signUp = !this.signUp;
			},
			toggleShow() {
				this.$emit("closeLoginModal");
			},
		},
		computed: {
			getTitle() {
				return this.signUp ? "Sign Up" : "Log In";
			},
			getButton() {
				return this.signUp ? "Log In" : "Sign Up";
			},
		},
	};
</script>

<style>
</style>