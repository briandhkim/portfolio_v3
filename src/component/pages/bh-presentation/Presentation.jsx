import Achievements from './sections/Achievements';
import Intro from './sections/Intro';
import Labels from './sections/Labels';
import UiUpdate from './sections/UiUpdate';

const Presentation = () => {
	return (
		<div className='bg-[#325343]'>
			<div className='mx-auto max-w-5xl px-2 sm:px-6 lg:px-8'>
				<div className=''>
					{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
					{/* May need to remove max-h-svh here */}
					<div className='mx-auto px-4 sm:px-6 lg:px-8 relative'>
						<Intro />
						<div className='pb-8 sm:pb-10 md:pb-14'>
							<section className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-12 md:pt-32'>
								<UiUpdate />
							</section>
							<section className='grid grid-cols-1 md:grid-cols-3 gap-4'>
								<Achievements />
							</section>
							<section className='grid grid-cols-1 md:grid-cols-3 gap-4'>
								<Labels />
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Presentation;
