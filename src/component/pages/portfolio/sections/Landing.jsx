import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import FadeInSpan from '../../components/FadeInSpan';

const Landing = () => {
	const fade = {
		groupOne: {
			delay: 0,
			duration: 1.1,
		},
		groupTwo: {
			delay: 1.1,
			duration: 1.1,
		},
		groupThree: {
			delay: 2,
			duration: 1,
		},
		groupFour: {
			delay: 4.3,
			duration: 1.9,
		},
	};

	const [startAnimation, setStartAnimation] = useState(false);
	const [showAnimation, setShowAnimation] = useState(true);

	const animationEndCallback = () => {
		setShowAnimation(false);
	};

	useEffect(() => {
		if (!startAnimation) {
			setStartAnimation(true);
		}
	}, []);

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
				<div className=''>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupOne}
					>
						hello there
					</FadeInSpan>
				</div>
				<div className=''>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupTwo}
					>
						how are you
					</FadeInSpan>
				</div>
				<div className='mt-1'>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupThree}
						triggerAnimationEnd={true}
						animationEndCallback={animationEndCallback}
					>
						<button className='w-full' onClick={scrollDown}>
							<FontAwesomeIcon icon={faAnglesDown} />
							<span className='sr-only'>scroll down</span>
						</button>
					</FadeInSpan>
				</div>
			</div>
		</div>
	);
};

export default Landing;
