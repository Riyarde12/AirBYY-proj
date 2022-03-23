
<template>
  <section>
    <!-- <pre>{{ rooms }}</pre> -->
    <room-list v-if="rooms" :rooms="rooms"></room-list>
  </section>
</template>

<script>
import roomList from "../components/room-list.vue";
export default {
  name: "explore-page",
  components: {
    roomList,
  },
  created() {
    const params = this.$route.query;
    console.log("params", params);
    this.$store.dispatch({
      type: "loadRooms",
      filterBy: params,
    });
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    rooms() {
      return this.$store.getters.rooms;
    },
  },
};
</script>