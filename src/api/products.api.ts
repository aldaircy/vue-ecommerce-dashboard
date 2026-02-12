import { apiClient } from './apiClient'
import type { Product } from '@/types/product'

export async function fetchProducts(): Promise<Product[]> {
    const response = await apiClient.get('/products')
    const data = response.data

    const items = Array.isArray(data) ? data : data.products

    return items.map((item: any) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      price: item.price,
      category: item.category,
      image: item.image || item.thumbnail
    }))
}

export async function fetchProductById(id: number): Promise<Product> {
    const response = await apiClient.get(`/products/${id}`)
    const item = response.data

    return {
      id: item.id,
      title: item.title,
      description: item.description,
      price: item.price,
      category: item.category,
      image: item.image || item.thumbnail
    }
}