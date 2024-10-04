import { HomeContentBlock } from '@/widgets/home-page-blocks/ContentBlock';
import { FeatureOnBlock } from '@/widgets/home-page-blocks/FeaturedOnBlock';
import { FeaturedTabsBlock } from '@/widgets/home-page-blocks/FeaturedTabsBlock';
import { HowItWorkBlock } from '@/widgets/home-page-blocks/HowItWorkBlock';

export const HomePage = () => {
	return (
		<div>
			<HomeContentBlock />
			<HowItWorkBlock />
			<FeaturedTabsBlock />
			<FeatureOnBlock />
		</div>
	);
};
