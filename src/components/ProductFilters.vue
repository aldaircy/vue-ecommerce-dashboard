<template>
    <div class="product-filters">
        <input placeholder="Buscar producto..." v-model="store.search" />
        <select v-model="store.category">
            <option value="">Todas las categorías</option>
            <option 
                v-for="cat in categories" 
                :key="cat" 
                :value="cat">
                {{ cat.charAt(0).toUpperCase() + cat.slice(1) }}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProductsStore } from '@/stores/products.store'

const store = useProductsStore()

const categories = computed(() => {
    return [...new Set(store.products.map(p => p.category))]
})
</script>

<style scoped>
.product-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.product-filters input,
.product-filters select {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  flex: 1;
  min-width: 200px;
}

.product-filters input:focus,
.product-filters select:focus {
  outline: none;
  border-color: #33a7dd;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}
</style>