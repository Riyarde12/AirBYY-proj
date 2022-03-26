<template>
  <section>
    <div class="search-bar">
      <h1></h1>
      <div class="flex">
        <div class="filter-tag 1">c</div>
        <div class="vert"></div>
        <div @click="modal2 = !modal2" class="filter-tag 2">date</div>
        <div class="vert"></div>
        <div @click="modal2 = !modal2" class="filter-tag 3">date</div>
        <div class="vert"></div>
        <div @click="modal1 = !modal1" class="filter-tag 4">c</div>
        <el-button
          v-if="searchBarTaped"
          size="large"
          type="danger"
          :icon="searchIcon"
          circle
        />

        <!-- <el-button v-else size="large" type="danger" :icon="searchIcon" round  /> -->
      </div>
    </div>
    <teleport to="#models">
      <div v-if="modal1" class="modal">
        <div class="line flex">
          <div class="txt">
            <h3 class="title">Adults</h3>
            <p class="content">Age 13 or above</p>
          </div>
          <div class="flex main-line">
            <div @click="add(0,'adults')" class="div-btn">-</div>
            <p class="number">{{filterBy.adults}}</p>
            <div @click="add(1,'adults')" class="div-btn">+</div>
          </div>
        </div>
        
        <div class="line flex">
          <div class="txt">
            <h3 class="title">Children</h3>
            <p class="content">Age 2-12</p>
          </div>
          <div class="flex main-line">
            <div @click="add(0,'children')" class="div-btn">-</div>
            <p class="number">{{adults}}</p>
            <div @click="add(1,'children')" class="div-btn">+</div>
          </div>
        </div>
        
        <div class="line flex">
          <div class="txt">
            <h3 class="title">Infants</h3>
            <p class="content">Under 2</p>
          </div>
          <div class="flex main-line">
            <div @click="add(0,'infants')" class="div-btn">-</div>
            <p class="number">{{filterBy.infants}}</p>
            <div @click="add(1,'infants')" class="div-btn">+</div>
          </div>
        </div>
       
        <div class="line flex">
          <div class="txt">
            <h3 class="title">Pets</h3>
            <p class="content under-line">Bringing a service animal?</p>
          </div>
          <div class="flex main-line">
            <div @click="add(0,'pets')" class="div-btn">-</div>
            <p class="number">{{filterBy.pets}}</p>
            <div @click="add(1,'pets')" class="div-btn">+</div>
          </div>
        </div>
        <p class="bottomModal">If you're lucky enough to have more than 2 pets with you, be sure to let your host know.</p>
      </div>
    </teleport>
    <teleport to="#models">
      <div v-if="modal2" class="modal-2">
        <h1>date</h1>
      </div>
    </teleport>
  </section>
</template>

<script>
import { Search } from "@element-plus/icons-vue";
import { shallowRef } from "@vue/reactivity";
// import { el } from "element-plus/lib/locale";
const searchIcon = shallowRef(Search);
export default {
  data() {
    return {
        filterBy:{
        adults:0,
        children:0,
        infants:0,
        pets:0
        },
      modal1: false,
      modal2: false,
      searchIcon,
      searchBarTaped: true,
    };
  },
  methods:{
      add(addedVal,key){
          if(addedVal){
            this.filterBy[key]++
        } else {
            if(this.filterBy[key] <= 0)return
            this.filterBy[key]--
        }
      },
  },
  computed:{
      adults(){
          return this.filterBy.children
      }
  }
};
</script>

<style>
/* .flex {
  display: flex;
} */
/* .number {
  font-size: 20px;
  margin: 0 5px;
} */
/* .title{
    line-height: 20px;
} */
/* .content{
    line-height: 18px; */
/* } */
/* .main-line{
    justify-content: space-between;
    width: 104px;
} */
.vert {
  width: 1px;
  height: 100%;
  background-color: rgb(134, 134, 134);
}
/* .txt{
    text-align: start;
} */
.el-button {
  display: none;
}
/* .bottomModal{
    margin: 8px 0px 16px 0px;
} */
/* .div-btn {
    cursor: pointer;
    line-height: 30px;
  font-size: 20;
  height: 32px;
  width: 32px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.284);
  font-size: 30px;
  border: ;
  border-radius: 50%;
} */
/* .flex {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
} */
/* .line {
  justify-content: space-between;
   padding: 16px 4px 16px 0px;
   border-bottom: 1px solid $slr6;
   border-bottom: 1px solid black;
} */

/* .modal {
    
  padding: 16px 32px 16px 32px;
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 365px;
  width: 483px;
  background-color: rgb(255, 255, 255);
  text-align: center;
  border-radius: 32px;
  box-shadow: rgb(0 0 0 / 15%) 0px 10px 37px;
  border-bottom: 1px solid rgb(235, 235, 235)
} */
/* .modal-2 {
  z-index: 10;
  position: fixed;
  top: 50%;
  left: 49%;
  transform: translate(-50%, -50%);
  height: 501px;
  width: 850px;
  background-color:#ffffff;
  background-color: #d32b2b;
  text-align: center;
  border-radius: 32px;
} */

</style>
