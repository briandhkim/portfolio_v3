import Heading from '../elements/Heading';
import DividerIcon from './DividerIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SectionLayout = ({ children, sectionTitle, dividerIcon }) => {
	return (
		<>
			<div>
				<Heading
					level='h2'
					size='small'
					className='font-serif underline decoration-4 underline-offset-4 md:sticky md:top-24'
				>
					{sectionTitle}
				</Heading>
			</div>
			<div className='col-span-3 md:col-span-2'>{children}</div>
			<div className='col-span-3 md:mt-8 lg:mt-10 mb-12 md:mb-14 lg:mb-16'>
				<DividerIcon
					icon={
						<FontAwesomeIcon
							icon={dividerIcon}
							className='h-6 w-6 text-neutral-200'
						/>
					}
				/>
			</div>
		</>
	);
};

export default SectionLayout;
