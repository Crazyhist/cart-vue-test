<template>
	<div class="cart-list">
		<CartItem
			v-for="item in items"
			:key="item.id"
			:item="item"
			@update="$emit('update', item.id)"
			@remove="$emit('remove', item.id)"
			@delete="$emit('delete', item.id)"
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
})
</script>

<style scoped>
.cart-list {
	flex: 1;
}
</style>
