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
	</div>
</template>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	max-width: 100vw;
	background-color: rgb(150, 142, 142);
	margin: 0 auto;
}
.contentContainer {
}
</style>
