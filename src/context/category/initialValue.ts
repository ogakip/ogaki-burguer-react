export const categoryValue = {
	name: '',
	products: [
		{
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
