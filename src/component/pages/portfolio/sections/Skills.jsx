import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import SectionLayout from '../../../layout/SectionLayout';
import { skillListMap } from '../../../../util/constants';
import DividerTitleLeft from '../../../layout/DividerTitleLeft';
import SkillListItem from './partials/SkillListItem';

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
		<>
			<SectionLayout sectionTitle='Skills' dividerIcon={faToolbox}>
				<>
					<div className='space-y-10'>
						{Object.keys(skills).map(skillSection => (
							<div key={skillSection} className=''>
								<DividerTitleLeft title={skillSection} />
								<div className='mt-1 divide-y divide-dotted'>
									{Object.keys(skills[skillSection]).map(
										skill => {
											const subSkills =
												skills[skillSection][skill];
											const s = skillListMap.get(skill);

											return (
												<div
													key={s.name}
													className='py-2 grid grid-cols-2 font-mono'
												>
													<div className='content-center'>
														<SkillListItem
															icon={s.icon}
															name={s.name}
														/>
													</div>
													<div className='content-center space-y-1'>
														{subSkills.map(
															subSkill => {
																const ss =
																	skillListMap.get(
																		subSkill
																	);
																return (
																	<SkillListItem
																		key={
																			ss.name
																		}
																		icon={
																			ss.icon
																		}
																		name={
																			ss.name
																		}
																	/>
																);
															}
														)}
													</div>
												</div>
											);
										}
									)}
								</div>
							</div>
						))}
					</div>
				</>
			</SectionLayout>
		</>
	);
};

export default Skills;
