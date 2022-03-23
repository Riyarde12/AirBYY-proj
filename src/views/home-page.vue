<template>
  <section class="home-app page-layout">
    <h1>Air BYY</h1>
    <div class="card-container">
      <div @click="goTo(`US`)" class="home-card"><div>img</div> United States</div>
      <div @click="goTo(`CA`)" class="home-card"><div>img</div> Canada</div>
      <div  @click="goTo(`PT`)" class="home-card"><div>img</div> Portugal</div>
      <div class="home-card"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "home-app",
  methods:{
goTo(place){
  console.log(place);
}
  }
};

</script>

<style>
h1{
  text-align: center;
  /* margin: 25px; */
}
.card-container{
  display: flex;
  gap: 50px;
  justify-content: center;
}
.home-card{
  cursor: pointer;
}
</style>
