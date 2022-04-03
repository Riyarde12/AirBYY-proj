<template>
	<section class="app-header" :style="getHomeStyle()" :class="getLayout()">
		<!-- <section :class="getLayoutExtanded()"> -->
		<!-- </section> -->
		<section
			class="extanded-header"
			:style="getfilterCenter()"
			:class="getLayoutExtanded()"
		>
			<search-bar
				class="search-bar-outline"
				:style="{ display: shrinkedHeader ? 'none' : 'block' }"
			/>
			<room-filter class="extanded-explore-header" v-if="showFilter" />
		</section>
		<section class="header-contact">
			<section class="home-btn">
				<router-link @click="scrollToTop" to="/">
					<section class="home-btn-link" :style="getLogoStyle">
						<h1>air</h1>
						<img src="../assets/logo/logol.ico" alt="home" />
						<h1>yy</h1>
					</section>
				</router-link>
			</section>
			<section class="search" v-if="shrinkedHeader" @click="exstandHeader">
				<button class="search-btn">
					<h4 v-if="currPage === 'explore'" class="exploreSearch">
						<span>{{ params }}</span> | Add dates | Add guests
					</h4>
					<h4 v-else>Start your search</h4>
					<div
						class="el-button el-button--danger el-button--large is-circle"
						type="button"
					>
						<i class="el-icon">
							<svg
								viewBox="0 0 32 32"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								role="presentation"
								focusable="false"
							>
								<g fill="none">
									<path
										d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
									></path>
								</g>
							</svg>
						</i>
					</div>
				</button>
			</section>
			<section
				class="user-btn"
				:style="{ color: headerOnTop ? 'black' : ' white' }"
			>
				<router-link @click="scrollToTop" to="/explore">
					<button class="explore-btn-link" :style="getStyle">Explore</button>
				</router-link>
				<button class="become-host-btn" :style="getStyle">Become a Host</button>
				<button class="change-lang-btn" :style="getStyle">
					<svg
						class="lang-icon"
						viewBox="0 0 16 16"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						role="presentation"
						focusable="false"
					>
						<path
							d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"
						></path>
					</svg>
				</button>
				<button @click="toggleUserModal" class="user-info-btn">
					<svg
						class="humb-icon"
						viewBox="0 0 32 32"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						role="presentation"
						focusable="false"
					>
						<g fill="none" fill-rule="nonzero">
							<path d="m2 16h28"></path>
							<path d="m2 24h28"></path>
							<path d="m2 8h28"></path>
						</g>
					</svg>
					<svg
						class="user-icon"
						viewBox="0 0 32 32"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						role="presentation"
						focusable="false"
					>
						<path
							d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"
						></path>
					</svg>
					<user-modal-log
						class="user-info-modal"
						v-if="isUserModalOpen"
						@openModalLogin="onOpenloginModal"
						@openModalSignup="openModalSignup"
					/>
				</button>
			</section>
		</section>

		<!-- LOGIN / SIGNUP -->

		<Teleport to="body">
			<login-modal
				:loginModalOpen="showModal"
				@close="showModal = false"
				@closeLoginModal="closeLoginModal"
			>
				<template #header> </template>
			</login-modal>
		</Teleport>
		<div @click="closeModal" v-if="tapOut" class="tap-close-modal"></div>
	</section>
</template>

<script>
	import searchBar from "./header-cmps/search-bar.vue";
	import roomFilter from "./header-cmps/room-filter.vue";
	import userModalLog from "./header-cmps/user-modal-log.vue";
	import loginModal from "./user-cmps/login-modal.vue";

	export default {
		name: "app-header",
		data() {
			return {
				headerOnTop: true,
				currPage: "home",
				shrinkedHeader: false,
				isUserModalOpen: false,
				showModal: false,
				tapOut: false,
				params: "Add Place",
			};
		},
		components: {
			searchBar,
			roomFilter,
			userModalLog,
			loginModal,
		},
		created() {
			// this.params = this.$route.query;

			window.addEventListener("scroll", this.onScroll);
			this.$watch(
				() => this.$route.params,
				(toParams, previousParams) => {
					this.setCurrPage();
				}
			);
		},
		methods: {
			setSearchFiled() {
				// this.params = this.$route.query.destination;
				const param = this.$route.query.destination;
				if (!param) return;
				this.params = param;
				// console.log(params);
			},
			closeModal() {
				(this.isUserModalOpen = false),
					(this.showModal = false),
					(this.tapOut = false);
			},
			scrollToTop() {
				window.scrollTo(0, 0);
			},
			onScroll() {
				this.shrinkedHeader = true;
				if (window.scrollY > 10) {
					this.headerOnTop = false;
					if (this.currPage === "home") this.shrinkedHeader === false;
				} else {
					if (this.currPage === "home") this.shrinkedHeader = false;
					this.headerOnTop = true;
				}
			},
			checkPage() {
				return this.currPage === "home" ? true : false;
			},
			exstandHeader() {
				this.shrinkedHeader = !this.shrinkedHeader;
			},
			setCurrPage() {
				let { name } = this.$route;
				if (name === "room-app") this.currPage = "explore";
				else if (name === "room-details") this.currPage = "details";
				else if (name === "dashboard-page") this.currPage = "dashboard";
				else this.currPage = "home";
			},
			getLayout() {
				switch (this.currPage) {
					case "explore":
						return "header-explore-layout fixed";
					case "details":
						return "header-detail-layout";
					case "home":
						return "header-home-layout fixed";
					case "dashboard":
						return "header-dashboard-layout fixed";
					default:
						return "header-detail-layout";
				}
			},
			getLayoutExtanded() {
				switch (this.currPage) {
					case "explore":
						return "header-explore-extanded";
					case "details":
						return "header-detail-extanded";
					case "home":
						return "header-home-extanded";
					default:
						return "header-detail-extanded";
				}
			},
			toggleUserModal() {
				this.isUserModalOpen = !this.isUserModalOpen;
				this.tapOut = !this.tapOut;
			},
			getHomeStyle() {
				if (this.headerOnTop && this.currPage === "home") {
					return { backgroundColor: "#00000000" };
				} else {
					return { backgroundColor: "white" };
				}
			},
			onOpenloginModal() {
				this.showModal = true;
			},
			closeLoginModal() {
				this.showModal = false;
			},
			openModalSignup() {},
			getfilterCenter() {
				if (this.currPage === "explore" && this.shrinkedHeader) {
					return { justifyContent: "flex-start" };
				} else {
					return { justifyContent: "center" };
				}
			},
		},
		computed: {
			getStyle() {
				if (this.headerOnTop && this.currPage === "home") {
					return { color: "white" };
				} else {
					return { color: "black" };
				}
			},
			getLogoStyle() {
				if (this.headerOnTop && this.currPage === "home") {
					return { color: "white" };
				} else {
					return { color: "#ff385c" };
				}
			},
			showFilter() {
				return this.currPage === "explore" && this.shrinkedHeader ? true : false;
			},
		},
		watch: {
			"$route.params": {
				handler() {
					this.setSearchFiled();
				},
				deep: true,
				immediate: true,
			},
		},
	};
</script>

<style></style>
