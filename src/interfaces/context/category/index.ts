export interface ProductProps {
    id: number,
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
    id: number,
    name: string,
    products: ProductProps[],
    size?: PizzaSizeProps[]
}

export interface CategoryContextProps {
    categoryList: CategoryProps[],
    isLoaded: boolean,
    getProductData: (type: string) => void
}