<script setup lang="ts">
import CartPage from './components/cart/CartPage.vue'
import Header from './components/header/Header.vue'
</script>

<template>
	<div class="container">
		<Header />
		<div class="contentContainer">
			<CartPage />
		</div>
		<footer></footer>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	/* max-width: 1480px; */
	padding: 0 20px;
	margin: 0 auto;
}
.contentContainer {
}
</style>
