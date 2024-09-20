import Achievements from './sections/Achievements';
import Intro from './sections/Intro';
import UiUpdate from './sections/UiUpdate';

const Presentation = () => {
	return (
		<div className=''>
			<div className='mx-auto max-w-5xl px-2 sm:px-6 lg:px-8'>
				<div className=''>
					{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
					{/* May need to remove max-h-svh here */}
					<div className='mx-auto px-4 sm:px-6 lg:px-8 relative'>
						<Intro />
						<div className='mb-8 sm:mb-10 md:mb-14'>
							<section className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-12 md:pt-32'>
								<UiUpdate />
							</section>
							<section className='grid grid-cols-1 md:grid-cols-3 gap-4'>
								<Achievements />
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Presentation;
