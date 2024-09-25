import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faAward, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import useAnimateOnScreen from '../../../../../hooks/useAnimateOnScreen';

const AchievementFeatures = () => {
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
							<FontAwesomeIcon icon={faListCheck} />
						</span>
						"Default"/company-level(BetterHelp) set of achievements
						that are based on common goals & tasks <br />
						<span className='text-neutral-400 '>
							e.g.
							<motion.ul
								variants={descContainer}
								initial='hidden'
								animate='show'
								className='fa-ul mt-2'
							>
								<motion.li variants={descItem} className=''>
									<span className='fa-li text-neutral-400'>
										<FontAwesomeIcon icon={faAward} />
									</span>
									Started first therapy session
								</motion.li>
								<motion.li variants={descItem} className=''>
									<span className='fa-li text-neutral-400'>
										<FontAwesomeIcon icon={faAward} />
									</span>
									Joined a group session
								</motion.li>
								<motion.li variants={descItem} className=''>
									<span className='fa-li text-neutral-400'>
										<FontAwesomeIcon icon={faAward} />
									</span>
									Goal achiever
								</motion.li>
							</motion.ul>
						</span>
					</motion.li>
					<motion.li variants={descItem} className=''>
						<span className='fa-li text-neutral-400'>
							<FontAwesomeIcon icon={faPenToSquare} />
						</span>
						Custom achievements created by the therapists
					</motion.li>
				</motion.ul>
			)}
		</div>
	);
};

export default AchievementFeatures;
