<template>
  <section>
    <div class="search-bar">
      <h1></h1>
      <div class="flex">
        <!-- <div @click="modalDestination = !modalDestination" class="filter-tag 1 fd"><p class="bold">Destination</p> -->
        <div @click="clickedModal('modalDestination')" :class="modalDestination?'choose':''" class="filter-tag 1 fd"><p class="bold">Location</p>
        <input type="text" v-model="filterBy.destination" placeholder="Where are you going?"></div>|
        <!-- <p>Where are you going?</p></div> -->
        <div class="vert"></div>
        <div @click="clickedModal('modalDate',4)" :class="modal4?'choose':''" class="filter-tag first-date"><p class="bold">Check in</p>
        <p>Add dates</p></div>|
        <div class="vert"></div>
        <div @click="clickedModal('modalDate',5)" :class="modal5?'choose':''" class="filter-tag first-date"><p class="bold">Check out</p>
        <p>Add dates</p></div>|
        <div class="vert"></div>
        <div @click="clickedModal('modalGuests')" :class="modalGuests?'choose':''" class="filter-tag 4 ld"><div class="last-line"><p class="bold">Guests</p>
        <p>Add guests</p></div>
        <!-- </div> -->
        <el-button
          @click.prevent="sendFilter"
          class="search-btn"
          v-if="searchBarTaped"
          size="large"
          type="danger"
          :icon="searchIcon"
          round
        >search</el-button>
        </div>
      </div>
    </div>
    <teleport to="#models">
      <div v-if="modalGuests" class="modal">
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
      <div v-if="modalDate" class="modal-2">
        <h1>date</h1>
      </div>
    </teleport>
    <teleport to="#models">
      <div v-if="modalDestination" class="modal-3">
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
        pets:0,
        destination:''
        },
      modalGuests: false,
      modalDate: false,
      modalDestination: false,
      modal4: false,
      modal5: false,
      searchIcon,
      searchBarTaped: true,
    };
  },
  created(){
    const params = this.$route.query;
    console.log(params);
    if(params.destination) {
      this.filterBy.destination = params.destination
    }
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
      sendFilter(){
        // console.log(this.filterBy);
         this.$router.push({ path: "explore", query: { destination: JSON.stringify(this.filterBy) } });
      },
      clickedModal(modal,modal45 = null){
        if(modal==="modalDate"){
          if(modal45===4 ){
          if (this.modal4 === true) {
            this.modal4 = false
            this.modalDate=false  
          } else {
            this.modal4 = true
            this.modal5 = false
            this.modalDate=true
            console.log('modal4',this.modal4);
          console.log('modal5',this.modal5);
          }
          }else {
          if (this.modal5 === true){ 
            this.modal5 = false
            this.modalDate=false  
          } else {
            this.modal5 = true
            this.modal4 = false
            this.modalDate=true
          } }
          return
        } else {
          this.modal4 = false
          this.modal5 = false
        }
        if(this[modal] === true) {
          this[modal] = false
          return
        }
        this.modalGuests = false
        this.modalDate = false
        this.modalDestination = false
        this[modal] = true
      }
  },
  computed:{
      adults(){
          return this.filterBy.children
      }
  }
};
</script>
<style>
.vert {
  width: 1px;
  height: 100%;
  background-color: rgb(134, 134, 134);
}
 
.search-btn {
  margin: 0px 20px 0px 0px;
 
}
input{
  color: black;
  border: none;
}

</style>
