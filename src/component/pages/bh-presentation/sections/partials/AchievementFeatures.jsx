import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faAward, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const AchievementFeatures = () => {
	const descContainer = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				duration: 1.5,
				staggerChildren: 0.2,
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
						<FontAwesomeIcon icon={faListCheck} />
					</span>
					"Default"/company-level(BetterHelp) set of achievements that
					are based on common goals & tasks <br />
					<span className='text-neutral-400 '>
						e.g.
						<ul className='fa-ul mt-2'>
							<li className=''>
								<span className='fa-li text-neutral-400'>
									<FontAwesomeIcon icon={faAward} />
								</span>
								Started first therapy session
							</li>
							<li className=''>
								<span className='fa-li text-neutral-400'>
									<FontAwesomeIcon icon={faAward} />
								</span>
								Joined a group session
							</li>
							<li className=''>
								<span className='fa-li text-neutral-400'>
									<FontAwesomeIcon icon={faAward} />
								</span>
								Goal achiever
							</li>
						</ul>
					</span>
				</motion.li>
				<motion.li variants={descItem} className=''>
					<span className='fa-li text-neutral-400'>
						<FontAwesomeIcon icon={faPenToSquare} />
					</span>
					Custom achievements created by the therapists
				</motion.li>
			</motion.ul>
		</div>
	);
};

export default AchievementFeatures;
