import { faHospital } from '@fortawesome/free-regular-svg-icons';
import {
	faBarsProgress,
	faBook,
	faChartSimple,
	faHeadSideVirus,
	faListCheck,
	faPersonRunning,
	faUserDoctor,
	faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import useAnimateOnScreen from '../../../../../hooks/useAnimateOnScreen';

const AchievementWhy = () => {
	const descContainer = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				duration: 1.5,
				staggerChildren: 0.5,
			},
		},
	};

	const descItem = {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { ease: 'easeIn' } },
	};

	const [showSection, sectionRef] = useAnimateOnScreen();

	return (
		<div
			className='text-xs sm:text-sm mg:text-base font-mono'
			ref={sectionRef}
		>
			{showSection && (
				<motion.ul
					variants={descContainer}
					initial='hidden'
					animate='show'
					className='fa-ul space-y-5'
				>
					<motion.li variants={descItem} className=''>
						<span className='fa-li text-neutral-400'>
							<FontAwesomeIcon icon={faHeadSideVirus} />
						</span>
						For the client:
						<motion.ul
							variants={descContainer}
							initial='hidden'
							animate='show'
							className='fa-ul mt-2'
						>
							<motion.li variants={descItem} className=''>
								<span className='fa-li text-neutral-400'>
									<FontAwesomeIcon icon={faPersonRunning} />
								</span>
								Source of motivation
							</motion.li>
							<motion.li variants={descItem} className=''>
								<span className='fa-li text-neutral-400'>
									<FontAwesomeIcon icon={faListCheck} />
								</span>
								Alternative, and potentially easier, goals to
								work towards
							</motion.li>
						</motion.ul>
					</motion.li>
					<motion.li variants={descItem} className=''>
						<span className='fa-li text-neutral-400'>
							<FontAwesomeIcon icon={faUserDoctor} />
						</span>
						For the therapist:
						<motion.ul
							variants={descContainer}
							initial='hidden'
							animate='show'
							className='fa-ul mt-2'
						>
							<motion.li variants={descItem} className=''>
								<span className='fa-li text-neutral-400'>
									<FontAwesomeIcon icon={faBook} />
								</span>
								Potential research data
							</motion.li>
							<motion.li variants={descItem} className=''>
								<span className='fa-li text-neutral-400'>
									<FontAwesomeIcon icon={faBarsProgress} />
								</span>
								Supplementary data to guage patient progress
							</motion.li>
						</motion.ul>
					</motion.li>
					<motion.li variants={descItem} className=''>
						<span className='fa-li text-neutral-400'>
							<FontAwesomeIcon icon={faHospital} />
						</span>
						For BetterHelp:
						<motion.ul
							variants={descContainer}
							initial='hidden'
							animate='show'
							className='fa-ul mt-2 space-y-1.5'
						>
							<motion.li variants={descItem} className=''>
								<span className='fa-li text-neutral-400'>
									<FontAwesomeIcon icon={faChartSimple} />
								</span>
								Data: <br />
								What type of actions/tasks are users more
								receptive to in terms of app usage, mental
								health improvment, etc.
							</motion.li>
							<motion.li variants={descItem} className=''>
								<span className='fa-li text-neutral-400'>
									<FontAwesomeIcon icon={faUsers} />
								</span>
								User retention: <br />
								Which tasks encourage app usage?
							</motion.li>
						</motion.ul>
					</motion.li>
				</motion.ul>
			)}
		</div>
	);
};

export default AchievementWhy;
