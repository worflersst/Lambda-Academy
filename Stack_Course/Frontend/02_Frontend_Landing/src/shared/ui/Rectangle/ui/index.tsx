import React from 'react';
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
}

export const Rectangle = ({
	widthAndHeight,
	borderRadius,
	colorType,
}: RectanglePropse) => {
	return (
		<div
			className={` ${styles.rectangle} ${styles[colorType]}`}
			style={
				{
					'--widthAndHeight': widthAndHeight,
					'--borderRadius': borderRadius,
				} as React.CSSProperties
			}
		></div>
	);
};
