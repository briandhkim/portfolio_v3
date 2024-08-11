import { skillListMap } from '../../../../../util/constants';
import DividerTitleLeft from '../../../../layout/DividerTitleLeft';
import SkillListItem from './SkillListItem';

const SkillSection = ({ skills, skillSection }) => {
	return (
		<>
			<DividerTitleLeft title={skillSection} />
			<div className='mt-1 divide-y divide-dotted divide-neutral-400'>
				{Object.keys(skills[skillSection]).map(skill => {
					const subSkills = skills[skillSection][skill];
					const s = skillListMap.get(skill);

					return (
						<div
							key={s.name}
							className='py-2 grid grid-cols-2 font-mono'
						>
							<div className='content-center'>
								<SkillListItem icon={s.icon} name={s.name} />
							</div>
							<div className='content-center space-y-1'>
								{subSkills.map(subSkill => {
									const ss = skillListMap.get(subSkill);
									return (
										<SkillListItem
											key={ss.name}
											icon={ss.icon}
											name={ss.name}
										/>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default SkillSection;
