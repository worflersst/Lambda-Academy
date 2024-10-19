import Logo from '@/shared/assets/Logo.svg';
import Tinvio from '@/shared/assets/Tinvio.svg';
import { ImgLinksBlock } from '@/shared/ui/ImgLinksBlock';
import { NavLinkFooter } from '@/shared/ui/NavLinkFooter/ui';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerWrapper}>
				<div className={styles.footerTop}>
					<div className={styles.footerTopLeft}>
						<div className={styles.footerTopLogo}>
							<Link to='/'>
								<img
									src={Logo}
									alt='Logo image'
									width={44}
									height={38}
									loading='lazy'
								/>
							</Link>
							<Link to='/'>
								<img
									src={Tinvio}
									alt='Tinvio image'
									width={60}
									height={19}
									loading='lazy'
								/>
							</Link>
						</div>
						<span className={styles.footerLine}></span>
						<NavLinkFooter />
					</div>
					{/* Right */}
					<div>
						<ImgLinksBlock />
					</div>
				</div>
				<div className={styles.footerBottom}>
					<Link to='/privacy'>© Tinvio™ 2020. All Rights Reserved</Link>
					<span className={styles.footerLine}></span>
					<Link to='/privacy'>Privacy Policy</Link>
					<span className={styles.footerLine}></span>
					<Link to='/privacy'>Terms of Service</Link>
				</div>
			</div>
		</footer>
	);
};
