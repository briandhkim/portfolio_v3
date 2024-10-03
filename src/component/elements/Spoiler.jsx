import { useState } from 'react';

const Spoiler = props => {
	const { text = '', className = '' } = props;

	const [showSpoiler, setShowSpoiler] = useState(false);

	const placeholder = new Array(text.length).join(' \xa0');

	return (
		<div className={` ${className}`}>
			{!showSpoiler && (
				<span
					className='cursor-pointer bg-neutral-200'
					onClick={() => setShowSpoiler(true)}
					title='Click to show text'
				>
					<span className='sr-only'>Click to show text</span>
					{placeholder}
				</span>
			)}
			{showSpoiler && <span>{text}</span>}
		</div>
	);
};

export default Spoiler;
