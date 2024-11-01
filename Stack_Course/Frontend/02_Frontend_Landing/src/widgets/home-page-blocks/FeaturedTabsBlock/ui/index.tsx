import { FeaturedTabsBlockImage } from '@/shared/assets/home-page-picture/FeatureTabsBlock';
import RectangleGroupWhite from '@/shared/assets/home-page-picture/RectangleGroupWhite.svg';

import { Button } from '@/shared/ui/Button';
import { DoubleRectangle } from '@/shared/ui/DoubleRectangle';
import { Rectangle } from '@/shared/ui/Rectangle';
import { TabsImage } from '@/shared/ui/TabsImg';
import { ThreeTabs } from '@/shared/ui/ThreeTabs';
import { useState } from 'react';
import { tabs } from './data';
import styles from './index.module.scss';

export const FeaturedTabsBlock = () => {
	const [isTab, setIsTab] = useState(tabs[0]);

	return (
		<div className={styles.main}>
			<div className={styles.leftBlock}>
				<div className={styles.leftBlockContent}>
					<ThreeTabs tabs={tabs} isTab={isTab} setIsTab={setIsTab} />
					<div className={styles.leftBlockButton}>
						<Button size='medium' type='button' version='primary'>
							More Features
						</Button>
					</div>
					<div className={styles.leftBlockRectangle}>
						<Rectangle
							borderRadius='28px'
							colorType='Ghost15'
							widthAndHeight='477px'
						/>
					</div>
				</div>
			</div>
			<div className={styles.rightBlock}>
				<div className={styles.rightBlockDoubleRectangle}>
					<DoubleRectangle
						WandHFirstLayer='560px'
						WandHSeconfLayer='490px'
						borderRadius='72px'
						colorTypeFirstLayer='Red60'
						colorTypeSeconfLayer='Red100'
					/>
				</div>

				<TabsImage isTab={isTab} />
				<div className={styles.rightBlockImgStars}>
					<img src={FeaturedTabsBlockImage.Stars} alt='Stars Image' />
				</div>
				<div className={styles.rightBlockImgRectangleGroup}>
					<img src={RectangleGroupWhite} alt='Rectangle Group White image' />
				</div>
			</div>
		</div>
	);
};
