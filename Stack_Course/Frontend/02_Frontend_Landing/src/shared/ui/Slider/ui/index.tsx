import { SliderData } from './data';
import styles from './index.module.scss';

export const Slider = () => {
	return (
		<div className={styles.switcher}>
			<h2>Why choose Tinvio?</h2>
			{SliderData.map(() => (
				<div className={styles.slides}> </div>
			))}
		</div>
	);
};
