<template>
    <div class="product-pagination">
        <button 
            v-for="page in store.totalPages" 
            :key="page" 
            @click="store.setPage(page)"
            :class="{ active: store.currentPage === page }"
        >
            {{ page }}
        </button>
    </div>
</template>

<script setup lang="ts">
import { useProductsStore } from '@/stores/products.store'

const store = useProductsStore()
</script>

<style scoped>
.product-pagination {
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  gap: 0.5rem;
}

.product-pagination button {
  padding: 0.4rem 0.8rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;
  transition: 0.2s;
}

.product-pagination button:hover {
  background-color: #f0f0f0;
}

.product-pagination button.active {
  background-color: #33a7dd;
  color: #fff;
  border-color: #33a7dd;
}
</style>