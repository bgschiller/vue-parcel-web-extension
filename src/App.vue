<template>
  <div
    class="color-of-the-day"
    :style="{ 'background-color': backgroundColor }"
  ></div>
</template>
<script>
export default {
  computed: {
    hue() {
      return Math.floor(Math.random() * 360);
    },
    backgroundColor() {
      return `hsl(${this.hue}, 100%, 50%)`;
    },
  },
};
</script>
<style>
.color-of-the-day {
  width: 200px;
  height: 200px;
}
</style>
