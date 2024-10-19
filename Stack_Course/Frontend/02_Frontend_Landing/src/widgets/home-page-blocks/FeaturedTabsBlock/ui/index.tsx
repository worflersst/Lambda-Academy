import {
	ChatsPhone1,
	ChatsPhone2,
	OrderPhone1,
	OrderPhone2,
	PaymentsPhone1,
	PaymentsPhone2,
	Stars,
} from '@/shared/assets/home-page-picture/FeatureTabsBlock';
import RectangleGroupWhite from '@/shared/assets/home-page-picture/RectangleGroupWhite.svg';

import { Button } from '@/shared/ui/Button';
import { DoubleRectangle } from '@/shared/ui/DoubleRectangle';
import { Rectangle } from '@/shared/ui/Rectangle';
import { TabsImage } from '@/shared/ui/TabsImg';
import { ThreeTabs } from '@/shared/ui/ThreeTabs';
import { useState } from 'react';
import styles from './index.module.scss';

export const FeaturedTabsBlock = () => {
	const tabs = [
		{
			id: 1,
			title: 'Buddy',
			features: [
				'Create chats with any business (even if they’re not on Tinvio)',
				'Fully integrated with your favorite chat apps',
				'Real-time messages and alerts',
			],
			img1: <img src={ChatsPhone1} alt='Buddy Phone 1' />,
			img2: <img src={ChatsPhone2} alt='Buddy Phone 2' />,
		},
		{
			id: 2,
			title: 'Speedy',
			features: [
				'Create or confirm purchase orders at lightning speed',
				'Manage inventory details and availability in real-time',
				'24/7 order insights and data reports',
			],
			img1: <img src={OrderPhone1} alt='Speedy Phone 1' />,
			img2: <img src={OrderPhone2} alt='Speedy Phone 2' />,
		},
		{
			id: 3,
			title: 'Money',
			features: [
				'Send invoices and easily track them until they’re paid',
				'Real-time payments settlement and reconciliation',
				'Safe, secure, and compliant',
			],
			img1: <img src={PaymentsPhone1} alt='Money Phone 1' />,
			img2: <img src={PaymentsPhone2} alt='Money Phone 2' />,
		},
	];

	const [isTab, setIsTab] = useState(tabs[0]);

	return (
		<div className={styles.main}>
			<div className={styles.leftBlock}>
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
					<img src={Stars} alt='Stars Image' />
				</div>
				<div className={styles.rightBlockImgRectangleGroup}>
					<img src={RectangleGroupWhite} alt='Rectangle Group White image' />
				</div>
			</div>
		</div>
	);
};
