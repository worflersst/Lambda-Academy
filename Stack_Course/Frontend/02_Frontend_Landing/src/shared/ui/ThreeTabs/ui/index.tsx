import styles from './index.module.scss';

export const ThreeTabs = ({ tabs, isTab, setIsTab }) => {
	const handleTabs = (index: number) => {
		return setIsTab(tabs[index]);
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
				<button
					className={`${styles.buttonsNum1} ${
						isTab.id === 1 ? styles.buttonsActive : ''
					}`}
					onClick={() => handleTabs(0)}
				>
					Chats
				</button>
				<button
					className={`${styles.buttonsNum1} ${
						isTab.id === 2 ? styles.buttonsActive : ''
					}`}
					onClick={() => handleTabs(1)}
				>
					Orders
				</button>
				<button
					className={`${styles.buttonsNum3} ${
						isTab.id === 3 ? styles.buttonsActive : ''
					}`}
					onClick={() => handleTabs(2)}
				>
					Payments
				</button>
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

// нужно добавить анимации, на спан в тайтле , картинки в правом блоке. Так же перелопатить элемент кнопки чтобы можно чтобы пропсами передавать настройку текста. И типизировать этот компонент и табы в родительском.
