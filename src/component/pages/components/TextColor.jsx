import DividerTitleLeft from '../../layout/DividerTitleLeft';

const TextColor = () => {
    return (
        <>
            <DividerTitleLeft title='Text color' />
            <div className='mt-5 mb-10 *:mb-4'>
                <p>
                    The base text color is neutral-400{' '}
                    <div className='h-4 w-4 bg-neutral-400 inline-block mx-px'></div>
                    .
                </p>
                <p>
                    Here is a text with color{' '}
                    <span className='text-neutral-100'>color emphasis</span>,
                    which uses{' '}
                    <span className='text-neutral-200'>neutral-200</span> color{' '}
                    <div className='h-4 w-4 bg-neutral-100 inline-block mx-px'></div>
                    .
                </p>
            </div>
        </>
    );
};

export default TextColor;
