import { defineStore } from 'pinia'
import { fetchProducts } from '@/api/products.api'
import type { Product } from '@/types/product'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [] as Product[],
    search: '',
    category: '',
    currentPage: 1,
    perPage: 8,
    loading: false,
    error: null as string | null
  }),

  getters: {
    filteredProducts(state): Product[] {
      let filtered = state.products

      if (state.search) {
        filtered = filtered.filter(p => 
            p.title.toLowerCase().includes(state.search.toLowerCase())
        )
      }

      if (state.category) {
        filtered = filtered.filter(p => p.category.toLowerCase() === state.category.toLowerCase())
      }

      return filtered
    },

    paginatedProducts(state): Product[] {
      const start = (state.currentPage - 1) * state.perPage
      return this.filteredProducts.slice(start, start + state.perPage)
    },

    totalPages(): number {
      return Math.ceil(this.filteredProducts.length / this.perPage)
    }
  },

  actions: {
    async loadProducts() {
      try {
        this.loading = true
        this.error = null
        this.products = await fetchProducts()
      } catch (err: any) {
        this.error = err.response?.data?.message || 'No se pudieron cargar los productos'
      } finally {
        this.loading = false
      }
      
    },

    setSearch(value: string) {
      this.search = value
      this.currentPage = 1
    },

    setCategory(value: string) {
      this.category = value
      this.currentPage = 1
    },

    setPage(page: number) {
      this.currentPage = page
    }
  },
})