import { ReactNode } from 'react';
import styles from './index.module.scss';

type variantColorType =
	| 'Red30'
	| 'Red40'
	| 'Red60'
	| 'Red100'
	| 'Ghost15'
	| 'Ghost20'
	| 'Ghost30'
	| 'Ghost50'
	| 'Ghost80'
	| 'Ghost100';

interface DoubleRectangleI {
	WandHFirstLayer: string;
	WandHSeconfLayer: string;
	colorTypeFirstLayer: variantColorType;
	colorTypeSeconfLayer: variantColorType;
	borderRadius: string;
	children?: ReactNode;
}

export const DoubleRectangle = ({
	children,
	WandHFirstLayer,
	WandHSeconfLayer,
	colorTypeFirstLayer,
	colorTypeSeconfLayer,
	borderRadius,
}: DoubleRectangleI) => {
	return (
		<div
			className={`${styles.rectangleF} ${styles[WandHFirstLayer]} ${styles[colorTypeFirstLayer]} ${styles[borderRadius]} `}
			style={
				{
					'--WandHFirstLayer': WandHFirstLayer,
					'--WandHSeconfLayer': WandHSeconfLayer,
					'--borderRadius': borderRadius,
				} as React.CSSProperties
			}
		>
			<div
				className={`${styles.rectangleS} ${styles[WandHSeconfLayer]} ${styles[colorTypeSeconfLayer]} ${styles[borderRadius]}`}
			>
				{children}
			</div>
		</div>
	);
};
