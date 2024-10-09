import {
	Slide1,
	Slide2,
	Slide3,
	Slide4,
} from '@/shared/assets/home-page-picture/WhyShooseBlock/Images';
import {
	Logo1,
	Logo2,
	Logo3,
	Logo4,
} from '@/shared/assets/home-page-picture/WhyShooseBlock/Logo';
import {
	Stars1,
	Stars2,
	Stars3,
	Stars4,
} from '@/shared/assets/home-page-picture/WhyShooseBlock/Stars';

export const SliderData = [
	{
		id: 1,
		sliderText:
			'Tinvio definitely helps to reduce the time and errors in order management between customers and suppliers. It’s super easy to use and available on mobile and web, and the team are friendly and always helpful.',
		mainImage: <img src={Slide1} alt='Main Image 1' />,
		logoImage: <img src={Logo1} alt='Logo Image 1' />,
		starsImage: <img src={Stars1} alt='Stars Image 1' />,
		logoText: {
			title: 'Fathira Dida',
			text: 'Owner (Baker Old).',
		},
	},
	{
		id: 2,
		sliderText:
			"Tinvio helps our business run smoother. We can manage our customer's orders, receivables, and most importantly, trace and reconcile their payments without checking banking apps or statements.",
		mainImage: <img src={Slide2} alt='Main Image 2' />,
		logoImage: <img src={Logo2} alt='Logo Image 2' />,
		starsImage: <img src={Stars2} alt='Stars Image 2' />,
		logoText: {
			title: 'Punnasiri Chaipatikul',
			text: 'Business Development Manager (Phaitong Station)',
		},
	},
	{
		id: 3,
		sliderText:
			"With Tinvio, it's easier for my customers to make payments across various methods. Every payment is also collected in one business account where funds can be withdrawn instantly at any time.",
		mainImage: <img src={Slide3} alt='Main Image 3' />,
		logoImage: <img src={Logo3} alt='Logo Image 3' />,
		starsImage: <img src={Stars3} alt='Stars Image 3' />,
		logoText: {
			title: 'Pauline Limgenco',
			text: 'Director (Moonleaf)',
		},
	},
	{
		id: 4,
		sliderText:
			'Tinvio has been a foundational partner and solution. We now have faster and more efficient communication with our clients, which makes order processing and deliveries smoother than ever before.',
		mainImage: <img src={Slide4} alt='Main Image 4' />,
		logoImage: <img src={Logo4} alt='Logo Image 4' />,
		starsImage: <img src={Stars4} alt='Stars Image 4' />,
		logoText: {
			title: 'Hafidz & Indah',
			text: 'Owners (Sejadah Grocery)',
		},
	},
];
