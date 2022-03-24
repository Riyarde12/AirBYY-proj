<template>
  <section v-if="room" class="room-preview">
    <div class="preview-img-section">
      <svg
        class="preview-like-btn"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="presentation"
        focusable="false"
      >
        <path
          d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"
        ></path>
      </svg>
      <img class="preview-carousel" src="src\assets\img\030.jpeg" alt="" />
    </div>
    <div class="preview-details">
      <div class="preview-reviews">
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path
            d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
            fill-rule="evenodd"
          ></path>
        </svg>
        <p>{{ room.reviewScores.rating }}</p>
        <p>({{ room.numOfReviews }})</p>
      </div>
      <p>{{ room.roomType }} · {{ room.address.city }}</p>
      <p>{{ room.name }}</p>
      <p>
        <span>${{ room.price }}</span
        >/ night
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "room-preview",
  props: {
    room: Object,
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  computed: {},
};
</script>

<style></style>
