import DividerTitleLeft from '../../layout/DividerTitleLeft';

const FontWeight = () => {
    return (
        <>
            <DividerTitleLeft title='Font weight' />
            <div className='mt-5 mb-10 *:mb-4 *:font-serif *:text-sm'>
                <p>
                    <code>{'`<strong>`'}</code> tag is used to add{' '}
                    <strong className='font-extrabold text-neutral-50'>
                        emphasis
                    </strong>{' '}
                    to specific words within texts along with{' '}
                    <strong className='font-extrabold text-neutral-50'>
                        neutral-50
                    </strong>{' '}
                    color{' '}
                    <span className='h-5 w-5 bg-neutral-50 inline-block mx-px'></span>
                    .
                </p>
            </div>
        </>
    );
};

export default FontWeight;
