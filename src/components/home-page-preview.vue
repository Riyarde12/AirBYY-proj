<template>
  <section class="room-preview">
    <!-- <h1>pppp</h1> -->
    <!-- <pre>{{destination}}</pre> -->
    <div
      class="preview-img-section"
      @click="country(destination.address.country)"
    >
      <h1>{{ destination.address.country }}</h1>
      <img class="preview-carousel" src="src\assets\img\030.jpeg" alt="" />
    </div>
    <div class="preview-details"></div>
  </section>
</template>

<script>
export default {
  props: {
    destination: Object,
  },
  methods: {
    country(place) {
      // console.log(place);
      this.$emit("goTo", place);
    },
  },
};
</script>

<style></style>
