import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import SectionLayout from '../../../layout/SectionLayout';

const About = () => {
	return (
		<>
			<SectionLayout sectionTitle='About' dividerIcon={faIdCard}>
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
			</SectionLayout>
		</>
	);
};

export default About;
