import { HowItWorkImages } from '@/shared/assets/home-page-picture/HowItWorkBlock';
import RectangleGroupWhite from '@/shared/assets/home-page-picture/RectangleGroupWhite.svg';

import { adaptivePropsFunk } from '@/shared/funk/adaptivePropsFunk/adaptivePropsFunk';
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
								<source
									media='(max-width: 375px)'
									srcSet={HowItWorkImages.ChatsStars375}
								/>
								<source
									media='(max-width: 1024px)'
									srcSet={HowItWorkImages.ChatsStars1024}
								/>
								<img src={HowItWorkImages.ChatsStars} alt='Stars image' />
							</picture>
							<picture className={styles.sectionBlocksLeft1ImageComment}>
								<source
									media='(max-width: 375px)'
									srcSet={HowItWorkImages.Comment375}
								/>
								<source
									media='(max-width: 1024px)'
									srcSet={HowItWorkImages.Comment1024}
								/>
								<img src={HowItWorkImages.Comment} alt='Comment image' />
							</picture>
							<picture className={styles.sectionBlocksLeft1ImageArrow}>
								<source
									media='(max-width: 375px)'
									srcSet={HowItWorkImages.ChatsToOrderArrow375}
								/>
								<source
									media='(max-width: 1024px)'
									srcSet={HowItWorkImages.ChatsToOrderArrow1024}
								/>
								<img
									src={HowItWorkImages.ChatsToOrderArrow}
									alt='Arrow to order Image'
								/>
							</picture>
						</div>
					</div>
					<div className={styles.sectionBlocksLeft2}>
						<h5 className={styles.sectionBlocksLeft2Title}>Orders</h5>
						<p className={styles.sectionBlocksLeft2Text}>
							Create or confirm purchase orders
							{width >= 1280 || (width <= 1024 && width >= 769)
								? ' in just a few taps'
								: ' with tap of a button'}
						</p>
						<div className={styles.sectionBlocksLeft2Image}>
							<picture className={styles.sectionBlocksLeft2ImageStars}>
								<source
									media='(max-width: 375px)'
									srcSet={HowItWorkImages.OrderStars375}
								/>
								<source
									media='(max-width: 1024px)'
									srcSet={HowItWorkImages.OrderStars1024}
								/>
								<img src={HowItWorkImages.OrderStars} alt='Order Stars Image' />
							</picture>
							<picture className={styles.sectionBlocksLeft2ImageTodo}>
								<source
									media='(max-width: 375px)'
									srcSet={HowItWorkImages.ToDo375}
								/>
								<source
									media='(max-width: 1024px)'
									srcSet={HowItWorkImages.ToDo1024}
								/>
								<img src={HowItWorkImages.ToDo} alt='ToDo Image' />
							</picture>
							<picture className={styles.sectionBlocksLeft2ImageArrow}>
								<source
									media='(max-width: 375px)'
									srcSet={HowItWorkImages.OrderArrow375}
								/>
								<source
									media='(max-width: 1024px)'
									srcSet={HowItWorkImages.OrderArrow1024}
								/>
								<img src={HowItWorkImages.OrderArrow} alt='Order Arrow image' />
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
								<source
									media='(max-width: 375px)'
									srcSet={HowItWorkImages.Payments375}
								/>
								<source
									media='(max-width: 1024px)'
									srcSet={HowItWorkImages.Payments1024}
								/>
								<img
									src={HowItWorkImages.Payments}
									alt='Payments rectangle Image'
								/>
							</picture>
							<picture className={styles.sectionBlocksLeft3ImageTwoStars}>
								<source
									media='(max-width: 375px)'
									srcSet={HowItWorkImages.TwoStars375}
								/>
								<source
									media='(max-width: 1024px)'
									srcSet={HowItWorkImages.TwoStars1024}
								/>
								<img src={HowItWorkImages.TwoStars} alt='Two Stars Image' />
							</picture>
							<picture className={styles.sectionBlocksLeft3ImageThreeStars}>
								<source
									media='(max-width: 375px)'
									srcSet={HowItWorkImages.ThreeStars375}
								/>
								<source
									media='(max-width: 1024px)'
									srcSet={HowItWorkImages.ThreeStars1024}
								/>
								<img src={HowItWorkImages.ThreeStars} alt='Three Stars Image' />
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
								<img src={HowItWorkImages.PlayIcon} alt='Play icon' />
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
						widthAndHeight={adaptivePropsFunk('496px', '408px', '408px')}
					/>
				</div>
			</div>
		</div>
	);
};
