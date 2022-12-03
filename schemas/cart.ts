export default {
	name: 'cart',
	title: 'Cart',
	type: 'document',
	fields: [
		{
			name: 'product',
			title: 'Product',
			type: 'reference',
			to: [{ type: 'product' }],
		},
		{ name: 'size', title: 'Size', type: 'string' },
		{ name: 'color', title: 'Color', type: 'string' },
		{ name: 'quantity', title: 'Quantity', type: 'number' },
	],
};
