<script setup lang="ts">
import Breadcrumbs from './components/cart/Breadcrumbs.vue'
import CartPage from './components/cart/CartPage.vue'
import Header from './components/header/Header.vue'
</script>

<template>
	<div class="container">
		<Header />
		<Breadcrumbs />
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
	gap: 30px;
	padding: 32px 80px 0;
	margin: 0 auto;
}

.container > *:first-child {
}

.contentContainer {
}
</style>
