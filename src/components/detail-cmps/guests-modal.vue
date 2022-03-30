

<template>
  <section class="guests-modal">
    <div>
      <div class="guests-line">
        <div class="guests-title">
          <h1>Adults</h1>
          <h4>Age 13+</h4>
        </div>
        <div class="guests-actions">
          <button @click.stop="onRemove('adults')">-</button>
          <span>{{ currOrder.guests.adults }}</span>
          <button @click.stop="onAdd('adults')">+</button>
        </div>
      </div>
      <div class="guests-line">
        <div class="guests-title">
          <h1>Children</h1>
          <h4>Age 2-12</h4>
        </div>
        <div class="guests-actions">
          <button @click.stop="onRemove('children')">-</button>
          <span>{{ currOrder.guests.adults }}</span>
          <button @click.stop="onAdd('children')">+</button>
        </div>
      </div>
      <div class="guests-line">
        <div class="guests-title">
          <h1>Infants</h1>
          <h4>Under 2</h4>
        </div>
        <div class="guests-actions">
          <button @click.stop="onRemove('Infants')">-</button>
          <span>{{ currOrder.guests.adults }}</span>
          <button @click.stop="onAdd('Infants')">+</button>
        </div>
      </div>
      <div class="guests-line">
        <div class="guests-title">
          <h1>Pets</h1>
          <h4>Bringing a service animal?</h4>
        </div>
        <div class="guests-actions">
          <button @click.stop="onRemove('pets')">-</button>
          <span>{{ currOrder.guests.adults }}</span>
          <button @click.stop="onAdd('pets')">+</button>
        </div>
      </div>
      <div class="close-modal">
        <button class="close-btn" @click="onCloseModal">Close</button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "guests-modal",
  components: {},
  props: {
    currOrder: { type: Object },
  },
  created() {},
  data() {
    return {
      // guests: {
      // 	adults: 0,
      // 	children: 0,
      // 	pets: 0,
      // 	infants: 0,
      // },
    };
  },
  methods: {
    onCloseModal() {
      this.$emit("onCloseModal");
    },
    onRemove(guest) {
      this.$emit("onRemove", guest);
    },
    onAdd(guest) {
      this.$emit("onAdd", guest);
    },
    // onRemove(guest) {
    // 	if (this.guests[guest] <= 0) return;
    // 	this.guests[guest]--;
    // 	this.$emit("onRemove", this.guests);
    // },
    // onAdd(guest) {
    // 	this.guests[guest]++;
    // 	this.$emit("onAdd", this.guests);
    // 	console.log(this.guests);
    // },
  },
  computed: {},
};
</script>