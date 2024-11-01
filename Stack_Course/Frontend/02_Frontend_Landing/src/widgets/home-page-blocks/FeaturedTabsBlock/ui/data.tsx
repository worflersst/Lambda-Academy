import { FeaturedTabsBlockImage } from '@/shared/assets/home-page-picture/FeatureTabsBlock';

export const tabs = [
	{
		id: 1,
		title: 'buddy',
		buttonText: 'Chats',
		features: [
			'Create chats with any business (even if they’re not on Tinvio)',
			'Fully integrated with your favorite chat apps',
			'Real-time messages and alerts',
		],
		img1: <img src={FeaturedTabsBlockImage.ChatsPhone1} alt='Buddy Phone 1' />,
		img2: <img src={FeaturedTabsBlockImage.ChatsPhone2} alt='Buddy Phone 2' />,
	},
	{
		id: 2,
		title: 'speedy',
		buttonText: 'Orders',
		features: [
			'Create or confirm purchase orders at lightning speed',
			'Manage inventory details and availability in real-time',
			'24/7 order insights and data reports',
		],
		img1: <img src={FeaturedTabsBlockImage.OrderPhone1} alt='Speedy Phone 1' />,
		img2: <img src={FeaturedTabsBlockImage.OrderPhone2} alt='Speedy Phone 2' />,
	},
	{
		id: 3,
		title: 'money',
		buttonText: 'Payments',
		features: [
			'Send invoices and easily track them until they’re paid',
			'Real-time payments settlement and reconciliation',
			'Safe, secure, and compliant',
		],
		img1: (
			<img src={FeaturedTabsBlockImage.PaymentsPhone1} alt='Money Phone 1' />
		),
		img2: (
			<img src={FeaturedTabsBlockImage.PaymentsPhone2} alt='Money Phone 2' />
		),
	},
];
