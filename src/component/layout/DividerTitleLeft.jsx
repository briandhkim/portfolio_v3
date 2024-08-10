const DividerTitleLeft = ({
	title = '',
	borderColor = 'border-neutral-400',
	borderStyle = '',
	borderWidth = 'border-t',
	textColor = 'text-neutral-200',
}) => {
	return (
		<div className='relative'>
			<div
				className='absolute inset-0 flex items-center'
				aria-hidden='true'
			>
				<div
					className={`w-full  ${borderColor} ${borderStyle} ${borderWidth}`}
				/>
			</div>
			<div className='relative flex justify-start'>
				<span
					className={`bg-neutral-950 pr-3 text-base font-semibold leading-6 ${textColor}`}
				>
					{title}
				</span>
			</div>
		</div>
	);
};

export default DividerTitleLeft;
