const DividerIcon = ({ icon }) => {
    return (
        <div className='relative'>
            <div
                className='absolute inset-0 flex items-center'
                aria-hidden='true'
            >
                <div className='w-full border-t border-gray-300' />
            </div>
            <div className='relative flex justify-center'>
                <span className='bg-neutral-950 px-2 text-neutral-200'>
                    {icon}
                </span>
            </div>
        </div>
    );
};

export default DividerIcon;
