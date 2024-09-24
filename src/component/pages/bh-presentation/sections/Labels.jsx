import { faTags } from '@fortawesome/free-solid-svg-icons';
import SectionLayout from '../../../layout/SectionLayout';
import Heading from '../../../elements/Heading';
import DividerTitleLeft from '../../../layout/DividerTitleLeft';
import LabelExamples from './partials/LabelExamples';
import LabelFeatures from './partials/LabelFeatures';

const Labels = () => {
	return (
		<SectionLayout
			sectionTitle={'Labels'}
			dividerIcon={faTags}
			dividerBgColor='bg-[#325343]'
		>
			<div className='grid grid-cols-12 mx-0.5 sm:mx-4 space-y-8 sm:space-y-10'>
				<div className='col-span-12'>
					<div className='text-left '>
						<Heading level='h3' size='small'>
							Label / Tag
							<small className='block text-base sm:text-lg md:text-xl text-neutral-400'>
								Let's filter things
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
						<LabelExamples />
					</div>
					<div className='space-y-6'>
						<DividerTitleLeft
							title='User Story'
							borderStyle='border-dotted'
							borderWidth='border-t-[3px]'
							bgColor='bg-[#325343]'
						/>
						<div className='text-xs sm:text-sm mg:text-base font-mono'>
							<p>
								As a therapist, I would like the ability to
								filter my patients, so that I can more
								efficiently manage my patients.
							</p>
						</div>
					</div>
					<div className='space-y-6'>
						<DividerTitleLeft
							title='Features'
							borderStyle='border-dotted'
							borderWidth='border-t-[3px]'
							bgColor='bg-[#325343]'
						/>
						<LabelFeatures />
					</div>
				</div>
			</div>
		</SectionLayout>
	);
};

export default Labels;
