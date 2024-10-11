import RectangleGroupGray from '@/shared/assets/home-page-picture/RectangleGroupGray.svg';
import LastImageGrpup from '@/shared/assets/home-page-picture/WhyShooseBlock/GroupGrey.png';

import { Rectangle } from '@/shared/ui/Rectangle';
import { Slider } from '@/shared/ui/Slider';
import styles from './index.module.scss';

export const WhyShooseBlock = () => {
	return (
		<div className={styles.section}>
			<div className={styles.sectionSlider}>
				<Slider />
			</div>
			{/* Работа с єлементами bg */}
			<span className={styles.sectionBg}>
				<div className={styles.sectionBgRectangles}>
					<div className={styles.sectionBgRectangles1}>
						<Rectangle
							borderRadius='68px'
							colorType='Ghost30'
							widthAndHeight='639px'
						/>
					</div>
					<div className={styles.sectionBgRectangles2}>
						<Rectangle
							borderRadius='57px'
							colorType='Ghost30'
							widthAndHeight='700px'
						/>
					</div>
					<div className={styles.sectionBgRectanglesGroup1}>
						<img src={RectangleGroupGray} alt='Rectangles Group img' />
					</div>
					<div className={styles.sectionBgRectanglesGroup2}>
						<img src={RectangleGroupGray} alt='Rectangles Group img' />
					</div>
				</div>
			</span>
			<div className={styles.sectionLastImage}>
				<img src={LastImageGrpup} alt='Rectangles Group img' />
			</div>
		</div>
	);
};
