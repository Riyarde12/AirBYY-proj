<template>
	<section class="ask-login">
		<!-- ASK_GUEST -->

		<Transition name="modal">
			<div v-if="showAskLoginModal" class="modal-mask">
				<div class="modal-wrapper">
					<div class="modal-container">
						<svg
							viewBox="0 0 32 32"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							role="presentation"
							focusable="false"
							@click="closeLoginModal"
						>
							<path d="m6 6 20 20"></path>
							<path d="m26 6-20 20"></path>
						</svg>
						<div class="modal-header">
							<h1 name="header">Please Login first to continue</h1>
						</div>
						<div class="modal-body">
							<button class="demo-tracking" id="show-modal" @click="onLogin">
								<span> Log in</span>
							</button>
						</div>
						<div class="modal-footer">
							<div name="footer">
								<button class="modal-default-button" @click="$emit('close')">
									Stay guest
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Transition>

		<!-- LOGIN-SIGNUP -->

		<Teleport to="body">
			<login-modal
				:loginModalOpen="loginModalOpen"
				@closeLoginModal="closeLoginModal"
			>
				<template #header> </template>
			</login-modal>
		</Teleport>
	</section>
</template>


<script>
	import loginModal from "./login-modal.vue";
	export default {
		name: "ask-login",
		props: {
			showAskLoginModal: Boolean,
		},
		data() {
			return {
				loginModalOpen: false,
			};
		},
		created() {},
		components: {
			loginModal,
		},
		methods: {
			onLogin() {
				this.loginModalOpen = true;
			},
			closeLoginModal() {
				this.loginModalOpen = false;
				this.$emit("close");
			},
		},
	};
</script>


<style>
</style>