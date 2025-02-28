export function pluralizeProduct(count: number): string {
	const remainder10 = count % 10
	const remainder100 = count % 100

	if (remainder100 >= 11 && remainder100 <= 19) {
		return `${count} товаров` // 11-19 товаров
	}

	if (remainder10 === 1) {
		return `${count} товар` // 1 товар
	}

	if (remainder10 >= 2 && remainder10 <= 4) {
		return `${count} товара` // 2, 3, 4 товара
	}

	return `${count} товаров` // 5, 6, 7... товаров
}
