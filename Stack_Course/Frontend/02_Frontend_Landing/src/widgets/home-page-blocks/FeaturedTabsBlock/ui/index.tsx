import { Button } from '@/shared/ui/Button';
import { Rectangle } from '@/shared/ui/Rectangle';
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
			<div className={styles.rightBlock}>
				<div className={styles.rightBlockNum1}>
					<Rectangle
						widthAndHeight='560px'
						colorType='Red60'
						borderRadius='72px'
					/>
				</div>
				<div className={styles.rightBlockNum2}>
					<Rectangle
						widthAndHeight='490px'
						colorType='Red100'
						borderRadius='72px'
					/>
				</div>
			</div>
		</div>
	);
};
