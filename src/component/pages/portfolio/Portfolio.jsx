import Navbar from './Navbar';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import SocialSticky from './sections/SocialSticky';

const Portfolio = () => {
    return (
        <div className=''>
            <Navbar />
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 '>
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                {/* May need to remove max-h-svh here */}
                <div className='mx-auto px-4 sm:px-6 lg:px-8 relative'>
                    <section className='hidden md:grid md:grid-cols-3 gap-4 fixed bottom-0 z-10'>
                        <div>
                            <SocialSticky />
                        </div>
                    </section>
                    <section className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-12 md:pt-32 mb-16 md:mb-40'>
                        <About />
                    </section>
                    <section className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 md:mb-40'>
                        <Experience />
                    </section>
                    <section className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 md:mb-40'>
                        <Skills />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
