<template>
  <section class="search-section">
    <div class="search-bar">
      <div class="flex">
        <!-- <div @click="modalDestination = !modalDestination" class="filter-tag 1 fd"><p class="bold">Destination</p> -->
        <div
          @click="clickedModal('modalDestination')"
          :class="modalDestination ? 'choose' : ''"
          class="filter-tag fd search-bar-right-btn"
        >
          <p class="bold title-tag">Location</p>
          <input
            type="text"
            v-model="filterBy.destination"
            placeholder="Where are you going?"
          />
        </div>
        <!-- <p>Where are you going?</p></div> -->
        <div class="vert"></div>
        <div
          @click="clickedModal('modalDate', 4, 0)"
          :class="modal4 ? 'choose' : ''"
          class="filter-tag first-date"
        >
          <p class="bold title-tag">Check in</p>
          <!-- <p>Add dates</p> -->
          <p>{{ showDate(0) }}</p>
        </div>
        <div class="vert"></div>

        <!-- DATE-PICKER -->
        <div
          @click="clickedModal('modalDate', 5, 1)"
          :class="modal5 ? 'choose' : ''"
          class="filter-tag first-date"
        >
          <p class="bold title-tag">Check out</p>
          <!-- <p>Add dates</p> -->
          <p>{{ showDate(1) }}</p>
        </div>
        <div class="vert"></div>
        <div
          @click="clickedModal('modalGuests')"
          :class="modalGuests ? 'choose' : ''"
          class="filter-tag 4 ld"
        >
          <div class="last-line">
            <p class="bold title-tag">Guests</p>
            <p>Add guests</p>
          </div>
          <!-- </div> -->
          <!-- TEST -->
          <button
            @click.stop="sendFilter"
            :class="[modalOpen ? 'small-padding' : 'large-padding']"
            class="search-bar-btn demo-tracking"
          >
            <i class="el-icon">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="
                  display: block;
                  fill: none;
                  height: 16px;
                  width: 16px;
                  stroke: currentcolor;
                  stroke-width: 4;
                  overflow: visible;
                "
              >
                <g fill="none">
                  <path
                    d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
                  ></path>
                </g></svg
              ><span v-if="modalOpen">search</span>
            </i>
          </button>
          <!-- TEST -->
          <!-- <el-button
            @click.prevent="sendFilter"
            class="search-btn"
            :style="{width:isModalOpen}"
            v-if="searchBarTaped"
            size="large"
            type="danger"
            :icon="searchIcon"
            round
            ><span v-if="modalOpen">search</span></el-button 
          > -->
        </div>
      </div>
    </div>
    <teleport to="#models">
      <div v-if="modalGuests" class="modal">
        <div class="line flex">
          <div class="txt">
            <h3 class="title-tag">Adults</h3>
            <p class="content">Age 13 or above</p>
          </div>
          <div class="flex main-line">
            <div @click="add(0, 'adults')" class="div-btn">-</div>
            <p class="number">{{ filterBy.adults || 0 }}</p>
            <div @click="add(1, 'adults')" class="div-btn">+</div>
          </div>
        </div>

        <div class="line flex">
          <div class="txt">
            <h3 class="title-tag">Children</h3>
            <p class="content">Age 2-12</p>
          </div>
          <div class="flex main-line">
            <div @click="add(0, 'children')" class="div-btn">-</div>
            <p class="number">{{ children || 0 }}</p>
            <div @click="add(1, 'children')" class="div-btn">+</div>
          </div>
        </div>

        <div class="line flex">
          <div class="txt">
            <h3 class="title-tag">Infants</h3>
            <p class="content">Under 2</p>
          </div>
          <div class="flex main-line">
            <div @click="add(0, 'infants')" class="div-btn">-</div>
            <p class="number">{{ filterBy.infants || 0 }}</p>
            <div @click="add(1, 'infants')" class="div-btn">+</div>
          </div>
        </div>

        <div class="line flex">
          <div class="txt">
            <h3 class="title-tag">Pets</h3>
            <p class="content under-line">Bringing a service animal?</p>
          </div>
          <div class="flex main-line">
            <div @click="add(0, 'pets')" class="div-btn">-</div>
            <p class="number">{{ filterBy.pets || 0 }}</p>
            <div @click="add(1, 'pets')" class="div-btn">+</div>
          </div>
        </div>
        <p class="bottomModal">
          If you're lucky enough to have more than 2 pets with you, be sure to
          let your host know.
        </p>
      </div>
    </teleport>
    <teleport to="#models">
      <div v-if="modalDate" class="modal-2">
        <h1></h1>
      </div>
    </teleport>
    <teleport to="#models">
      <div v-if="modalDestination" class="modal-3">
        <h1></h1>
      </div>
    </teleport>

    <div class="demo-date-picker">
      <div class="block">
        <el-date-picker
          ref="input"
          v-model="value1"
          type="daterange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          @input="onSelectDate"
        />
      </div>
    </div>
    <div v-if="tapOut" @click="closeMdal" class="tap-close-modal"></div>
  </section>
</template>

<script>
import { Search } from "@element-plus/icons-vue";
import { shallowRef } from "@vue/reactivity";
// import { el } from "element-plus/lib/locale";
const searchIcon = shallowRef(Search);
export default {
  data() {
    return {
      value1: null,
      filterBy: {},
      modalGuests: false,
      modalDate: false,
      modalDestination: false,
      modal4: false,
      modal5: false,
      searchIcon,
      searchBarTaped: true,
      modalOpen: false,
      tapOut: false,
    };
  },
  created() {
    const params = this.$route.query;
    if (params.destination) {
      this.filterBy.destination = params.destination;
    }
    window.addEventListener("scroll", this.onScroll);
    // window.addEventListener("click", this.puki);
  },

  methods: {
    setSearchFiled() {
      const param = this.$route.query.destination;
      if (!param) {
        this.filterBy = {};
      } else {
        this.filterBy.destination = param;
      }
    },
    closeAllModal() {
      this.tapOut = false;
      this.modalGuests = false;
      this.modalDestination = false;
      this.modalDate = false;
      this.modal4 = false;
      this.modal5 = false;
      this.modalOpen = false;
    },
    closeMdal() {
      this.closeAllModal();
    },
    onScroll() {
      this.closeAllModal();
    },
    add(addedVal, key) {
      if (addedVal && this.filterBy[key]) {
        this.filterBy[key]++;
      } else if (addedVal && !this.filterBy[key]) {
        this.filterBy[key] = 0;
        this.filterBy[key]++;
      } else {
        if (this.filterBy[key] <= 0) return;
        this.filterBy[key]--;
      }
    },
    sendFilter() {
      this.modalGuests = false;
      this.$router.push({
        path: "explore",
        query: {
          destination: this.filterBy.destination,
          adults: this.filterBy.adults,
          children: this.filterBy.children,
          infants: this.filterBy.infants,
          pets: this.filterBy.pets,
        },
      });
      this.closeAllModal();
    },
    clickedModal(modal, modal45 = null, idx) {
      if (modal === "modalDate") {
        this.modalOpen = true;
        if (modal45 === 4) {
          if (this.modal4 === true) {
            this.modal4 = false;
            this.modalDate = false;
            this.modalOpen = false;
            this.tapOut = false;
          } else {
            this.tapOut = true;
            this.modal4 = true;
            this.modal5 = false;
            this.modalDate = true;
            this.$refs.input.focus();
          }
        } else {
          if (this.modal5 === true) {
            this.modal5 = false;
            this.modalDate = false;
            this.modalOpen = false;
            this.tapOut = false;
          } else {
            this.$refs.input.focus();
            this.modal5 = true;
            this.modal4 = false;
            this.modalDate = true;
            this.tapOut = true;
          }
        }
        this.modalGuests = false;
        this.modalDestination = false;
        return;
      } else {
        this.modal4 = false;
        this.modal5 = false;
      }
      if (this[modal] === true) {
        this[modal] = false;
        this.modalOpen = false;
        this.tapOut = false;
        this.tapOut = false;
        return;
      }
      this.modalGuests = false;
      this.modalDate = false;
      this.modalDestination = false;
      this[modal] = true;
      this.modalOpen =
        this.modalGuests === false &&
        this.modalDate === false &&
        this.modalDestination === false
          ? false
          : true;
      if (this.modalDestination || this.modalGuests) {
        this.tapOut = true;
      } else {
        this.tapOut = false;
      }
    },
    onSelectDate() {
      this.$store.commit({ type: "saveDate", selectedDate: this.value1 });
    },
    showDate(idx) {
      if (!this.value1) return "Add dates";
      const date = new Date(this.value1[idx]);
      return date.toDateString();
    },
  },
  computed: {
    children() {
      return this.filterBy.children;
    },
  },
  watch: {
    "$route.params": {
      handler() {
        this.setSearchFiled();
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style>
</style>
