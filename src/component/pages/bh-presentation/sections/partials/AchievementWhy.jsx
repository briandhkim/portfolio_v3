import { faBuilding, faHospital } from '@fortawesome/free-regular-svg-icons';
import {
	faAward,
	faBarsProgress,
	faBook,
	faChartSimple,
	faHeadSideVirus,
	faListCheck,
	faPenToSquare,
	faPersonRunning,
	faSquarePollVertical,
	faUserDoctor,
	faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const AchievementWhy = () => {
	const descContainer = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const descItem = {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { ease: 'easeIn' } },
	};
	return (
		<div className='text-xs sm:text-sm mg:text-base font-mono'>
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
					<ul className='fa-ul mt-2'>
						<li className=''>
							<span className='fa-li text-neutral-400'>
								<FontAwesomeIcon icon={faPersonRunning} />
							</span>
							Source of motivation
						</li>
						<li className=''>
							<span className='fa-li text-neutral-400'>
								<FontAwesomeIcon icon={faListCheck} />
							</span>
							Alternative, and potentially easier, goals to work
							towards
						</li>
					</ul>
				</motion.li>
				<motion.li variants={descItem} className=''>
					<span className='fa-li text-neutral-400'>
						<FontAwesomeIcon icon={faUserDoctor} />
					</span>
					For the therapist:
					<ul className='fa-ul mt-2'>
						<li className=''>
							<span className='fa-li text-neutral-400'>
								<FontAwesomeIcon icon={faBook} />
							</span>
							Potential research data
						</li>
						<li className=''>
							<span className='fa-li text-neutral-400'>
								<FontAwesomeIcon icon={faBarsProgress} />
							</span>
							Supplementary data to guage patient progress
						</li>
					</ul>
				</motion.li>
				<motion.li variants={descItem} className=''>
					<span className='fa-li text-neutral-400'>
						<FontAwesomeIcon icon={faHospital} />
					</span>
					For BetterHelp:
					<ul className='fa-ul mt-2 space-y-1.5'>
						<li className=''>
							<span className='fa-li text-neutral-400'>
								<FontAwesomeIcon icon={faChartSimple} />
							</span>
							Data: <br />
							What type of actions/tasks are users more receptive
							to in terms of app usage, mental health improvment,
							etc.
						</li>
						<li className=''>
							<span className='fa-li text-neutral-400'>
								<FontAwesomeIcon icon={faUsers} />
							</span>
							User retention: <br />
							Which tasks encourage app usage?
						</li>
					</ul>
				</motion.li>
			</motion.ul>
		</div>
	);
};

export default AchievementWhy;
