import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DividerTitleLeft from '../../layout/DividerTitleLeft';
// import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import GenericLink from '../../elements/GenericLink';

const TextColor = () => {
	return (
		<>
			<DividerTitleLeft title='Text color' />
			<div className='mb-10 mt-5 pl-5 *:mb-4 *:font-serif *:text-sm'>
				<p>
					The base text color is neutral-200{' '}
					<span className='mx-px inline-block h-5 w-5 bg-neutral-200'></span>
					.
				</p>
				<p>
					<span className='text-neutral-400'>Neutural-400</span>{' '}
					<span className='mx-px inline-block h-5 w-5 bg-neutral-400'></span>{' '}
					is used to{' '}
					<span className='text-neutral-400'>de-emphasize</span> items
					that should sit more in the background.
				</p>
				<p>
					<span className='text-primary-400'>Blue-400</span>{' '}
					<span className='mx-px inline-block h-5 w-5 bg-primary-400'></span>{' '}
					is used for text or decorations that use color emphasis.
				</p>
				<p>
					<GenericLink>Generic links</GenericLink> have{' '}
					<span className='underline decoration-primary-400 decoration-2'>
						underline
					</span>{' '}
					decoration and use{' '}
					<span className='text-primary-400'>blue-400</span>{' '}
					<span className='mx-px inline-block h-5 w-5 bg-primary-400'></span>{' '}
					for hover effect. Custom links that have branding
					association or have specific usage, such as{' '}
					<span className='cursor-pointer underline hover:text-red-500'>
						PDF document{' '}
						<FontAwesomeIcon className='ml-px' icon={faFilePdf} />
					</span>
					, may use custom colors.
				</p>
				<p>
					<span className='text-highlight-700'>Indigo-700</span>{' '}
					<span className='mx-px inline-block h-5 w-5 bg-highlight-700'></span>{' '}
					text along with{' '}
					<span className='text-highlight-300'>indigo-300</span>{' '}
					<span className='mx-px inline-block h-5 w-5 bg-highlight-300'></span>{' '}
					background are used for{' '}
					<span className='bg-highlight-300 text-highlight-700'>
						{' '}
						highlighted texts
					</span>
					.
				</p>
			</div>
		</>
	);
};

export default TextColor;
