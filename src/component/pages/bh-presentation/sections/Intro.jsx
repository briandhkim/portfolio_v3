import { faAnglesDown, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Intro = ({ startHandler }) => {
	return (
		<div className='min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8'>
			<div className='text-center font-mono'>
				<div>Final round</div>
				<div className='mt-2'>
					<button
						className='w-full transition duration-300 hover:text-primary-500'
						onClick={startHandler}
					>
						<FontAwesomeIcon icon={faPlay} />
						<span className='sr-only'>scroll down</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Intro;
