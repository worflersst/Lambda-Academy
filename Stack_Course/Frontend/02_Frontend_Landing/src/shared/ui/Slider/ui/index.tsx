import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import { SliderData } from './data';
import styles from './index.module.scss';

register();

export const Slider = () => {
	const swiperRef = useRef(null);

	useEffect(() => {
		const swiperContainer = swiperRef.current;
		const params = {
			navigation: true,
			pagination: {
				clickable: true,
			},
			spaceBetween: 20,
			speed: 500,
			injectStyles: [
				`
				.swiper-button-next,
				.swiper-button-prev {
					width: 40px;
					height: 40px;
					border-radius: 8px;
					position: absolute;
					color: var(--color-bg-white);
					background-color: hsla(0, 0%, 82%, 1);
				}
				.swiper-button-next {
					left: 120px;
					top: 285px;
				}
				.swiper-button-prev {
					left: 56px;
					top: 285px;
				}

				.swiper-button-next svg,
				.swiper-button-prev svg {
					width: 20px;
					height: 17px;
				}

				.swiper-pagination {
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 10px;
				}


				.swiper-pagination-bullet {
					width: 12px;
					height: 12px;
					border-radius: 2px;
					transform: rotate(45deg); 
					background: rgba(255, 255, 255, 0.4);
					transition: background-color 0.3s, opacity 0.3s;
				}
				
				.swiper-pagination-bullet-active {
					opacity: 1;
					background-color: #FFFFFF;
				}

				@media (max-width: 768px) {
					.swiper-button-next,
					.swiper-button-prev {
						display: none;
					}
				}
      `,
			],
		};

		Object.assign(swiperContainer, params);
		swiperContainer.initialize();
	}, []);

	return (
		<div className={styles.switcher}>
			<h2 className={styles.switcherTitle}>Why choose Tinvio?</h2>

			<swiper-container ref={swiperRef} init='false'>
				{SliderData.map(slide => (
					<swiper-slide key={slide.id}>
						<div className={styles.slidesWrapper}>
							<div className={styles.slides}>
								<div
									className={`${styles.slidesBg} ${
										styles[slide.textBgWidthClass]
									}`}
								>
									<p className={styles.slidesBgText}>{slide.sliderText}</p>
								</div>
								<div className={styles.slidesMainImages}>
									<div
										className={`${styles.slidesMainImagesI} ${
											styles[slide.mainImageClass]
										}`}
									>
										{slide.mainImage}
									</div>
									<div
										className={`${styles.slidesMainImagesS} ${
											styles[slide.starsImageClass]
										}`}
									>
										{slide.starsImage}
									</div>
								</div>
								<div className={styles.slidesLogo}>
									{slide.logoImage}
									<div className={styles.slidesLogoWrap}>
										<p className={styles.slidesLogoWrapTitle}>
											{slide.logoText.title}
										</p>
										<p className={styles.slidesLogoWrapText}>
											{slide.logoText.text}
										</p>
									</div>
								</div>
							</div>
						</div>
					</swiper-slide>
				))}
			</swiper-container>
		</div>
	);
};
