import {
	ChatsStars,
	ChatsToOrderArrow,
	Comment,
	OrderArrow,
	OrderStars,
	Payments,
	PlayIcon,
	ThreeStars,
	ToDo,
	TwoStars,
} from '@/shared/assets/home-page-picture/HowItWorkBlock';
import RectangleGroupWhite from '@/shared/assets/home-page-picture/RectangleGroupWhite.svg';

import { Button } from '@/shared/ui/Button';
import { Rectangle } from '@/shared/ui/Rectangle';
import styles from './index.module.scss';

export const HowItWorkBlock = () => {
	return (
		<div className={styles.section}>
			<div className={styles.sectionBlocks}>
				<div className={styles.sectionBlocksLeft}>
					<div className={styles.sectionBlocksLeft1}>
						<h5 className={styles.sectionBlocksLeft1Title}>Chats</h5>
						<p className={styles.sectionBlocksLeft1Text}>
							Connect to anyone in your supply chain and exchange messages{' '}
						</p>
						<div className={styles.sectionBlocksLeft1Image}>
							<img
								src={ChatsStars}
								alt='Stars image'
								className={styles.sectionBlocksLeft1ImageStars}
							/>
							<img
								src={Comment}
								alt='Comment image'
								className={styles.sectionBlocksLeft1ImageComment}
							/>
							<img
								src={ChatsToOrderArrow}
								alt='Arrow to order Image'
								className={styles.sectionBlocksLeft1ImageArrow}
							/>
						</div>
					</div>
					<div className={styles.sectionBlocksLeft2}>
						<h5 className={styles.sectionBlocksLeft2Title}>Orders</h5>
						<p className={styles.sectionBlocksLeft2Text}>
							Create or confirm purchase orders with tap of a button
						</p>
						<div className={styles.sectionBlocksLeft2Image}>
							<img
								src={OrderStars}
								alt='Order Stars Image'
								className={styles.sectionBlocksLeft2ImageStars}
							/>
							<img
								src={ToDo}
								alt='ToDo Image'
								className={styles.sectionBlocksLeft2ImageTodo}
							/>
							<img
								src={OrderArrow}
								alt='Order Arrow image'
								className={styles.sectionBlocksLeft2ImageArrow}
							/>
						</div>
					</div>
					<div className={styles.sectionBlocksLeft3}>
						<h5 className={styles.sectionBlocksLeft3Title}>Payments</h5>
						<p className={styles.sectionBlocksLeft3Text}>
							Send invoices and reconcile payments in one dashboard
						</p>
						<div className={styles.sectionBlocksLeft3Image}>
							<img
								src={Payments}
								alt='Payments rectangle Image'
								className={styles.sectionBlocksLeft3ImagePayments}
							/>
							<img
								src={TwoStars}
								alt='Two Stars Image'
								className={styles.sectionBlocksLeft3ImageTwoStars}
							/>
							<img
								src={ThreeStars}
								alt='Three Stars Image'
								className={styles.sectionBlocksLeft3ImageThreeStars}
							/>
						</div>
					</div>
				</div>

				<div className={styles.sectionBlocksRight}>
					<div className={styles.sectionBlocksRightWrapper}>
						<div className={styles.sectionBlocksRightText}>
							<h2 className={styles.sectionBlocksRightTitle}>
								Check out how it works
							</h2>
							<p className={styles.sectionBlocksRightParagraf}>
								It’s easy! Exchange messages, create or confirm orders, send
								invoices, and collect payments across your supply chain — all
								within one dashboard.
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
