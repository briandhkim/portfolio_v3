import Heading from '../elements/Heading';
import DividerIcon from './DividerIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SectionLayout = ({
	children,
	sectionTitle,
	dividerIcon = null,
	dividerBgColor = 'bg-neutral-950',
}) => {
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
			<div className='col-span-3 mb-6 sm:mb-0 md:col-span-2'>
				{children}
			</div>
			{dividerIcon && (
				<div className='col-span-3 mb-12 md:mb-14 md:mt-8 lg:mb-16 lg:mt-10'>
					<DividerIcon
						dividerBgColor={dividerBgColor}
						icon={
							<FontAwesomeIcon
								icon={dividerIcon}
								className='h-6 w-6 text-neutral-200'
							/>
						}
					/>
				</div>
			)}
		</>
	);
};

export default SectionLayout;
