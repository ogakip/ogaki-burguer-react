import React, {
	createContext,
	FC,
	PropsWithChildren,
	useState,
	useEffect,
} from 'react';
import { ProviderProps } from '../../interfaces/context/provider';
import { initialValue } from './initialValue';
import {
	CategoryProps,
	CategoryContextProps,
} from '../../interfaces/context/category';
import database from '../../db/db.json';
import { categoryValue } from './initialValue';

export const CategoryContext =
	createContext<CategoryContextProps>(initialValue);

export const CategoryProvider: FC<PropsWithChildren<ProviderProps>> = ({
	children,
}): JSX.Element => {
	const [categoryList, setCategoryList] = useState<CategoryProps[]>([
		categoryValue,
	]);
	const [isLoaded, setIsLoaded] = useState(false);

	// function to call a category, if isLoaded is true
	const getProductData = (type: string) => {
		if (isLoaded) {
			const findCategory = categoryList.find((category) => {
				const { name } = category;
				if (name === type) {
					return category;
				}
			});
			if (findCategory) {
				return findCategory;
			}
			return categoryValue;
		}
	};

	// get all category on database
	useEffect(() => {
		if (database) {
			setCategoryList(database?.category);
		}
	}, []);

	// verify if category list is ready to use
	useEffect(() => {
		if (categoryList) {
			setIsLoaded(true);
		}
	}, [categoryList]);

	return (
		<CategoryContext.Provider
			value={{
				categoryList,
				isLoaded,
				getProductData,
			}}
		>
			{children}
		</CategoryContext.Provider>
	);
};
