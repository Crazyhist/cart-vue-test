<template>
	<header class="header">
		<div class="header-cart">
			<img src="/cart-icon.svg" alt="Корзина" class="header-cart__icon" />
			<div class="header-cart__info">
				<p class="header-cart__text">Ваша корзина</p>
				<p class="header-cart__details">{{ cartItemsText }}</p>
				<p class="header-cart__price">
					{{ cartTotal.toLocaleString('ru-RU') }} ₽
				</p>
			</div>
		</div>
	</header>
</template>

<script lang="ts">
import { useCartStore } from '@/stores/cart'

import { computed, defineComponent } from 'vue'

import { pluralizeProduct } from '@/utils/pluralizeProduct'

export default defineComponent({
	name: 'HeaderCart',
	setup() {
		const cartStore = useCartStore()

		const cartCount = computed(() => cartStore.cartCount)
		const cartTotal = computed(() => cartStore.cartTotal)

		const cartItemsText = computed(() => pluralizeProduct(cartCount.value))

		return {
			cartCount,
			cartTotal,
			cartItemsText,
		}
	},
})
</script>

<style scoped>
.header {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 20px 0;
}

.header-cart {
	display: flex;
	align-items: center;
	gap: 10px;
}

.header-cart__icon {
	width: 32px;
	height: 32px;
}

.header-cart__info {
	text-align: left;
	line-height: normal;
}

.header-cart__text {
	font-size: 14px;
	color: #2a2a2a;
}

.header-cart__details {
	font-size: 12px;
	color: #797b86;
}

.header-cart__price {
	font-size: 12px;
	color: #1f2432;
}
</style>
