<template>
  <section class="login-modal">
    <Transition name="modal">
      <div v-if="show" class="modal-mask">
        <div class="modal-wrapper">
          <section class="modal-container">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path d="m6 6 20 20"></path>
              <path d="m26 6-20 20"></path>
            </svg>
            <div class="modal-header">
              <h4>{{ getTitle }}</h4>
            </div>
            <div class="modal-title">
              <h1>Welcome to Airbyy</h1>
              <button @click="onToggle">{{ getTitle }}</button>
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
  computed: {
    getTitle() {
      return this.signUp ? "Sign Up" : "Log In";
    },
  },
};
</script>

<style>
</style>