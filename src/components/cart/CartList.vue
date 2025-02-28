<template>
	<div class="cart-list">
		<CartItem
			v-for="item in items"
			:key="item.id"
			:item="item"
			@addItem="$emit('addItem', item.id)"
			@removeItem="$emit('removeItem', item.id)"
			@deleteItem="$emit('deleteItem', item.id)"
		/>
	</div>
</template>

<script lang="ts">
import CartItem from '@/components/cart/CartItem.vue'
import { type CartItem as CartItemType } from '@/stores/cart'
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
	components: { CartItem },
	props: {
		items: Array as PropType<CartItemType[]>,
	},
	emits: ['addItem', 'removeItem', 'deleteItem'],
})
</script>

<style scoped>
.cart-list {
	flex: 1;
}
</style>
