<template>
    <div class="product-list">
        <ProductCard 
            v-for="product in store.paginatedProducts"
            :key="product.id"
            :product="product"
        />
    </div>
</template>

<script setup lang="ts">
import { useProductsStore } from '@/stores/products.store'
import ProductCard from './ProductCard.vue'

const store = useProductsStore()
</script>

<style scoped>
.product-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 4rem 1.6rem;
    align-items: stretch;
}
</style>
