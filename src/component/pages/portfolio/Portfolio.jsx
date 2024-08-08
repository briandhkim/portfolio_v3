import Navbar from './Navbar';
import About from './sections/About';
import Experience from './sections/Experience';
import Landing from './sections/Landing';
import Skills from './sections/Skills';
import SocialSticky from './sections/SocialSticky';

const Portfolio = () => {
	return (
		<div className=''>
			<div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
				<Navbar />
				<div className=''>
					{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
					{/* May need to remove max-h-svh here */}
					<div className='mx-auto px-4 sm:px-6 lg:px-8 relative'>
						{/* <section className='hidden md:grid md:grid-cols-3 gap-4 fixed bottom-0 z-10'>
							<SocialSticky />
						</section> */}
						<Landing />
						<section className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-12 md:pt-32 '>
							<About />
						</section>
						<section className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
							<Experience />
						</section>
						<section className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
							<Skills />
						</section>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
