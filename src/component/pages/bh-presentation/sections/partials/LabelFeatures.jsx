import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import {
	faFilter,
	faTag,
	faTags,
	faUserTag,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const LabelFeatures = () => {
	const descContainer = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				duration: 1.5,
				staggerChildren: 0.25,
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
						<FontAwesomeIcon icon={faTags} />
					</span>
					"Default"/company-level(BetterHelp) set of tags based on
					common traits <br />
					<span className='text-neutral-400 '>
						e.g.
						<ul className='fa-ul mt-2'>
							<li className=''>
								<span className='fa-li text-neutral-400'>
									<FontAwesomeIcon icon={faTag} />
								</span>
								Active patient
							</li>
							<li className=''>
								<span className='fa-li text-neutral-400'>
									<FontAwesomeIcon icon={faTag} />
								</span>
								High risk
							</li>
							<li className=''>
								<span className='fa-li text-neutral-400'>
									<FontAwesomeIcon icon={faTag} />
								</span>
								Family conflicts
							</li>
						</ul>
					</span>
				</motion.li>
				<motion.li variants={descItem} className=''>
					<span className='fa-li text-neutral-400'>
						<FontAwesomeIcon icon={faPenToSquare} />
					</span>
					Custom tags created by the therapists
				</motion.li>
				<motion.li variants={descItem} className=''>
					<span className='fa-li text-neutral-400'>
						<FontAwesomeIcon icon={faUserTag} />
					</span>
					Attach tags to patients, notes, etc.
				</motion.li>
				<motion.li variants={descItem} className=''>
					<span className='fa-li text-neutral-400'>
						<FontAwesomeIcon icon={faFilter} />
					</span>
					Filter, sort, and organize patients based on the tags
				</motion.li>
			</motion.ul>
		</div>
	);
};

export default LabelFeatures;
