<template>
  <section>
      <div class="search-bar "><h1></h1>
          <div class="flex">
          <div @click="f" class="filter-tag 1">c</div>
          <div class="vert"></div>
          <div class="filter-tag 2">c</div>
          <div class="vert"></div>
          <div class="filter-tag 3">c</div>
          <div class="vert"></div>
          <div class="filter-tag 4">c</div>
           <el-button v-if="searchBarTaped" size="large" type="danger" :icon="searchIcon" circle  />
           
           <!-- <el-button v-else size="large" type="danger" :icon="searchIcon" round  /> -->
          </div>
      </div>
  </section>
</template>

<script>
import { Search } from '@element-plus/icons-vue'
import { shallowRef } from '@vue/reactivity'
const searchIcon = shallowRef(Search)
export default {

data(){
    return{
    searchIcon,
    searchBarTaped : true
    }
}
}
</script>

<style>
/* .search-bar{
    z-index: 100;
    height: 70px;
    width: 852px;
    background-color: aqua;
    border-radius: 50px;
    text-align: center
    
} */

.vert {
    width: 1px;
    height: 100%;
    background-color: rgb(134, 134, 134);
}
.el-button{
    display: none;
}
.flex{
    display: flex;
    justify-content: space-evenly;
    /* align-content: center; */
    align-items: center;
}
</style>