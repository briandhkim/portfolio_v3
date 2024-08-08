import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Heading from '../../../elements/Heading';
import DividerIcon from '../../../layout/DividerIcon';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';

const About = () => {
	return (
		<>
			<div>
				<Heading
					level='h2'
					className='hidden lg:block font-serif underline decoration-4 underline-offset-4 md:sticky md:top-24'
				>
					About
				</Heading>
				<Heading
					level='h2'
					size='small'
					className='lg:hidden font-serif underline decoration-2 underline-offset-4 md:sticky md:top-24'
				>
					About
				</Heading>
			</div>
			<div className='col-span-3 md:col-span-2'>
				<p className='font-mono'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Tincidunt nunc ipsum tempor purus vitae id. Morbi in
					vestibulum nec varius. Et diam cursus quis sed purus nam.
					Scelerisque amet elit non sit ut tincidunt condimentum. Nisl
					ultrices eu venenatis diam. Scelerisque amet elit non sit ut
					tincidunt condimentum. Nisi ultrices eu venenatis diam.
					Illum quaerat ab inventore, eveniet repudiandae saepe, iste
					sed molestias laborum atque, quos reprehenderit fugit cumo!
				</p>
			</div>
			<div className='col-span-3 mt-6 md:mt-8 lg:mt-10 mb-12 md:mb-14 lg:mb-16'>
				<DividerIcon
					icon={
						<FontAwesomeIcon
							icon={faIdCard}
							className='h-6 w-6 text-neutral-200'
						/>
					}
				/>
			</div>
		</>
	);
};

export default About;
