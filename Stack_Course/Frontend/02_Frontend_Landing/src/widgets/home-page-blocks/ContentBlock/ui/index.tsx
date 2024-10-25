import {
	DesktopImage,
	Emoji,
	MobileImage,
	Stars,
} from '@/shared/assets/home-page-picture/ContentBlock';
import RectangleGroupWhite from '@/shared/assets/home-page-picture/RectangleGroupWhite.svg';

import { adaptivePropsFunk } from '@/shared/funk/adaptivePropsFunk/adaptivePropsFunk';
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
					<span style={{ display: 'inline-block' }}>
						<div className={styles.blockButton}>
							<Button type='button' version='primary' size='large'>
								Get Started Now
							</Button>
						</div>
						<div className={styles.blockFooterWrapper}>
							<span className={styles.blockFooter}>
								<span className={styles.blockFooterText}>
									It's free to try!
								</span>
								<img src={Emoji} alt='Emoji' width='16' height='16' />
							</span>
						</div>
					</span>
					<div className={styles.blockInfoStars}>
						<img src={Stars} alt='Stars Image' />
					</div>
				</div>
			</div>
			{/* Работа с треугольничками */}
			<div className={styles.rectangle}>
				<div className={styles.rectangleTop}>
					<Rectangle
						colorType='Ghost15'
						widthAndHeight={adaptivePropsFunk('248px', '327px', '257px')}
						borderRadius={adaptivePropsFunk('43px', '57px', '45px')}
					/>
				</div>
				<div className={styles.rectangleLeft}>
					<Rectangle
						colorType='Ghost15'
						widthAndHeight={adaptivePropsFunk('300px', '385px', '343px')}
						borderRadius={adaptivePropsFunk('27px', '35px', '32px')}
					/>
				</div>
				<div className={styles.rectangleDouble}>
					<DoubleRectangle
						WandHFirstLayer={adaptivePropsFunk('664px', '999px', '1031px')}
						WandHSeconfLayer={adaptivePropsFunk('615px', '921px', '964px')}
						borderRadius={adaptivePropsFunk('88px', '105px', '135px')}
						colorTypeFirstLayer='Red60'
						colorTypeSeconfLayer='Red100'
					/>
				</div>
			</div>
			{/* Работа с изображениями */}
			<div className={styles.image}>
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
