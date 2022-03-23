

<template>
  <section>
    <pre>{{ destination }}</pre>
  </section>
</template>


<script>
// import '' from ''
export default {
  name: "explore-page",
  components: {},
  created() {
    this.destination = this.$route.query;
  },
  data() {
    return {
      destination: null,
    };
  },
  methods: {},
  computed: {},
};
</script>