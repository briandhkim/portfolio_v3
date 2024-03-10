const DividerTitleLeft = ({ title = '' }) => {
    return (
        <div className='relative'>
            <div
                className='absolute inset-0 flex items-center'
                aria-hidden='true'
            >
                <div className='w-full border-t border-neutral-200' />
            </div>
            <div className='relative flex justify-start'>
                <span className='bg-neutral-950 pr-3 text-base font-semibold leading-6 text-neutral-200'>
                    {title}
                </span>
            </div>
        </div>
    );
};

export default DividerTitleLeft;
