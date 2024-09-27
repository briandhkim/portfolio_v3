import { motion } from 'framer-motion';
import useAnimateOnScreen from '../../../../../hooks/useAnimateOnScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChartSimple,
	faUserDoctor,
	faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { faHospital } from '@fortawesome/free-regular-svg-icons';

const LabelValues = () => {
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
									<FontAwesomeIcon icon={faUsers} />
								</span>
								Allow therapists to more efficiently manage
								their clients
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
								Additional insight on how therapists interact
								with their clients, what type of help the
								clients seek out, etc.
							</motion.li>
						</motion.ul>
					</motion.li>
				</motion.ul>
			)}
		</div>
	);
};

export default LabelValues;
