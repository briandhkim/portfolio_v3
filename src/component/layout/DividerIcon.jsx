const DividerIcon = ({
    borderColor = 'border-neutral-400',
    textColor = 'text-neutral-200',
    icon,
}) => {
    return (
        <div className='relative'>
            <div
                className='absolute inset-0 flex items-center'
                aria-hidden='true'
            >
                <div className={`w-full border-t ${borderColor}`} />
            </div>
            <div className='relative flex justify-center'>
                <span className={`bg-neutral-950 px-2 ${textColor}`}>
                    {icon}
                </span>
            </div>
        </div>
    );
};

export default DividerIcon;
