import { EN, ID, TH, VH } from '@/shared/assets/forLangSwitch/flag';
import SwitcherArrowDown from '@/shared/assets/forLangSwitch/switchArrowDown.svg';
import SwitcherArrowUp from '@/shared/assets/forLangSwitch/switchArrowUp.svg';

import { useState } from 'react';
import styles from './index.module.scss';

export const LanguageSwitcher = () => {
	const flagVariants = [
		{
			label: 'EN',
			value: 'en',
			flag: <img src={EN} alt='EN image flag' className={styles.flag} />,
		},
		{
			label: 'ID',
			value: 'id',
			flag: <img src={ID} alt='ID image flag' className={styles.flag} />,
		},
		{
			label: 'TH',
			value: 'th',
			flag: <img src={TH} alt='TH image flag' className={styles.flag} />,
		},
		{
			label: 'VN',
			value: 'vn',
			flag: <img src={VH} alt='VN image flag' className={styles.flag} />,
		},
	];
	const [selectVariant, setSelectedVariant] = useState(flagVariants[0]);
	const [isActive, setIsActive] = useState<boolean>(false);
	const clickHandler = (variants: any) => {
		setSelectedVariant(variants);
		setIsActive(false);
	};
	return (
		<div
			className={styles.switchWrapper}
			onClick={() => {
				setIsActive(!isActive);
			}}
		>
			<div className={styles.clickArea}>
				<span className={styles.label}>{selectVariant.label}</span>
				<div>
					<img
						src={isActive ? SwitcherArrowUp : SwitcherArrowDown}
						alt='dropdown switcher button'
						className={styles.arrow}
					/>
				</div>
			</div>
			{isActive && (
				<div className={styles.dropdown}>
					{flagVariants.map(variants => (
						<div
							className={styles.flagWrapper}
							key={selectVariant.value}
							onClick={() => clickHandler(variants)}
						>
							<div className={styles.grayLine}>{variants.flag}</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
