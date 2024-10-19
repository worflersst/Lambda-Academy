import {
	DesktopImage,
	Emoji,
	MobileImage,
	Stars,
} from '@/shared/assets/home-page-picture/ContentBlock';
import RectangleGroupWhite from '@/shared/assets/home-page-picture/RectangleGroupWhite.svg';

import { Button } from '@/shared/ui/Button';
import { DoubleRectangle } from '@/shared/ui/DoubleRectangle';
import { Rectangle } from '@/shared/ui/Rectangle';
import styles from './index.module.scss';

export const HomeContentBlock = () => {
	return (
		<div className={styles.block}>
			<div className={styles.blockInfoWrapper}>
				<div className={styles.blockInfo}>
					<div className={styles.blockTitleWrapper}>
						<h2 className={styles.blockTitle}>
							Collecting payments{' '}
							<span className={styles.blockTitleRed}>is easy</span>, right?
						</h2>
					</div>

					<div className={styles.blockTextWrapper}>
						<p className={styles.blockText}>
							Manage all your supply chain transactions in one dashboard. Get
							paid faster, reconcile quicker, grow bigger.{' '}
						</p>
					</div>
					<div className={styles.blockButton}>
						<Button type='button' version='primary' size='large'>
							Get Started Now
						</Button>
					</div>
					<div className={styles.blockFooterWrapper}>
						<span className={styles.blockFooter}>
							<span className={styles.blockFooterText}>It's free to try!</span>
							<img src={Emoji} alt='Emoji' width='16' height='16' />
						</span>
					</div>
				</div>
			</div>
			{/* Работа с треугольничками */}
			<div className={styles.rectangle}>
				<div className={styles.rectangleTop}>
					<Rectangle
						colorType='Ghost15'
						widthAndHeight='257px'
						borderRadius='45px'
					/>
				</div>
				<div className={styles.rectangleLeft}>
					<Rectangle
						colorType='Ghost15'
						widthAndHeight='343px'
						borderRadius='32px'
					/>
				</div>
				<div className={styles.rectangleRight}>
					<DoubleRectangle
						WandHFirstLayer='1031px'
						WandHSeconfLayer='964px'
						borderRadius='135px'
						colorTypeFirstLayer='Red60'
						colorTypeSeconfLayer='Red100'
					/>
				</div>
			</div>
			{/* Работа с изображениями */}
			<div className={styles.image}>
				<div className={styles.imageStars}>
					<img src={Stars} alt='Stars Image' />
				</div>
				<div className={styles.imageRectangleGroupWhite1}>
					<img src={RectangleGroupWhite} alt='Rectangle Group' />
				</div>
				<div className={styles.imageRectangleGroupWhite2}>
					<img src={RectangleGroupWhite} alt='Rectangle Group' />
				</div>

				<div className={styles.imageDesktop}>
					<img src={DesktopImage} alt='DesktopImage' />
				</div>
				<div className={styles.imageMobile}>
					<img src={MobileImage} alt='MobileImage' />
				</div>
			</div>
		</div>
	);
};
