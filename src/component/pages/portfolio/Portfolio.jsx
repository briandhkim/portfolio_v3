import { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import About from './sections/About';
import Experience from './sections/Experience';
import Landing from './sections/Landing';
import Skills from './sections/Skills';
import { useOnScreen } from '../../../hooks/useOnScreen';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const Portfolio = () => {
	/**
	 * TODO: add calendly link to contacts
	 */

	const [showNavbar, setShowNavbar] = useState(false);

	const aboutRef = useRef(null);
	const aboutIsOnScreen = useOnScreen(aboutRef, 0.75);
	useEffect(() => {
		if (aboutIsOnScreen && !showNavbar) {
			setShowNavbar(true);
		}
	}, [aboutIsOnScreen]);

	return (
		<div className=''>
			<div className='mx-auto max-w-5xl px-2 sm:px-6 lg:px-8'>
				{showNavbar && <Navbar />}
				<div className=''>
					{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
					{/* May need to remove max-h-svh here */}
					<div className='mx-auto px-4 sm:px-6 lg:px-8 relative'>
						{/* <section className='hidden md:grid md:grid-cols-3 gap-4 fixed bottom-0 z-10'>
							<SocialSticky />
						</section> */}
						<Landing />
						<div className='mb-8 sm:mb-10 md:mb-14'>
							<section
								className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-12 md:pt-32'
								ref={aboutRef}
								id='about'
							>
								<About />
							</section>
							<section
								className='grid grid-cols-1 md:grid-cols-3 gap-4 '
								id='experience'
							>
								<Experience />
							</section>
							<section
								className='grid grid-cols-1 md:grid-cols-3 gap-4 '
								id='skills'
							>
								<Skills />
							</section>
							<section
								className='grid grid-cols-1 md:grid-cols-3 gap-4'
								id='contact'
							>
								<Contact />
							</section>
						</div>
						<Footer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
