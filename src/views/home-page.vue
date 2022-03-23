<template>
  <section class="home-app page-layout">
    <h1>Air BYY</h1>
    <!-- <div class="card-container">
      <div @click="goTo(`United States`)" class="home-card"><div>img</div> United States</div>
      <div @click="goTo(`Canada`)" class="home-card"><div>img</div> Canada</div>
      <div  @click="goTo(`Portugal`)" class="home-card"><div>img</div> Portugal</div>
      <div class="home-card"></div>
    </div> -->
<div class="card-container">
    <div class="coupon" @click="goTo(`United States`)">
  <div class="container">
    <h3>Company Logo</h3>
  </div>
  <img src="../img/US.jpg" alt="Avatar" style="width:100%;">
  <div class="container" style="background-color:white">
    <h2><b>20% OFF YOUR PURCHASE</b></h2> 
    <p>Lorem ipsum dolor sit amet, et nam pertinax gloriatur. Sea te minim soleat senserit, ex quo luptatum tacimates voluptatum, salutandi delicatissimi eam ea. In sed nullam laboramus appellantur, mei ei omnis dolorem mnesarchum.</p>
  </div>
  <div class="container">
    <p>Use Promo Code: <span class="promo">BOH232</span></p>
    <p class="expire">Expires: Jan 03, 2021</p>
  </div>
</div>
<div class="coupon" @click="goTo(`canada`)">
  <div class="container">
    <h3>Company Logo</h3>
  </div>
  <img src="../img/CA.jpg"  style="width:100%;">
  <div class="container" style="background-color:white">
    <h2><b>20% OFF YOUR PURCHASE</b></h2> 
    <p>Lorem ipsum dolor sit amet, et nam pertinax gloriatur. Sea te minim soleat senserit, ex quo luptatum tacimates voluptatum, salutandi delicatissimi eam ea. In sed nullam laboramus appellantur, mei ei omnis dolorem mnesarchum.</p>
  </div>
  <div class="container">
    <p>Use Promo Code: <span class="promo">BOH232</span></p>
    <p class="expire">Expires: Jan 03, 2021</p>
  </div>
</div>
<div class="coupon" @click="goTo(`Portugal`)">
  <div class="container">
    <h3>Company Logo</h3>
  </div>
  <img src="../img/PT.jpg" alt="Avatar" style="width:100%;">
  <div class="container" style="background-color:white">
    <h2><b>20% OFF YOUR PURCHASE</b></h2> 
    <p>Lorem ipsum dolor sit amet, et nam pertinax gloriatur. Sea te minim soleat senserit, ex quo luptatum tacimates voluptatum, salutandi delicatissimi eam ea. In sed nullam laboramus appellantur, mei ei omnis dolorem mnesarchum.</p>
  </div>
  <div class="container">
    <p>Use Promo Code: <span class="promo">BOH232</span></p>
    <p class="expire">Expires: Jan 03, 2021</p>
  </div>
</div>
</div>
<hr>
<div v-if="rooms" v-for="room in rooms" key="room._id" class="card-container">
<pre>{{room.name}}</pre>
</div>
  </section>
</template>

<script>
export default {
  name: "home-app",
  data(){
    return {
      rooms:null
    }
  },
  methods:{
goTo(place){
  // console.log(place);
  this.$router.push({path:'explore',query:{destination:place}})
}
  },
   async created() {
      const topRooms = await this.$store.dispatch({type: "topRoomsForDisplay"}) 
      this.rooms=topRooms
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

.coupon {
  border: 5px solid #bbb;
  width: 80%;
  border-radius: 15px;
  margin: 0 auto;
  max-width: 600px;
}

.container {
  padding: 2px 16px;
  background-color: #f1f1f1;
}

.promo {
  background: #ccc;
  padding: 3px;
}

.expire {
  color: red;
}
</style>
