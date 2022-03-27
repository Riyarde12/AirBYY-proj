<template>
  <!-- <h1>hhh</h1> -->
   <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">Default</span>
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
      />
    </div>
  </div>
  <button @click="puki">upki</button>
</template>
   



<script>
import { ref } from 'vue'

const value1 = ref('')


const shortcuts = [
  {
    text: 'Last week',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: 'Last month',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: 'Last 3 months',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]

export default {
    data(){
      return {
        value1,
      
      }
    },
     methods: {
       puki(){

       }
     },
}
</script>

<style>
.el-picker-panel__body{
  border-radius: 40px !important;
}
</style>