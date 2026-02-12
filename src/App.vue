<script setup lang="ts">
</script>

<template>
  <div class="layout">
    <header class="header">
      <h1>Dashboard de Productos</h1>
    </header>

    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: 'Inter', Arial, sans-serif;
  background-color: #f5f5f5;
}

.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #1e293b;
  color: #fff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.main {
  flex: 1;
  padding: 2rem 1rem;
}
</style>
