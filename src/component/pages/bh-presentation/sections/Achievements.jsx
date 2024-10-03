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
			<div className='mx-0.5 grid grid-cols-12 space-y-8 sm:mx-4 sm:space-y-10'>
				<div className='col-span-12'>
					<div className='text-left'>
						<Heading level='h3' size='small'>
							Achievement / Badge
							<small className='block text-base text-neutral-400 sm:text-lg md:text-xl'>
								Extension of "Goals"
							</small>
						</Heading>
					</div>
				</div>

				<div className='col-span-12 mb-4 space-y-10'>
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
