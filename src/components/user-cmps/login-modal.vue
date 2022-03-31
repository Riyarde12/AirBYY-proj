<template>
	<section class="login-modal">
		<Transition name="modal">
			<div v-if="show" class="modal-mask">
				<div class="modal-wrapper">
					<div class="modal-container">
						<h4>log in or sign up</h4>
						<h1>Welcome to Airbyy</h1>
						<button @click="onToggle">log in/sign up</button>
						<hr />
						<form v-if="!signUp">
							<h1>sign in</h1>
							<input type="text" placeholder="username" v-model="username" />
							<input type="text" placeholder="password" v-model="password" />
							<button class="modal-default-button" @click.prevent="onLogin">
								Continue
							</button>

							<hr />
						</form>
						<form v-if="signUp">
							<h1>sign up</h1>
							<input type="text" placeholder="Fullname" v-model="fullname" />
							<input type="text" placeholder="Username" v-model="username" />
							<input type="text" placeholder="password" v-model="password" />
							<hr />
							<p>
								We’ll call or text you to confirm your number. Standard message
								and data rates apply. <span>Privacy Policy</span>
							</p>
							<button class="modal-default-button" @click.prevent="signup">
								Continue
							</button>
						</form>
					</div>
				</div>
			</div>
		</Transition>
	</section>
</template>

<script>
	export default {
		name: "login-modal",
		props: {
			show: Boolean,
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
				try {
					const user = await this.$store.dispatch({
						type: "login",
						username: this.username,
						password: this.password,
					});
					this.loggedInUser = user.data;
					this.$emit("close");
					// console.log("example", this.loggedInUser);
					// console.log("username:", this.username);
					// console.log("password:", this.password);
				} catch (err) {
					console.log("Cannot login", err);
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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>