<script setup>
import Navbar from "./components/Navbar.vue";
import Title from "./components/WhatShouldWeSay.vue";
</script>

<template>
  <div class="app">
    <div>
      <Navbar />
    </div>
    <div>
      <Title />
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
</style>
