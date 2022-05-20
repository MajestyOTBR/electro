import Shop from '@/pages/shop/index.vue'
import ShopCheckout from '@/pages/shop/checkout.vue'

export default [
  {
    path: '/shop',
    component: Shop,
    name: 'Shop',
    meta: {
      name: 'shop'
    }
  },
  {
    path: '/shop/checkout',
    component: ShopCheckout,
    name: 'Shop - Checkout',
    meta: {
      name: 'checkout'
    }
  },
]