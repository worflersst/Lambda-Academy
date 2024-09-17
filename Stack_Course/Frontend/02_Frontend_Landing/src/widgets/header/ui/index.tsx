import Logo from '@/shared/assets/Logo.svg';
import Tinvio from '@/shared/assets/Tinvio.svg';

import { Button } from '@/shared/ui/Button';
import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher';
import { NavLinkMenu } from '@/shared/ui/NavLink';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export const Header = () => {
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
						<Link to='/'>
							<img src={Logo} alt='logo' loading='lazy' />
						</Link>
						<Link to='/' className={styles.logoText}>
							<img src={Tinvio} alt='logo' loading='lazy' />
						</Link>
					</div>
					<div className={styles.switcher}>
						<div>
							<LanguageSwitcher />
						</div>
					</div>
				</div>
				<div className={styles.nawLinkMenu}>
					<NavLinkMenu />
				</div>

				<div>
					<Button
						size='small'
						type='button'
						version={scrolled ? 'primary' : 'second'}
					>
						Get Started
					</Button>
				</div>
			</div>
		</header>
	);
};
