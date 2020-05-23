<template>
  <div style="text-align: center;">
    <!-- Resources -->
    <h2>Seviye Seç</h2>
    <p>Başlamak istediğiniz seviyeyi seçiniz</p>

    <div class="card-container">
      <div v-for="level in Levels" :key="level.total" @click="$emit('initial',level)" class="card">
        <span>{{ level.name }}</span>
        <svg
          class="material-icons"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import Levels from "../models/Levels.js";

export default {
  name: "Level",
  data() {
    return {
      Levels
    };
  }
};
</script>

<style scoped>
</style>