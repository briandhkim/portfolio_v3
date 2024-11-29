import { skillListMap } from '../../../../../util/constants';
import DividerTitleLeft from '../../../../layout/DividerTitleLeft';
import SkillListItem from './SkillListItem';
import useAnimateOnScreen from '../../../../../hooks/useAnimateOnScreen';
import { motion } from 'framer-motion';

const SkillSection = ({ skills, skillSection }) => {
	const descContainer = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				duration: 0.65,
				staggerChildren: 0.5,
			},
		},
	};

	const descContainerSubSkill = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				duration: 1.5,
				staggerChildren: 0.7,
			},
		},
	};

	const descItem = {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { ease: 'easeIn' } },
	};

	const [showSection, sectionRef] = useAnimateOnScreen();

	return (
		<>
			<DividerTitleLeft title={skillSection} />
			<div ref={sectionRef}>
				{showSection && (
					<motion.div
						variants={descContainer}
						initial='hidden'
						animate='show'
						// className={`${showSection ? 'animate-fade_in_slower' : 'opacity-0'} mt-1 divide-y divide-dotted divide-neutral-400`}
						className={`mt-1 divide-y divide-dotted divide-neutral-400`}
					>
						{Object.keys(skills[skillSection]).map(skill => {
							const subSkills = skills[skillSection][skill];
							const s = skillListMap.get(skill);

							return (
								<motion.div
									key={s.name}
									variants={descItem}
									className='grid grid-cols-2 py-2 font-mono'
								>
									<div className='content-center'>
										<SkillListItem
											icon={s.icon}
											name={s.name}
										/>
									</div>
									<motion.div
										variants={descContainerSubSkill}
										initial='hidden'
										animate='show'
										className='content-center space-y-1'
									>
										{subSkills.map(subSkill => {
											const ss =
												skillListMap.get(subSkill);
											return (
												<motion.span
													key={ss.name}
													variants={descItem}
												>
													<SkillListItem
														icon={ss.icon}
														name={ss.name}
													/>
												</motion.span>
											);
										})}
									</motion.div>
								</motion.div>
							);
						})}
					</motion.div>
				)}
			</div>
		</>
	);
};

export default SkillSection;
