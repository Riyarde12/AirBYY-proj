<template>
  <section class="login-modal">
    <h4>log in or sign up</h4>
    <h1>Welcome to Airbyy</h1>
    <button>log in/sign up</button>
    <hr />
    <h1>sign in</h1>
    <input type="text" placeholder="name" />
    <input type="text" placeholder="password" />
    <hr />
    <h1>sign up</h1>
    <input type="text" placeholder="name" />
    <input type="text" placeholder="password" />
    <input type="text" placeholder="repeat password" />
    <hr />
    <p>
      We’ll call or text you to confirm your number. Standard message and data
      rates apply. <span>Privacy Policy</span>
    </p>
    <button>Continue</button>
  </section>
</template>

<script>
export default {
  name: "login-modal",
};
</script>

<style>
</style>