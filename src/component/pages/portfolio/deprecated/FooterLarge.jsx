import ReactIcon from '../../../icons/ReactIcon';
import TailwindIcon from '../../../icons/TailwindIcon';

const FooterLarge = () => {
	return (
		<div className='flex flex-wrap justify-evenly items-center min-h-32'>
			<div>
				Made with &#8192;
				<div className='h-6 w-6 inline-flex' title='React'>
					<span className='sr-only'>React</span>
					<ReactIcon />
				</div>
				&#8192;&&#8192;
				<div className='h-6 w-6 inline-flex' title='TailwindCSS'>
					<span className='sr-only'>TailwindCSS</span>
					<TailwindIcon />
				</div>
			</div>
			<div>&copy; {new Date().getFullYear()} | Dong Hyun Kim</div>
		</div>
	);
};

export default FooterLarge;
