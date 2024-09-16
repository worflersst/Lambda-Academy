import React from 'react';
import styles from './index.module.scss';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
	size: 'small' | 'medium' | 'medium_large' | 'large';
	type: 'button' | 'reset' | 'submit';
	version: 'second' | 'primary';
};

export const Button = ({
	size = 'medium',
	type = 'button',
	children,
	version = 'second',
}: ButtonProps) => {
	return (
		<button
			type={type}
			className={` ${styles.button} ${styles[size]} ${styles[version]}`}
		>
			{children}
		</button>
	);
};
