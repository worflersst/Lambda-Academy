import { ImgLinksBlock } from '@/shared/ui/ImgLinksBlock';
import { NavLinkModal } from '@/shared/ui/NavLinkModal';
import { Button } from '../../../shared/ui/Button';
import styles from './index.module.scss';

export const Modal = ({ active }) => {
	return (
		<div
			className={
				active ? `${styles.modal} ${styles.modalActive}` : ` ${styles.modal} `
			}
		>
			<div className={styles.modalContent}>
				<NavLinkModal />
				<div className={`${styles.hiddenMobileSmall}`}>
					<Button type='button' version='primary'>
						Get Started
					</Button>
				</div>
				<div className={`${styles.hiddenMobileSmall}`}>
					<ImgLinksBlock />
				</div>
			</div>
		</div>
	);
};
