import Logo from '@/shared/assets/Logo.svg';
import Tinvio from '@/shared/assets/Tinvio.svg';

import { BurgerButton } from '@/shared/ui/BurgerButton';
import { Button } from '@/shared/ui/Button';
import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher';
import { NavLinkHeader } from '@/shared/ui/NavLinkHeader';
import { Modal } from '@/widgets/Modal';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export const Header = () => {
	const [modalActive, setModalActive] = useState(false);
	const [scrolled, setScrolled] = useState<boolean>(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 15) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={`${styles.header} ${scrolled ? styles.scroll : ''} `}>
			<div className={styles.rootDiv}>
				<div className={styles.leftSection}>
					<div className={styles.logoWrapper}>
						<Link to='/' className={styles.logoMainWrapper}>
							<img
								src={Logo}
								alt='logo'
								loading='lazy'
								className={styles.logoMain}
							/>
						</Link>
						<Link to='/' className={styles.logoTextWrapper}>
							<img
								src={Tinvio}
								alt='logo'
								loading='lazy'
								className={styles.logoText}
							/>
						</Link>
					</div>
					<div
						className={
							modalActive
								? `${styles.switcher} `
								: `${styles.switcher} ${styles.hiddenMobile}`
						}
					>
						<LanguageSwitcher />
					</div>
				</div>
				<div className={`${styles.nawLinkMenu} ${styles.hiddenMobile}`}>
					<NavLinkHeader />
				</div>

				<div className={`${styles.button} ${styles.hiddenMobile}`}>
					<Button
						size='small'
						type='button'
						version={scrolled ? 'primary' : 'second'}
					>
						Get Started
					</Button>
				</div>
				<div
					className={`${styles.burger} ${styles.visibleMobile}`}
					onClick={() => setModalActive(!modalActive)}
				>
					<BurgerButton />
				</div>
			</div>
			<div className={` ${styles.visibleMobile}`}>
				<Modal active={modalActive} />
			</div>
		</header>
	);
};
