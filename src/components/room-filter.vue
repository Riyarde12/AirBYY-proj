<template>
  <section class="room-filter">
    <div class="main-filter-btn">
    <button  class="filter-btn">Price 🔻</button>
     <div class="filter-modals" v-if="modal"> 
<div class="modal-type">
  <input type="checkbox">
  <span>some</span><br><hr>
  <input type="checkbox">
  <span>place</span><br><hr>
  <input type="checkbox">
  <span>top rated</span><br><hr>
  <input type="checkbox">
  <span>allayoster</span>
</div>
    </div> 
    <button @click="change" class="filter-btn">Type Of Place 🔻</button><div class="vartical"></div>
      </div>
      <div class="wifi">  
    <button class="filter-btn">Free cancellation</button>
    <button class="filter-btn">Wifi</button>
    <button class="filter-btn">Kitchen</button>
    <button class="filter-btn">Air conditioning</button>
    <button class="filter-btn">Washer</button>
    <!-- <button class="filter-btn">Iron</button> -->
    <!-- <button class="filter-btn">Free parking</button> -->
    <!-- <button class="filter-btn">Filter</button> -->
    </div>
   
  </section>
</template>

<script>
export default {
  name: "room-filter",
  created() {},
  data() {
    return {
      modal:false
    };
  },
  methods: {
    change(){
      this.modal = !this.modal
      console.log('s');
    }
  },
};
</script>
<style>
.room-filter{
  padding: 8px 24px;
  display: flex;
  justify-content: space-around;
}
.main-filter-btn{  
  gap: 15px;
  display: flex;
  justify-content: space-around;
}

.filter-modals{
  position: relative;
}

.modal-type{
  position: absolute;
  background-color: white;
  /* left: 50% ; */
  width: 300px;
  height: 300px;
  z-index: 15;
  top: 50px;
  box-shadow: rgb(0 0 0 / 15%) 0px 10px 37px;
  padding: 10px;
  font-weight: bold;
}

input{
  color: black;
}

.wifi{
  display: flex;
  flex-grow: 1;
  gap: 10px;
 justify-content: space-between;
}
.vartical {
  height: 100%;
  border: 1px solid rgb(82, 82, 82);
}
</style>