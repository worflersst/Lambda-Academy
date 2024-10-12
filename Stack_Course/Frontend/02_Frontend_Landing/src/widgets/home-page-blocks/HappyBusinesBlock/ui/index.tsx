import { DoubleRectangle } from '@/shared/ui/DoubleRectangle';
import styles from './index.module.scss';

import {
	BBS,
	ES_TECH,
	GIRL,
	GONG_CHA,
	GROUP,
	MEN,
	NAYLA,
	NEX,
	PET_SHOP,
	Smile,
	TK,
} from '@/shared/assets/home-page-picture/HappyBusinesBlock';
import RectangleGroup from '@/shared/assets/home-page-picture/RectangleGroupWhiteGray.png';
import { Rectangle } from '@/shared/ui/Rectangle';

export const HappyBusinesBlock = () => {
	return (
		<div className={styles.section}>
			<div className={styles.content}>
				<h2 className={styles.contentTitle}>
					We’ll put a smile on your supply chain
				</h2>
				<div className={styles.contentGroup}>
					<div className={styles.contentGroupWrapper}>
						{/* Главный элемент */}
						<div className={styles.contentGroupMain}>
							<Rectangle
								borderRadius='25px'
								widthAndHeight='400px'
								colorType='Red30'
								pulsation='maxPulseAnimate'
							/>
							<Rectangle
								widthAndHeight='309px'
								borderRadius='25px'
								colorType='Red40'
								pulsation='normalPulseAnimate'
							/>
							<DoubleRectangle
								WandHFirstLayer='260px'
								WandHSeconfLayer='260px'
								borderRadius='25px'
								colorTypeFirstLayer='Red40'
								colorTypeSeconfLayer='Red100'
							>
								<div className={styles.contentGroupMainWrapper}>
									<p className={styles.contentGroupMainText}>
										5000+ <br /> happy businesses
									</p>
									<img src={Smile} alt='Smile svg' />
								</div>
							</DoubleRectangle>
						</div>
						{/* Левая часть */}
						<div className={styles.contentGroup1}>
							<div className={styles.contentGroup1Medium}>
								<DoubleRectangle
									WandHFirstLayer='134px'
									WandHSeconfLayer='100px'
									borderRadius='12px'
									colorTypeFirstLayer='Ghost50'
									colorTypeSeconfLayer='Ghost80'
								>
									<img src={BBS} alt='BBS logo image' />
								</DoubleRectangle>
								<DoubleRectangle
									WandHFirstLayer='134px'
									WandHSeconfLayer='100px'
									borderRadius='12px'
									colorTypeFirstLayer='Ghost50'
									colorTypeSeconfLayer='Ghost80'
								>
									<img src={NEX} alt='BBS logo image' />
								</DoubleRectangle>
							</div>
							<div className={styles.contentGroup1Min}>
								<DoubleRectangle
									WandHFirstLayer='134px'
									WandHSeconfLayer='100px'
									borderRadius='12px'
									colorTypeFirstLayer='Ghost50'
									colorTypeSeconfLayer='Ghost80'
								>
									<img src={PET_SHOP} alt='BBS logo image' />
								</DoubleRectangle>
							</div>
							<div className={styles.contentGroup1Max}>
								<DoubleRectangle
									WandHFirstLayer='134px'
									WandHSeconfLayer='100px'
									borderRadius='12px'
									colorTypeFirstLayer='Ghost50'
									colorTypeSeconfLayer='Ghost80'
								>
									<img src={TK} alt='BBS logo image' />
								</DoubleRectangle>
								<DoubleRectangle
									WandHFirstLayer='134px'
									WandHSeconfLayer='100px'
									borderRadius='12px'
									colorTypeFirstLayer='Ghost50'
									colorTypeSeconfLayer='Ghost80'
								>
									<img src={NAYLA} alt='BBS logo image' />
								</DoubleRectangle>
							</div>
						</div>
						{/* Правая часть  */}
						<div className={styles.contentGroup2}>
							<div className={styles.contentGroup2Max}>
								<DoubleRectangle
									WandHFirstLayer='134px'
									WandHSeconfLayer='100px'
									borderRadius='12px'
									colorTypeFirstLayer='Ghost50'
									colorTypeSeconfLayer='Ghost80'
								>
									<img src={GROUP} alt='BBS logo image' />
								</DoubleRectangle>
								<DoubleRectangle
									WandHFirstLayer='134px'
									WandHSeconfLayer='100px'
									borderRadius='12px'
									colorTypeFirstLayer='Ghost50'
									colorTypeSeconfLayer='Ghost80'
								>
									<img src={MEN} alt='BBS logo image' />
								</DoubleRectangle>
							</div>
							<div className={styles.contentGroup2Min}>
								<DoubleRectangle
									WandHFirstLayer='134px'
									WandHSeconfLayer='100px'
									borderRadius='12px'
									colorTypeFirstLayer='Ghost50'
									colorTypeSeconfLayer='Ghost80'
								>
									<img src={GIRL} alt='BBS logo image' />
								</DoubleRectangle>
							</div>
							<div className={styles.contentGroup2Medium}>
								<DoubleRectangle
									WandHFirstLayer='134px'
									WandHSeconfLayer='100px'
									borderRadius='12px'
									colorTypeFirstLayer='Ghost50'
									colorTypeSeconfLayer='Ghost80'
								>
									<img src={GONG_CHA} alt='BBS logo image' />
								</DoubleRectangle>
								<DoubleRectangle
									WandHFirstLayer='134px'
									WandHSeconfLayer='100px'
									borderRadius='12px'
									colorTypeFirstLayer='Ghost50'
									colorTypeSeconfLayer='Ghost80'
								>
									<img src={ES_TECH} alt='BBS logo image' />
								</DoubleRectangle>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Работа с бг */}
			<div className={styles.sectionBg}>
				<div className={styles.sectionBgLRectangleTop}>
					<Rectangle
						colorType='Ghost80'
						widthAndHeight='554px'
						borderRadius='51px'
					/>
				</div>
				<div className={styles.sectionBgLRectangleMid}>
					<Rectangle
						colorType='Ghost15'
						widthAndHeight='554px'
						borderRadius='51px'
					/>
				</div>
				<div className={styles.sectionBgLRectangleGroupMid}>
					<img src={RectangleGroup} alt='Rectangle Group Gray image' />
				</div>
				<div className={styles.sectionBgLRectangleGroupBottom}>
					<img src={RectangleGroup} alt='Rectangle Group Gray image' />
				</div>
				<div className={styles.sectionBgRRectangleGroupTop}>
					<img src={RectangleGroup} alt='Rectangle Group Gray image' />
				</div>
				<div className={styles.sectionBgRRectangleMid}>
					<Rectangle
						colorType='Ghost15'
						widthAndHeight='457px'
						borderRadius='42px'
					/>
				</div>
			</div>
		</div>
	);
};
