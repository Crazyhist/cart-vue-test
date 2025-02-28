<template>
	<nav class="breadcrumbs">
		<span class="breadcrumbs__link">Главная</span>
		<span class="breadcrumbs__separator">▸</span>
		<span class="breadcrumbs__current">Корзина</span>
	</nav>
</template>

<style scoped>
.breadcrumbs {
	font-size: 14px;
	color: #797b86;
	display: flex;
	align-items: center;
}

.breadcrumbs__separator {
	margin: 0 8px;
	color: #c4c4c4;
}

.breadcrumbs__link {
	color: #2a2a2a;
	cursor: pointer;
	transition: color 0.2s;
}

.breadcrumbs__link:hover {
	color: #0056b3;
}

.breadcrumbs__current {
	color: #797b86;
}
</style>
