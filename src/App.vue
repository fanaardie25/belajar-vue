<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>

  <header>
     <Navbar/>
  </header>

  <main class="container mt-4">
    <router-view></router-view>
  </main>
  
</template>

