import {
	Pymnts,
	Stars,
	TechCrunch,
	TechInasia,
	VentureBeat,
} from '@/shared/assets/home-page-picture/FeaturedOnBlock';
import RectangleGroup from '@/shared/assets/home-page-picture/RectangleGroupWhite.svg';

import { Rectangle } from '@/shared/ui/Rectangle';
import { useInView } from 'react-intersection-observer';
import styles from './index.module.scss';

export const FeatureOnBlock = () => {
	const { ref, inView } = useInView({
		threshold: 0.2,
	});

	return (
		<div ref={ref} className={styles.section}>
			<div className={styles.sectionDisplay}>
				<h2 className={`${styles.sectionTitle} ${inView ? styles.Active : ''}`}>
					Featured On
				</h2>
				<span className={styles.sectionLine}></span>
				<div
					className={`${styles.sectionImages} ${inView ? styles.Active : ''}`}
				>
					<img src={TechCrunch} alt='Tech Crunch logo' />
					<img src={TechInasia} alt='TechInasia logo' />
					<img src={Pymnts} alt='Pymnts logo' />
					<img src={VentureBeat} alt='VentureBeat logo' />
				</div>
			</div>
			{/* background */}
			<div className={styles.sectionBg}>
				<div className={styles.sectionBgRectangle1}>
					<Rectangle
						widthAndHeight='505px'
						colorType='Ghost20'
						borderRadius='95px'
					/>
				</div>
				<div className={styles.sectionBgRectangle2}>
					<Rectangle
						widthAndHeight='505px'
						colorType='Ghost100'
						borderRadius='95px'
					/>
				</div>
				<div className={styles.sectionBgImage1}>
					<img src={RectangleGroup} alt='Rectangle group' />
				</div>
				<div className={styles.sectionBgImage2}>
					<img src={Stars} alt='Stars right' />
				</div>
			</div>
		</div>
	);
};

// отработай этот ектив класс на элементах
