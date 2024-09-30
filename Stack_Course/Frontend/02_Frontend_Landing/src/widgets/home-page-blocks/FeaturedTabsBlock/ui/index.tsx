import { Button } from '@/shared/ui/Button';
import { ThreeTabs } from '@/shared/ui/ThreeTabs';
import styles from './index.module.scss';

export const FeaturedTabsBlock = () => {
	return (
		<div className={styles.main}>
			<div className={styles.leftBlock}>
				<ThreeTabs />

				<Button size='medium' type='button' version='primary'>
					More Features
				</Button>
			</div>
			<div className={styles.rightBlock}></div>
		</div>
	);
};
