import { HomeContentBlock } from '@/widgets/home-page-blocks/ContentBlock';
import { FeaturedTabsBlock } from '@/widgets/home-page-blocks/FeaturedTabsBlock';
import { HowItWorkBlock } from '@/widgets/home-page-blocks/HowItWorkBlock';

export const HomePage = () => {
	return (
		<div>
			<HomeContentBlock />
			<HowItWorkBlock />
			<FeaturedTabsBlock />
		</div>
	);
};
