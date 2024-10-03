import { faTags } from '@fortawesome/free-solid-svg-icons';
import SectionLayout from '../../../layout/SectionLayout';
import Heading from '../../../elements/Heading';
import DividerTitleLeft from '../../../layout/DividerTitleLeft';
import LabelExamples from './partials/LabelExamples';
import LabelFeatures from './partials/LabelFeatures';
import LabelValues from './partials/LabelValues';

const Labels = () => {
	return (
		<SectionLayout
			sectionTitle={'Labels'}
			dividerIcon={faTags}
			dividerBgColor='bg-[#325343]'
		>
			<div className='mx-0.5 grid grid-cols-12 space-y-8 sm:mx-4 sm:space-y-10'>
				<div className='col-span-12'>
					<div className='text-left'>
						<Heading level='h3' size='small'>
							Label / Tag
							<small className='block text-base text-neutral-400 sm:text-lg md:text-xl'>
								Let's filter things
							</small>
						</Heading>
					</div>
				</div>
				<div className='col-span-12 mb-4 space-y-10'>
					<div className='space-y-6'>
						<DividerTitleLeft
							title='User Story'
							borderStyle='border-dotted'
							borderWidth='border-t-[3px]'
							bgColor='bg-[#325343]'
						/>
						<div className='mg:text-base font-mono text-xs sm:text-sm'>
							<p>
								As a therapist, I would like the ability to
								filter my patients, so that I can more
								efficiently manage my patients.
							</p>
						</div>
					</div>
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
							title='Features'
							borderStyle='border-dotted'
							borderWidth='border-t-[3px]'
							bgColor='bg-[#325343]'
						/>
						<LabelFeatures />
					</div>
					<div className='space-y-6'>
						<DividerTitleLeft
							title='Value'
							borderStyle='border-dotted'
							borderWidth='border-t-[3px]'
							bgColor='bg-[#325343]'
						/>
						<LabelValues />
					</div>
				</div>
			</div>
		</SectionLayout>
	);
};

export default Labels;
