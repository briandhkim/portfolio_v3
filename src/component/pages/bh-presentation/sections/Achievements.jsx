import { faAward } from '@fortawesome/free-solid-svg-icons';
import SectionLayout from '../../../layout/SectionLayout';
import Heading from '../../../elements/Heading';
import DividerTitleLeft from '../../../layout/DividerTitleLeft';
import AchievementExamples from './partials/AchievementExamples';
import AchievementFeatures from './partials/AchievementFeatures';
import AchievementWhy from './partials/AchievementWhy';

const Achievements = () => {
	return (
		<SectionLayout
			sectionTitle='Achievements'
			dividerIcon={faAward}
			dividerBgColor='bg-[#325343]'
		>
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
							bgColor='bg-[#325343]'
						/>
						<AchievementExamples />
					</div>
					<div className='space-y-6'>
						<DividerTitleLeft
							title='Features'
							borderStyle='border-dotted'
							borderWidth='border-t-[3px]'
							bgColor='bg-[#325343]'
						/>
						<AchievementFeatures />
					</div>
					<div className='space-y-6'>
						<DividerTitleLeft
							title='Value'
							borderStyle='border-dotted'
							borderWidth='border-t-[3px]'
							bgColor='bg-[#325343]'
						/>
						<AchievementWhy />
					</div>
				</div>
			</div>
		</SectionLayout>
	);
};

export default Achievements;
