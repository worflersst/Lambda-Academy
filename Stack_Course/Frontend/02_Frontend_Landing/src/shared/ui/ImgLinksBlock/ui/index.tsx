import AppStore from '@/shared/assets/AppStore.svg';
import GooglePlay from '@/shared/assets/GooglePlay.svg';
import Instagram from '@/shared/assets/Instagram.svg';
import LinkedIn from '@/shared/assets/LinkedIn.svg';

import styles from './index.module.scss';

export const ImgLinksBlock = () => {
	return (
		<div className={styles.imgLinkWrapper}>
			<div className={styles.leftBlock}>
				<a
					className={styles.sizeAnimateSmallBlock}
					href='https://sg.linkedin.com/company/tinvio'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img src={LinkedIn} alt='LinkedIn link image' />
				</a>
				<a
					className={styles.sizeAnimateSmallBlock}
					href='https://www.instagram.com/tinvioapp/?hl=en'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img src={Instagram} alt='Instagram link image' />
				</a>
			</div>
			<span className={styles.spanLine}></span>
			<div className={styles.rightBlock}>
				<a
					className={styles.sizeAnimateLargeBlock}
					href='https://play.google.com/store/apps/details?id=com.tinvio.tinvio&hl=en&gl=US'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img src={GooglePlay} alt='GooglePlay link image' />
				</a>
				<a
					className={styles.sizeAnimateLargeBlock}
					href='https://apps.apple.com/sg/app/tinvio/id1472428382'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img src={AppStore} alt='AppStore link image' />
				</a>
			</div>
		</div>
	);
};
