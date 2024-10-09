import { Slider } from '@/shared/ui/Slider';
import styles from './index.module.scss';

export const WhyShooseBlock = () => {
	return (
		<div className={styles.section}>
			<span className={styles.sectionBg}></span>
			{/* Заглушка под свитчер */}
			<div className={styles.sectionSlider}>
				<Slider />
			</div>
		</div>
	);
};
