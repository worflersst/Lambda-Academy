import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';

export const MainLayout = () => {
	return (
		<div className={styles.mainLayout}>
			<header>header</header>
			<Outlet />
			<footer>footer</footer>
		</div>
	);
};
