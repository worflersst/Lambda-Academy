import styles from './index.module.scss';

export const TabsImage = ({ isTab }) => {
	return (
		<div key={isTab.id} className={styles.section}>
			<div className={styles.sectionImg1}>{isTab.img1}</div>
			<div className={styles.sectionImg2}>{isTab.img2}</div>
		</div>
	);
};
