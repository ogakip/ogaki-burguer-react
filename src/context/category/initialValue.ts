export const categoryValue = {
	id: 1,
	name: '',
	products: [
		{
			id: 1,
			image_url: '',
			name: '',
			price: 0,
			ingredients: [''],
		},
	],
};

export const initialValue = {
	categoryList: [categoryValue],
	isLoaded: false,
	getProductData: () => categoryValue
};
