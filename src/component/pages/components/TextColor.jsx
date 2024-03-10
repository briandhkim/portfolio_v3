import DividerTitleLeft from '../../layout/DividerTitleLeft';

const TextColor = () => {
    return (
        <>
            <DividerTitleLeft title='Text color' />
            <div className='mt-5 mb-10 *:mb-4'>
                <p>
                    The base text color is neutral-400{' '}
                    <span className='h-5 w-5 bg-neutral-400 inline-block mx-px'></span>
                    .
                </p>
                <p>
                    Texts with{' '}
                    <span className='text-neutral-100'>color emphasis</span>,
                    use <span className='text-neutral-100'>neutral-100</span>{' '}
                    <span className='h-5 w-5 bg-neutral-100 inline-block mx-px'></span>
                    .
                </p>
                <p>
                    <span className='text-neutral-100 underline hover:text-neutral-300'>Links</span>{' '}
                    use <span className='text-neutral-100'>neutral-100</span>{' '}
                    <span className='h-5 w-5 bg-neutral-100 inline-block mx-px'></span>{' '}
                    color along with{' '}
                    <span className='underline'>underline</span> decoration and
                    use <span className='text-neutral-300'>neutral-300</span>{' '}
                    <span className='h-5 w-5 bg-neutral-300 inline-block mx-px'></span>{' '}
                    for hover effect.
                </p>
            </div>
        </>
    );
};

export default TextColor;
