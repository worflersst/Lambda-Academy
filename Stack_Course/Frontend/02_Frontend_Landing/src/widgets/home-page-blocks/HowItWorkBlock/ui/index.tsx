import {
	ChatsStars,
	ChatsStars1024,
	ChatsToOrderArrow,
	ChatsToOrderArrow1024,
	Comment,
	Comment1024,
	OrderArrow,
	OrderArrow1024,
	OrderStars,
	OrderStars1024,
	Payments,
	Payments1024,
	PlayIcon,
	ThreeStars,
	ThreeStars1024,
	ToDo,
	ToDo1024,
	TwoStars,
	TwoStars1024,
} from '@/shared/assets/home-page-picture/HowItWorkBlock';
import RectangleGroupWhite from '@/shared/assets/home-page-picture/RectangleGroupWhite.svg';

import { useWindowSize } from '@/shared/hooks/useWindowSize/useWindowSize';
import { Button } from '@/shared/ui/Button';
import { Rectangle } from '@/shared/ui/Rectangle';
import styles from './index.module.scss';

export const HowItWorkBlock = () => {
	const { width } = useWindowSize();
	return (
		<div className={styles.section}>
			<div className={styles.sectionBlocks}>
				<div className={styles.sectionBlocksLeft}>
					<div className={styles.sectionBlocksLeft1}>
						<h5 className={styles.sectionBlocksLeft1Title}>Chats</h5>
						<p className={styles.sectionBlocksLeft1Text}>
							Connect to anyone in your supply chain and exchange messages
						</p>
						<div className={styles.sectionBlocksLeft1Image}>
							<picture className={styles.sectionBlocksLeft1ImageStars}>
								<source media='(max-width: 1024px)' srcSet={ChatsStars1024} />
								<img src={ChatsStars} alt='Stars image' />
							</picture>
							<picture className={styles.sectionBlocksLeft1ImageComment}>
								<source media='(max-width: 1024px)' srcSet={Comment1024} />
								<img src={Comment} alt='Comment image' />
							</picture>
							<picture className={styles.sectionBlocksLeft1ImageArrow}>
								<source
									media='(max-width: 1024px)'
									srcSet={ChatsToOrderArrow1024}
								/>
								<img src={ChatsToOrderArrow} alt='Arrow to order Image' />
							</picture>
						</div>
					</div>
					<div className={styles.sectionBlocksLeft2}>
						<h5 className={styles.sectionBlocksLeft2Title}>Orders</h5>
						<p className={styles.sectionBlocksLeft2Text}>
							Create or confirm purchase orders
							{width >= 1280 || width <= 1024
								? ' in just a few taps'
								: ' with tap of a button'}
						</p>
						<div className={styles.sectionBlocksLeft2Image}>
							<picture className={styles.sectionBlocksLeft2ImageStars}>
								<source media='(max-width: 1024px)' srcSet={OrderStars1024} />
								<img src={OrderStars} alt='Order Stars Image' />
							</picture>
							<picture className={styles.sectionBlocksLeft2ImageTodo}>
								<source media='(max-width: 1024px)' srcSet={ToDo1024} />
								<img src={ToDo} alt='ToDo Image' />
							</picture>
							<picture className={styles.sectionBlocksLeft2ImageArrow}>
								<source media='(max-width: 1024px)' srcSet={OrderArrow1024} />
								<img src={OrderArrow} alt='Order Arrow image' />
							</picture>
						</div>
					</div>
					<div className={styles.sectionBlocksLeft3}>
						<h5 className={styles.sectionBlocksLeft3Title}>Payments</h5>
						<p className={styles.sectionBlocksLeft3Text}>
							Send invoices and reconcile payments in one dashboard
						</p>
						<div className={styles.sectionBlocksLeft3Image}>
							<picture className={styles.sectionBlocksLeft3ImagePayments}>
								<source media='(max-width: 1024px)' srcSet={Payments1024} />
								<img src={Payments} alt='Payments rectangle Image' />
							</picture>
							<picture className={styles.sectionBlocksLeft3ImageTwoStars}>
								<source media='(max-width: 1024px)' srcSet={TwoStars1024} />
								<img src={TwoStars} alt='Two Stars Image' />
							</picture>
							<picture className={styles.sectionBlocksLeft3ImageThreeStars}>
								<source media='(max-width: 1024px)' srcSet={ThreeStars1024} />
								<img src={ThreeStars} alt='Three Stars Image' />
							</picture>
						</div>
					</div>
				</div>

				<div className={styles.sectionBlocksRight}>
					<div className={styles.sectionBlocksRightWrapper}>
						<div className={styles.sectionBlocksRightText}>
							<h2 className={styles.sectionBlocksRightTitle}>
								{width >= 1280 || width <= 1024
									? 'Check out how it works'
									: 'Tinvio in a heartbeat'}
							</h2>
							<p className={styles.sectionBlocksRightParagraf}>
								{width >= 1280 || width <= 1024
									? 'It’s easy! Exchange messages, create or confirm orders, send invoices, and collect payments across your supply chain — all within one dashboard.'
									: 'Exchange messages, create or confirm orders, send invoices, and collect payments across your supply chain — all within one dashboard.'}
							</p>
						</div>
						<div>
							<Button size='large' type='button' version='second'>
								<img src={PlayIcon} alt='Play icon' />
								Play Video
							</Button>
						</div>
					</div>
				</div>
			</div>
			{/* background work */}
			<div className={styles.background}>
				<div className={styles.backgroundGroup1}>
					<img
						src={RectangleGroupWhite}
						alt='RectangleGroupWhite'
						loading='lazy'
					/>
				</div>
				<div className={styles.backgroundGroup2}>
					<img
						src={RectangleGroupWhite}
						alt='RectangleGroupWhite'
						loading='lazy'
					/>
				</div>
				<div className={styles.backgroundRectangle}>
					<Rectangle
						borderRadius='77px'
						colorType='Ghost20'
						widthAndHeight='496px'
					/>
				</div>
			</div>
		</div>
	);
};
