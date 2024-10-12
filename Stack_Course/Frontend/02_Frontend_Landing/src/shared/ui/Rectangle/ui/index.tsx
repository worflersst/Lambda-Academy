import React, { ReactNode } from 'react';
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

interface RectanglePropse {
	widthAndHeight: string;
	borderRadius: string;
	colorType: variantColorType;
	children?: ReactNode;
	pulsation?: 'maxPulseAnimate' | 'normalPulseAnimate';
}

export const Rectangle = ({
	widthAndHeight,
	borderRadius,
	colorType,
	children,
	pulsation,
}: RectanglePropse) => {
	return (
		<div
			className={` ${styles.rectangle} ${styles[colorType]} ${
				pulsation ? styles[pulsation] : ''
			}`}
			style={
				{
					'--widthAndHeight': widthAndHeight,
					'--borderRadius': borderRadius,
				} as React.CSSProperties
			}
		>
			{children}
		</div>
	);
};
