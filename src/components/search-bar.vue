<template>
  <section>
    <div class="search-bar">
      <h1></h1>
      <div class="flex">
        <div @click="modal1 = !modal1" class="filter-tag 1">c</div>
        <div class="vert"></div>
        <div @click="modal2 = !modal2" class="filter-tag 2">date</div>
        <div class="vert"></div>
        <div @click="modal2 = !modal2" class="filter-tag 3">date</div>
        <div class="vert"></div>
        <div class="filter-tag 4">c</div>
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
            <h3>Adults</h3>
            <p>Age 13 or above</p>
          </div>
          <div class="flex">
            <div class="div-btn">➖</div>
            <p class="number">0</p>
            <div class="div-btn">➕</div>
          </div>
        </div>
        <hr>
        <div></div>
        <div></div>
        <div></div>
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
const searchIcon = shallowRef(Search);
export default {
  data() {
    return {
      modal1: false,
      modal2: false,
      searchIcon,
      searchBarTaped: true,
    };
  },
};
</script>

<style>
.flex {
  display: flex;
}
.number {
  font-size: 20px;
  margin: 0 5px;
}
.vert {
  width: 1px;
  height: 100%;
  background-color: rgb(134, 134, 134);
}
.txt{
    text-align: start;
}
.el-button {
  display: none;
}
.div-btn {
    line-height: 30px;
  font-size: 20;
  height: 32px;
  width: 32px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.284);
  /* border: ; */
  border-radius: 50%;
}
.flex {
  display: flex;
  justify-content: space-evenly;
  /* align-content: center; */
  align-items: center;
}
.line {
  justify-content: space-between;
}

.modal {
  padding: 32px 16px 16px 32px;
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 365px;
  width: 394px;
  background-color: rgb(255, 255, 255);
  text-align: center;
  border-radius: 32px;
  box-shadow: rgb(0 0 0 / 15%) 0px 10px 37px;
  /* border-bottom: 1px solid rgb(235, 235, 235) */
}
.modal-2 {
  z-index: 10;
  position: fixed;
  top: 50%;
  left: 49%;
  transform: translate(-50%, -50%);
  height: 501px;
  width: 850px;
  /* background-color:#ffffff; */
  background-color: #d32b2b;
  text-align: center;
  border-radius: 32px;
}
</style>
