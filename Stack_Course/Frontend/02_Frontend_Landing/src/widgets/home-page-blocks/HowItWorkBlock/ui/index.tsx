import ChatsStars from '@/shared/assets/home-page-picture/HowItWorkBlockChatsStars.svg';
import ChatsToOrderArrow from '@/shared/assets/home-page-picture/HowItWorkBlockChatsToOrderArrow.svg';
import Comment from '@/shared/assets/home-page-picture/HowItWorkBlockComment.svg';
import OrderStars from '@/shared/assets/home-page-picture/HowItWorkBlockOrdersStars.svg';
import ToDo from '@/shared/assets/home-page-picture/HowItWorkBlockOrderTo-DoRectangle.svg';
import OrderArrow from '@/shared/assets/home-page-picture/HowItWorkBlockOrderToPaymentsArrow.svg';
import Payments from '@/shared/assets/home-page-picture/HowItWorkBlockPaymentsPayRectangle.svg';
import ThreeStars from '@/shared/assets/home-page-picture/HowItWorkBlockPaymentsThreeStars.svg';
import TwoStars from '@/shared/assets/home-page-picture/HowItWorkBlockPaymentsTwoStars.svg';

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
								alt=''
								className={styles.sectionBlocksLeft3ImageThreeStars}
							/>
						</div>
					</div>
				</div>

				<div className={styles.sectionBlocksRight}> </div>
			</div>
		</div>
	);
};
