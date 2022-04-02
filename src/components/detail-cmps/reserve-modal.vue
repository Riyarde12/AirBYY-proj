
<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header"></div>
          <div class="modal-body">
            <slot name="body">
              <h3>Thank you {{ loggedInUser.fullname }}</h3>
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "reserve-modal",
  props: {
    show: Boolean,
    loggedInUser: Object,
  },
};
</script>

<style>
</style>