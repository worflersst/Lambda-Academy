import { CompanyPage } from '@/pages/company-page';
import { FeaturePage } from '@/pages/feature-page';
import { HomePage } from '@/pages/home-page';
import { LegalInfoPage } from '@/pages/legal-info-page';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layout';

export const route = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: '/feature',
				element: <FeaturePage />,
			},
			{
				path: '/company',
				element: <CompanyPage />,
			},
			{
				path: '/legalInfo',
				element: <LegalInfoPage />,
			},
		],
	},
]);
