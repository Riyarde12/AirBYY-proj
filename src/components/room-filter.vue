<template>
  <section class="room-filter">
    <div class="main-filter-btn">
    <button class="filter-btn">Price 🔻</button>
    <button class="filter-btn">Type Of Place 🔻</button><div class="vartical"></div>
      </div>
      <div class="wifi">  
    <button class="filter-btn">Free cancellation</button>
    <button class="filter-btn">Wifi</button>
    <button class="filter-btn">Kitchen</button>
    <button class="filter-btn">Air conditioning</button>
    <button class="filter-btn">Washer</button>
    <button class="filter-btn">Iron</button>
    <button class="filter-btn">Free parking</button>
    <button class="filter-btn">Filter</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "room-filter",
  created() {},
  data() {
    return {};
  },
  methods: {},
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