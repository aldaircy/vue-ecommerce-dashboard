<template>
    <div class="product-card">
        <img :src="product.image" />
        <h3>{{ product.title }}</h3>
        <p class="description">{{ product.description }}</p>
        <h3>${{ product.price }}</h3>
        <RouterLink :to="`/product/${product.id}`" class="detail-btn">
          Ver Detalle
          <IconChevronRight class="icon" :size="18" stroke="2" />
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types/product'
import { IconChevronRight } from '@tabler/icons-vue';

defineProps<{
  product: Product
}>()
</script>

<style scoped>
.product-card {
  width: 100%;
  max-width: 250px;
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.product-card img {
  width: 100%;
  height: 150px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.product-card h3 {
  font-size: 1rem;
  margin: 0.5rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-card .description {
  font-size: 0.9rem;
  color: #555;

  display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-card a {
  text-decoration: none;
  color: #33a7dd;
  font-weight: 500;
  text-align: right;
  margin-top: auto;
}

.detail-btn {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  text-decoration: none;
  color: #33a7dd;
  font-weight: 500;
  margin-top: auto;
  padding: 4px 8px;
  border-radius: 6px;
  transition: color 0.2s ease;
  border: 1px solid transparent;
}

.icon {
  transition: transform 0.2s ease;
}

.detail-btn:hover {
  color: #fff;
  border: 1px solid #33a7dd;
  background-color: #33a7dd;
}

.detail-btn:hover .icon {
  transform: translateX(3px);
}

</style>