export interface ProductProps {
    name: string,
    price?: number,
    image_url: string,
    ingredients: string[]
}

export interface PizzaSizeProps {
    name: string,
    price: number
}

export interface CategoryProps {
    name: string,
    products: ProductProps[],
    size?: PizzaSizeProps[]
}

export interface CategoryContextProps {
    categoryList: CategoryProps[],
    isLoaded: boolean,
    getProductData: (type: string) => void
}