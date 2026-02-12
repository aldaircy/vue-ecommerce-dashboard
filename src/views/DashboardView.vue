<template>
    <div class="dashboard-container">    

        <div v-if="store.loading">
            Cargando productos...
        </div>

        <div v-else-if="store.error">
            {{ store.error }}
        </div>

        <template v-else>
            <ProductFilters />
            <ProductList />
            <Pagination />
        </template>

    </div>
  
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useProductsStore } from '@/stores/products.store'
import ProductFilters from '@/components/ProductFilters.vue'
import ProductList from '@/components/ProductList.vue'
import Pagination from '@/components/Pagination.vue'

const store = useProductsStore()

onMounted(() => {
  store.loadProducts()
})

</script>

<style scoped>
.dashboard-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}
</style>