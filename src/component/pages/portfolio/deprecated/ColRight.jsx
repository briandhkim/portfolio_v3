import About from './About';
import Experience from './Experience';

const ColRight = () => {
	return (
		<div className='colRight col-span-3 md:col-span-2 md:border-l-2 md:border-r-4 border-neutral-200 p-4 md:max-h-[95vh] md:overflow-y-auto'>
			<About />
			<Experience />
			{/**
			 * about
			 * experience
			 * skills
			 * contact
			 */}
		</div>
	);
};

export default ColRight;
