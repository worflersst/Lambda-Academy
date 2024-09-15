import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/header';
import styles from './index.module.scss';

export const MainLayout = () => {
	return (
		<div className={styles.mainLayout}>
			<Header />
			<main>
				<Outlet />
			</main>
			<footer>footer</footer>
		</div>
	);
};
