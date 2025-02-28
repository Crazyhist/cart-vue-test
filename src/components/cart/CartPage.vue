<template>
	<div class="cart">
		<div class="cart-header">
			<h1 class="cart-header__title">
				Ваша корзина
				<span class="cart-header__count"
					><span class="cart-header__count"
						>{{ cartStore.cartCount }} шт</span
					></span
				>
			</h1>
			<button class="cart-header__clear" @click="cartStore.clearCart">
				Очистить корзину
			</button>
		</div>
		<div class="cart-content">
			<CartList
				:items="cartStore.cartItems"
				@addItem="cartStore.addItem"
				@removeItem="cartStore.removeItem"
				@deleteItem="cartStore.deleteItem"
			/>
			<CartSummary :total="cartStore.cartTotal" :count="cartStore.cartCount" />
		</div>
	</div>
</template>

<script lang="ts">
import CartList from '@/components/cart/CartList.vue'
import CartSummary from '@/components/cart/CartSummary.vue'

import { useCartStore } from '@/stores/cart'

import { defineComponent } from 'vue'

export default defineComponent({
	components: { CartList, CartSummary },
	setup() {
		const cartStore = useCartStore()
		return { cartStore }
	},
})
</script>

<style scoped>
.cart {
	display: flex;
	flex-direction: column;
}
.cart-header {
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	max-width: 800px;
	width: 100%;
	margin-bottom: 50px;
}

.cart-header__title {
	font-size: 44px;
	font-weight: bold;
	color: #1f2432;
	display: flex;
	align-items: baseline;
}

.cart-header__count {
	margin-left: 22px;
	font-size: 18px;
	color: #797b86;
}

.cart-header__clear {
	background: none;
	border: none;
	color: #797b86;
	font-size: 14px;
	cursor: pointer;
	text-decoration: underline;
}

.cart-header__clear:hover {
	color: #0056b3;
}

.cart-content {
	display: flex;
	gap: 20px;
}
</style>
