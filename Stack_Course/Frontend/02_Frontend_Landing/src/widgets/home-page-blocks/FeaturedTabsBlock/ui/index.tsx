import { FeaturedTabsBlockImage } from '@/shared/assets/home-page-picture/FeatureTabsBlock';
import RectangleGroupWhite from '@/shared/assets/home-page-picture/RectangleGroupWhite.svg';
import RectangleGroupWhiteGray from '@/shared/assets/home-page-picture/RectangleGroupWhiteGray.png';

import { adaptivePropsFunk } from '@/shared/funk/adaptivePropsFunk/adaptivePropsFunk';
import { useWindowSize } from '@/shared/hooks/useWindowSize/useWindowSize';
import { Button } from '@/shared/ui/Button';
import { DoubleRectangle } from '@/shared/ui/DoubleRectangle';
import { Rectangle } from '@/shared/ui/Rectangle';
import { TabsImage } from '@/shared/ui/TabsImg';
import { ThreeTabs } from '@/shared/ui/ThreeTabs';
import { useState } from 'react';
import { tabs } from './data';
import styles from './index.module.scss';

export const FeaturedTabsBlock = () => {
	const { width } = useWindowSize();
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
							widthAndHeight={adaptivePropsFunk('477px', '477px', '375px')}
						/>
					</div>

					{width < 769 && (
						<div className={styles.leftBlockGroup}>
							<img src={RectangleGroupWhiteGray} alt='Rectangle Group image' />
						</div>
					)}
				</div>
			</div>
			<div className={styles.rightBlock}>
				<div className={styles.rightBlockDoubleRectangle}>
					<DoubleRectangle
						WandHFirstLayer={adaptivePropsFunk('560px', '580px', '451px')}
						WandHSeconfLayer={adaptivePropsFunk('490px', '508px', '395px')}
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
