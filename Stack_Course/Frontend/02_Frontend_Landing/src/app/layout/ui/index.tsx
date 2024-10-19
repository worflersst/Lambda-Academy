import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';

export const MainLayout = () => {
	return (
		<div className={styles.mainLayout}>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
