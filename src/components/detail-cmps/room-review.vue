<template>
  <section class="room-review">
    <section class="review-score">
      <div class="room-reviews-header">
        <div class="container flex flex-start">
          <span class="star-review"
            ><img src="../../assets/img/star.png" alt=""
          /></span>
          <span v-if="room.reviewScores" class="reviews"
            >{{ avgReviewScores }} · {{ room.numOfReviews }} Reviews</span
          >
        </div>
        <div class="score-list-container">
          <ul v-if="room.reviewScores">
            <li
              class="clean-list"
              v-for="(item, key) in reviewScore"
              :key="key"
            >
              <div class="flex space-between">
                <div class="progress-container">{{ key }}</div>
                <div class="flex">
                  <el-progress class="progress-bar" :percentage="item * 10">
                    <span>
                      {{ item / 2 }}
                    </span>
                  </el-progress>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="room-review-list">
      <ul class="review-list-container clean-list">
        <li
          class="review-preview-container"
          v-for="(review, idx) in room.reviews"
          :key="idx"
        >
          <section class="review-header">
            <div>
              <div class="avatar-container">
                <!-- <div class="block"> -->
                <div class="review-by-container flex">
                  <el-avatar
                    :size="56"
                    :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
                  />
                  <div class="container">
                    <span class="name">{{ review.by.fullname }}</span>
                    <span class="date">{{ getReviewDate(review.at) }}</span>
                  </div>
                </div>
                <!-- </div> -->
              </div>
            </div>
            <span>{{ review.txt }}</span>
          </section>
        </li>
      </ul>
    </section>
  </section>
</template>
<script>
export default {
  name: "review",
  components: {},
  props: {
    room: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {};
  },
  created() {},
  computed: {
    reviewScore() {
      const { accuracy, cleanliness, checkin, communication, location, value } =
        this.room.reviewScores;

      const scores = {
        accuracy,
        cleanliness,
        checkin,
        communication,
        location,
        value,
      };

      return scores;
    },
    avgReviewScores() {
      return this.room.reviewScores.rating / 20;
    },
  },
  methods: {
    getReviewDate(reviewDate) {
      const date = new Date(reviewDate);
      return date.toDateString();
    },
  },
};
</script>