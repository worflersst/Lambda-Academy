import { useState } from 'react';
import styles from './index.module.scss';
export const BurgerButton = () => {
	const [isOpen, setIsOpen] = useState(true);
	const setOpenState = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div
			className={
				isOpen ? `${styles.menuButtonClose}` : `${styles.menuButtonOpen}`
			}
			onClick={() => {
				setOpenState();
			}}
		>
			<div className={styles.menuButtonBurger}>
				<span className={styles.visuallyHidden}>Open navigation menu</span>
			</div>
		</div>
	);
};
