import {
	map1920,
	map375,
	Stars,
} from '@/shared/assets/home-page-picture/RegistrFormBlock';

import { FormRegistr } from '@/widgets/FormRegistr';
import styles from './index.module.scss';

export const RegistrFormBlock = () => {
	return (
		<div style={{ position: 'relative' }}>
			<div className={styles.section}>
				<div className={styles.sectionBgGray}>
					<div className={styles.sectionRotateWrapper}>
						<h2>Fill up the form and we’ll get in touch within a few hours</h2>

						<div className={styles.sectionContent}>
							<picture>
								<source media='(max-width: 375px)' srcSet={map375} />
								<img src={map1920} alt='Map image background' />
							</picture>
							<div className={styles.sectionContentForm}>
								<FormRegistr />
							</div>
						</div>
					</div>
				</div>
			</div>
			<img className={styles.StarsImage} src={Stars} alt='Stars image' />
		</div>
	);
};
