import { useState } from 'react';
import styles from './index.module.scss';

const tabs = [
	{
		id: 1,
		title: 'Buddy',
		features: [
			'Create chats with any business (even if they’re not on Tinvio)',
			'Fully integrated with your favorite chat apps',
			'Real-time messages and alerts',
		],
	},
	{
		id: 2,
		title: 'Speedy',
		features: [
			'Create or confirm purchase orders at lightning speed',
			'Manage inventory details and availability in real-time',
			'24/7 order insights and data reports',
		],
	},
	{
		id: 3,
		title: 'Money',
		features: [
			'Send invoices and easily track them until they’re paid',
			'Real-time payments settlement and reconciliation',
			'Safe, secure, and compliant',
		],
	},
];

export const ThreeTabs = () => {
	const [isTab, setIsTab] = useState(tabs[0]);
	const handleTabs = (index: number) => {
		setIsTab(tabs[index]);
	};
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>
				Smarter supply chain transactions.
				<span className={styles.titleText}>More {isTab.title}</span>
			</h2>
			<div className={styles.buttons}>
				<button
					className={`${styles.buttonsNum1} ${
						isTab === tabs[0] ? styles.buttonsActive : ''
					}`}
					onClick={() => handleTabs(0)}
				>
					Chats
				</button>
				<button
					className={`${styles.buttonsNum1} ${
						isTab === tabs[1] ? styles.buttonsActive : ''
					}`}
					onClick={() => handleTabs(1)}
				>
					Orders
				</button>
				<button
					className={`${styles.buttonsNum1} ${
						isTab === tabs[2] ? styles.buttonsActive : ''
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
