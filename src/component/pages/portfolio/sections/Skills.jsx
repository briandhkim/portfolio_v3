import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import SectionLayout from '../../../layout/SectionLayout';
import SkillSection from './partials/SkillSection';
import { useState } from 'react';

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

	const [showMore, setShowMore] = useState(false);

	const showMoreBtnHandler = () => {
		setShowMore(prev => !prev);
	};

	return (
		<SectionLayout sectionTitle='Skills' dividerIcon={faToolbox}>
			<>
				<div
					// className={`space-y-10 mb-4 ${!showMore ? 'overflow-y-hidden max-h-[410px] sm:max-h-[455px]' : ''} `}
					className={`mb-4 space-y-10`}
				>
					{Object.keys(skills).map(skillSection => (
						<div key={skillSection} className=''>
							<SkillSection
								skills={skills}
								skillSection={skillSection}
							/>
						</div>
					))}
				</div>
				{/* <div className='text-center md:text-left'>
					<SolidButton
						size='base'
						className='rounded'
						clickHandler={showMoreBtnHandler}
					>
						{showMore ? (
							<>
								Less <FontAwesomeIcon icon={faMinus} />
							</>
						) : (
							<>
								More <FontAwesomeIcon icon={faPlus} />
							</>
						)}
					</SolidButton>
				</div> */}
			</>
		</SectionLayout>
	);
};

export default Skills;
