<template>
	<div class="cart-item">
		<div class="cart-item__image">
			<img :src="item.images" alt="" />
		</div>
		<div class="cart-item__info">
			<p class="cart-item__name">
				{{ item.name }}
			</p>
			<p class="cart-item__description">{{ item.description }}</p>
			<p class="cart-item__article">Артикул: {{ item.article }}</p>
		</div>
		<div class="cart-item__controls">
			<button class="cart-item__button" @click="$emit('removeItem', item.id)">
				-
			</button>
			<span class="cart-item__quantity">{{ item.count }}</span>
			<button class="cart-item__button" @click="$emit('addItem', item.id)">
				+
			</button>
		</div>
		<p class="cart-item__price">
			{{ (item.price * item.count).toLocaleString('ru-RU') }} ₽
		</p>
		<div class="cart-item__remove" @click="$emit('deleteItem', item.id)">
			<img src="/close.svg" alt="close" />
		</div>
	</div>
</template>

<script lang="ts">
import type { CartItem } from '@/stores/cart'
import type { PropType } from 'vue'

export default {
	props: {
		item: {
			type: Object as PropType<CartItem>,
			required: true,
		},
	},
	emits: ['addItem', 'removeItem', 'deleteItem'],
}
</script>

<style scoped>
.cart-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	padding: 20px 0;
	max-width: 800px;
	border-bottom: 1px solid #c4c4c4;
}

.cart-item:last-of-type {
	border-bottom: none;
}

.cart-item__image {
	max-width: 100px;
}

.cart-item__info {
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	gap: 6px;
	font-size: 12px;
	max-width: 263px;
}

.cart-item__name {
	font-size: 18px;
	font-weight: 500;
	color: #1f2432;
}

.cart-item__description {
	font-size: 12px;
}

.cart-item__article {
	font-size: 16px;
	color: #797b86;
}

.cart-item__controls {
	display: flex;
	align-items: center;
}

.cart-item__button {
	width: 30px;
	height: 30px;
	background-color: #f6f8fa;
	border: none;
	cursor: pointer;
	transition: background-color 0.3s ease;
	font-size: 16px;
}

.cart-item__button:first-of-type {
	border-radius: 4px 0 0 4px;
}

.cart-item__button:last-of-type {
	border-radius: 0 4px 4px 0;
}

.cart-item__button:hover {
	background-color: #f6f8fa;
}

.cart-item__quantity {
	width: 30px;
	height: 30px;
	text-align: center;
	background-color: #f6f8fa;
	margin: 0px 2px;
}

.cart-item__price {
	font-size: 18px;
	font-weight: 600;
	margin-right: 55px;
	width: 85px;
	text-align: right;
}

.cart-item__remove {
	position: absolute;
	top: 20px;
	right: 0;
	cursor: pointer;
}

.cart-item__remove img {
	padding: 5px;
}
</style>
