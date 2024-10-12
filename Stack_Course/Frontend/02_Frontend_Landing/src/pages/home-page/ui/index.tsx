import { HomeContentBlock } from '@/widgets/home-page-blocks/ContentBlock';
import { FeatureOnBlock } from '@/widgets/home-page-blocks/FeaturedOnBlock';
import { FeaturedTabsBlock } from '@/widgets/home-page-blocks/FeaturedTabsBlock';
import { HappyBusinesBlock } from '@/widgets/home-page-blocks/HappyBusinesBlock/ui';
import { HowItWorkBlock } from '@/widgets/home-page-blocks/HowItWorkBlock';
import { WhyShooseBlock } from '@/widgets/home-page-blocks/WhyShooseBlock';

export const HomePage = () => {
	return (
		<div>
			<HomeContentBlock />
			<HowItWorkBlock />
			<FeaturedTabsBlock />
			<FeatureOnBlock />
			<WhyShooseBlock />
			<HappyBusinesBlock />
		</div>
	);
};
