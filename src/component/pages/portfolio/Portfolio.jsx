import Navbar from './Navbar';

const Portfolio = () => {
    return (
        <>
            <Navbar />
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 '>
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className='mx-auto px-4 sm:px-6 lg:px-8 min-h-svh max-h-svh overflow-y-auto '>
                    <div className='grid grid-cols-3 auto-rows-min md:auto-rows-auto min-h-svh pt-16 '>
                        <div className='col-span-3 md:col-span-1 md:border-r-2 border-neutral-200 '>
                            <h1>col left</h1>
                        </div>
                        <div className='col-span-3 md:col-span-2 md:border-l-2 border-neutral-200 '>
                            <h1>col right</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
