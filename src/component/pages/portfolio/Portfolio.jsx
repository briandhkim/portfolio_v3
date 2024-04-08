import ColLeft from './ColLeft';
import ColRight from './ColRight';
import Navbar from './Navbar';

const Portfolio = () => {
    return (
        <div className=''>
            <Navbar />
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 '>
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                {/* May need to remove max-h-svh here */}
                <div className='mx-auto px-4 sm:px-6 lg:px-8  '>
                    <div className='grid grid-cols-3 auto-rows-min md:auto-rows-auto min-h-svh pt-16 '>
                        <ColLeft />
                        <ColRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
