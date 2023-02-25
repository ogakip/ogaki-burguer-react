import React, { FC, PropsWithChildren } from 'react';
import { ProviderProps } from '../interfaces/context/provider';
import { CategoryProvider } from './category';

export const Provider: FC<PropsWithChildren<ProviderProps>> = ({
	children,
}): JSX.Element => {
	return <CategoryProvider>{children}</CategoryProvider>;
};
