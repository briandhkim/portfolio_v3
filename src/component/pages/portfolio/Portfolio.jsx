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

	const sections = [
		{
			id: 'about',
			component: <About />,
			ref: aboutRef,
			class: 'pt-12 md:pt-32',
		},
		{
			id: 'experience',
			component: <Experience />,
			ref: null,
			class: '',
		},
		{
			id: 'skills',
			component: <Skills />,
			ref: null,
			class: '',
		},
		{
			id: 'contact',
			component: <Contact />,
			ref: null,
			class: '',
		},
	];

	return (
		<div className=''>
			<div className='mx-auto max-w-5xl px-2 sm:px-6 lg:px-8'>
				{showNavbar && <Navbar />}
				<div className=''>
					{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
					{/* May need to remove max-h-svh here */}
					<div className='relative mx-auto px-4 sm:px-6 lg:px-8'>
						<Landing />
						<div className='mb-8 sm:mb-10 md:mb-14'>
							{sections.map(section => (
								<section
									key={section.id}
									className={`grid grid-cols-1 gap-4 md:grid-cols-3 ${section.class}`}
									ref={section.ref}
									id={section.id}
								>
									{section.component}
								</section>
							))}
						</div>
						<Footer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
