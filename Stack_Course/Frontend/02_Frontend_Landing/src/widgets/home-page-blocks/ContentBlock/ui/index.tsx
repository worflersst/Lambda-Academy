import DesktopImage from '@/shared/assets/home-page-picture/ContentBlockDesktopImage.svg';
import MobileImage from '@/shared/assets/home-page-picture/ContentBlockMobileImage.svg';
import Stars from '@/shared/assets/home-page-picture/ContentBlockStars.svg';
import Emoji from '@/shared/assets/home-page-picture/HomeEmoji.svg';
import RectangleGroupWhite from '@/shared/assets/home-page-picture/RectangleGroupWhite.svg';
import { Button } from '@/shared/ui/Button';
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
				<div className={styles.rectangleRight1}>
					<Rectangle
						colorType='Red60'
						widthAndHeight='1031px'
						borderRadius='135px'
					/>
				</div>
				<div className={styles.rectangleRight2}>
					<Rectangle
						colorType='Red100'
						widthAndHeight='964px'
						borderRadius='125px'
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
