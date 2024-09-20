import { faAward } from '@fortawesome/free-solid-svg-icons';
import SectionLayout from '../../../layout/SectionLayout';
import Heading from '../../../elements/Heading';
import DividerTitleLeft from '../../../layout/DividerTitleLeft';
import AchievementExamples from './partials/AchievementExamples';

const Achievements = () => {
	return (
		<SectionLayout sectionTitle='Achievements' dividerIcon={faAward}>
			<div className='grid grid-cols-12 mx-0.5 sm:mx-4 space-y-8 sm:space-y-10'>
				<div className='col-span-12'>
					<div className='text-left '>
						<Heading level='h3' size='small'>
							Achievement / Badge
							<small className='block text-base sm:text-lg md:text-xl text-neutral-400'>
								Extension of "Goals"
							</small>
						</Heading>
					</div>
				</div>

				<div className='col-span-12 space-y-10 mb-4'>
					<div className=''>
						<DividerTitleLeft
							title='Examples'
							borderStyle='border-dotted'
							borderWidth='border-t-[3px]'
						/>
						<AchievementExamples />
					</div>
				</div>
			</div>
		</SectionLayout>
	);
};

export default Achievements;
