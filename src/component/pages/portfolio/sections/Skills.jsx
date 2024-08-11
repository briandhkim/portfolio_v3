import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import SectionLayout from '../../../layout/SectionLayout';
import SkillSection from './partials/SkillSection';

const Skills = () => {
	const skills = {
		'Language & Frameworks': {
			HTML: [],
			CSS: ['Bootstrap', 'Tailwind CSS', 'Materialize CSS'],
			JavaScript: ['jQuery', 'React', 'Next.js', 'Vue.js'],
			PHP: ['Laravel'],
			Ruby: ['Rails'],
		},
		Database: {
			MySQL: [],
			PostgreSQL: [],
		},
		'Dev tools': {
			Git: ['GitHub', 'BitBucket'],
			Bamboo: [],
			Docker: [],
			Postman: [],
			'New Relic': [],
			'axe DevTools': [],
			'Chrome DevTools': [],
		},
		'Productivity tools': {
			Jira: [],
			Confluence: [],
		},
	};

	return (
		<SectionLayout sectionTitle='Skills' dividerIcon={faToolbox}>
			<>
				<div className='space-y-10'>
					{Object.keys(skills).map(skillSection => (
						<div key={skillSection} className=''>
							<SkillSection
								skills={skills}
								skillSection={skillSection}
							/>
						</div>
					))}
				</div>
			</>
		</SectionLayout>
	);
};

export default Skills;
