export default {
	name: 'product',
	title: 'Products',
	type: 'document',
	fields: [
		{ name: 'images', title: 'Images', type: 'array', of: [{ type: 'image' }] },
		{ name: 'name', title: 'Name', type: 'string' },
		{ name: 'description', title: 'Description', type: 'text' },
		{ name: 'stock', title: 'Stock', type: 'number' },
		{
			name: 'sizes',
			title: 'Sizes',
			type: 'array',
			of: [{ type: 'string' }],
		},
		{
			name: 'colors',
			title: 'Colors',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{ name: 'text', title: 'Text', type: 'string' },
						{ name: 'value', title: 'Value', type: 'string' },
					],
				},
			],
		},
		{ name: 'price', title: 'Price', type: 'number' },
	],
};
