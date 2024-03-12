import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DividerTitleLeft from '../../layout/DividerTitleLeft';
// import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

const TextColor = () => {
    return (
        <>
            <DividerTitleLeft title='Text color' />
            <div className='mt-5 mb-10 *:mb-4 *:font-serif *:text-sm'>
                <p>
                    The base text color is neutral-200{' '}
                    <span className='h-5 w-5 bg-neutral-200 inline-block mx-px'></span>
                    .
                </p>
                <p>
                    <span className='text-neutral-400'>Neutural-400</span>{' '}
                    <span className='h-5 w-5 bg-neutral-400 inline-block mx-px'></span>{' '}
                    is used to{' '}
                    <span className='text-neutral-400'>de-emphasize</span> items
                    that should sit more in the background.
                </p>
                <p>
                    <span className='underline hover:text-blue-400 cursor-pointer'>
                        Generic links
                    </span>{' '}
                    have <span className='underline'>underline</span> decoration
                    and use <span className='text-blue-400'>blue-400</span>{' '}
                    <span className='h-5 w-5 bg-blue-500 inline-block mx-px'></span>{' '}
                    for hover effect. Custom links that have branding
                    association or have specific usage, such as{' '}
                    <span className='underline hover:text-red-500 cursor-pointer'>
                        PDF document{' '}
                        <FontAwesomeIcon className='ml-px' icon={faFilePdf} />
                    </span>
                    , may use custom colors.
                </p>
                <p>
                    <span className='text-indigo-700'>Indigo-700</span>{' '}
                    <span className='h-5 w-5 bg-indigo-700 inline-block mx-px'></span>{' '}
                    text along with{' '}
                    <span className='text-indigo-300'>indigo-300</span>{' '}
                    <span className='h-5 w-5 bg-indigo-300 inline-block mx-px'></span>{' '}
                    background are used for{' '}
                    <span className='bg-indigo-300 text-indigo-700'>
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
