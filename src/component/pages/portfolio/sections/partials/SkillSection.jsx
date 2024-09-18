import { useEffect, useRef, useState } from 'react';
import { useOnScreen } from '../../../../../hooks/useOnScreen';
import { skillListMap } from '../../../../../util/constants';
import DividerTitleLeft from '../../../../layout/DividerTitleLeft';
import SkillListItem from './SkillListItem';

const SkillSection = ({ skills, skillSection }) => {
	const [showSection, setShowSection] = useState(false);

	const sectionRef = useRef(null);
	const sectionIsOnScreen = useOnScreen(sectionRef, 0.55);

	useEffect(() => {
		if (sectionIsOnScreen && !showSection) {
			setShowSection(true);
		}
	}, [sectionIsOnScreen]);

	return (
		<>
			<DividerTitleLeft title={skillSection} />
			<div
				className={`${showSection ? 'animate-fade_in_slower' : 'opacity-0'} mt-1 divide-y divide-dotted divide-neutral-400`}
				ref={sectionRef}
			>
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
