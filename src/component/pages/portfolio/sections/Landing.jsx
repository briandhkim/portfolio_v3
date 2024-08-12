import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { scroller } from 'react-scroll';

const Landing = () => {
	const scrollDown = () => {
		scroller.scrollTo('about', {
			duration: 1000,
			smooth: 'easeInOutQuart',
			isDynamic: true,
		});
	};

	return (
		<div className='min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8'>
			<div className='text-center font-mono'>
				<div className=''>hello there</div>
				<div className=''>how are you</div>
				<div className='mt-1'>
					<button className='w-full' onClick={scrollDown}>
						<FontAwesomeIcon icon={faAnglesDown} />
						<span className='sr-only'>scroll down</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Landing;
