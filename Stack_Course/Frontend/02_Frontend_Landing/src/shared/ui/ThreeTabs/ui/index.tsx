import styles from './index.module.scss';

export const ThreeTabs = ({ tabs, isTab, setIsTab }) => {
	const handleTabs = (id: number) => {
		const selectedTab = tabs.find(tab => tab.id === id);
		if (selectedTab) setIsTab(selectedTab);
	};
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>
				Smarter supply chain transactions.
				<span
					key={isTab.title}
					className={`${styles.titleText} ${styles[isTab.title]}`}
				>
					More {isTab.title}
				</span>
			</h2>
			<div className={styles.buttons}>
				{tabs.map((tab, index) => (
					<button
						key={tab.id}
						className={`${styles[`buttonsNum${index + 1}`]} ${
							isTab.id === tab.id ? styles.buttonsActive : ''
						}`}
						onClick={() => handleTabs(tab.id)}
					>
						{tab.buttonText}
					</button>
				))}
			</div>
			<ul className={styles.list}>
				{isTab.features.map((str, index) => (
					<li className={styles.listItem} key={index}>
						{str}
					</li>
				))}
			</ul>
		</div>
	);
};
