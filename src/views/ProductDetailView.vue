<template>
    <div v-if="loading">Cargando...</div>

    <div v-else-if="error" class="error">
        {{ error }}
    </div>

    <div v-else-if="product" class="product-detail">
        <button class="back-btn" @click="goBack">
            <IconChevronLeft :size="18" stroke="2" />
            Volver
        </button>
        <div class="product-container">
            <div class="image-section">
                <img :src="product.image" />
            </div>
            <div class="info-section">
                <h1>{{ product.title }}</h1>
                <p class="description">{{ product.description }}</p>
                <h2 class="price">${{ product.price }}</h2>
            </div>
        </div>
    </div>

    <div v-else>
        <p>Producto no encontrado</p>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { fetchProductById } from '@/api/products.api'
import type { Product } from '@/types/product'
import { IconChevronLeft } from '@tabler/icons-vue';

const route = useRoute()
const router = useRouter()

const product = ref<Product | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

const goBack = () => {
    router.back()
}

onMounted(async () => {
    try {
        const id = Number(route.params.id)  
        product.value = await fetchProductById(id)
    } catch (err) {
        error.value = 'Error al cargar el producto'
    } finally {
        loading.value = false
    }
})
</script>

<style scoped>
.product-detail {
  max-width: 1100px;
  margin: 2rem auto;
  padding: 2rem;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  margin-bottom: 2rem;
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.back-btn:hover {
  background-color: #e5e7eb;
  transform: translateY(-2px);
}

.back-btn:hover svg {
  transform: translateX(-4px);
  transition: transform 0.2s ease;
}

.product-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.image-section {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.image-section img {
  width: 100%;
  height: 400px;
  object-fit: contain;
}

.info-section {
  display: flex;
  flex-direction: column;
}

.info-section h1 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #111827;
}

.description {
  color: #4b5563;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.price {
  font-size: 2rem;
  font-weight: bold;
  color: #33a7dd;
  margin-bottom: 1.5rem;
}
</style>