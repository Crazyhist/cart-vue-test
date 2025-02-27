import { defineStore } from 'pinia'

export interface CartItem {
	id: number
	name: string
	description: string
	count: number
	price: number
	images: string
	article: string
}

interface CartState {
	cart: CartItem[]
}

const initialState: CartState = {
	cart: [
		{
			id: 1,
			name: 'Молоток',
			description:
				'ударный ручной инструмент, применяемый для забивания гвоздей',
			article: 'G2H1065',
			count: 1,
			price: 2256,
			images: '',
		},
		{
			id: 2,
			name: 'Гвозди',
			description:
				'крепёжное изделие, метиз в виде стержня с металлической головкой и острым концом',
			article: 'G2H1066',
			count: 2,
			price: 1200,
			images: '',
		},
		{
			id: 3,
			name: 'Брус',
			description: 'доска с неопиленными или частично опиленными кромками',
			article: 'G2H1067',
			count: 1,
			price: 6500,
			images: '',
		},
	],
}

export const useCartStore = defineStore('cart', {
	state: (): CartState => ({ ...initialState }),
	getters: {
		cartItems: (state): CartItem[] => state.cart,
		cartTotal: (state): number => {
			let total = state.cart.reduce(
				(sum, item) => sum + item.price * item.count,
				0
			)
			return total
		},
		cartCount: (state): number =>
			state.cart.reduce((count, item) => count + item.count, 0),
	},
	actions: {
		addItem(itemId: number): void {
			const item = this.cart.find((item) => item.id === itemId)
			if (item) {
				item.count += 1
			}
		},
		removeItem(itemId: number): void {
			const item = this.cart.find((item) => item.id === itemId)
			if (item && item.count > 1) {
				item.count -= 1
			}
		},
		deleteItem(itemId: number): void {
			this.cart = this.cart.filter((item) => item.id !== itemId)
		},
		clearCart(): void {
			this.cart = []
		},
	},
})
