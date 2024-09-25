import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';

export const NavLinkModal = () => {
	return (
		<nav className={styles.linkMenu}>
			<ul className={styles.linkMenuList}>
				<li className={styles.linkMenuItem}>
					<NavLink
						to='/'
						className={({ isActive }) =>
							isActive
								? `${styles.link} ${styles.activeLink}`
								: `${styles.link}`
						}
					>
						Home
					</NavLink>
				</li>
				<li className={styles.linkMenuItem}>
					<NavLink
						to='/feature'
						className={({ isActive }) =>
							isActive
								? `${styles.link} ${styles.activeLink}`
								: `${styles.link}`
						}
					>
						Features
					</NavLink>
				</li>
				<li className={styles.linkMenuItem}>
					<NavLink
						to='/company'
						className={({ isActive }) =>
							isActive
								? `${styles.link} ${styles.activeLink}`
								: `${styles.link}`
						}
					>
						Company
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
