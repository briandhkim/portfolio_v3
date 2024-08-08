import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import SectionLayout from '../../../layout/SectionLayout';

const Skills = () => {
	return (
		<>
			<SectionLayout sectionTitle='Skills' dividerIcon={faToolbox}>
				<p className='font-mono'>some skill section stuff here</p>
			</SectionLayout>
		</>
	);
};

export default Skills;
