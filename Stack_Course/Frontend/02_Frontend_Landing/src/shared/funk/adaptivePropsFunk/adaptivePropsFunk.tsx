import { useWindowSize } from '@/shared/hooks/useWindowSize/useWindowSize';

export const adaptivePropsFunk = (
	mobile: string,
	mobileLarge: string,
	defaultSize: string
) => {
	const { width } = useWindowSize();

	return width <= 375 ? mobile : width <= 768 ? mobileLarge : defaultSize;
};
