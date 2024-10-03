import {
	faBattery3,
	faHandHoldingMedical,
	faMapLocationDot,
	faQuoteLeft,
	faUniversalAccess,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Description,
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import SolidButton from '../../../../elements/buttons/SolidButton';

const UsabilityModal = ({ isOpen, setIsOpen }) => {
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
		<AnimatePresence>
			{isOpen && (
				<Dialog
					open={isOpen}
					onClose={() => setIsOpen(false)}
					className='relative z-50 focus:outline-none'
				>
					<DialogBackdrop className='fixed inset-0 bg-[#325343]/85' />
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.4 }}
						className='fixed inset-0 w-screen overflow-y-auto p-4'
					>
						<div className='flex min-h-full items-center justify-center p-4'>
							<DialogPanel className='max-w-2xl space-y-4 rounded-xl border border-neutral-800 bg-[#f7f0eb] p-12 text-neutral-700'>
								<DialogTitle className='font-sans text-2xl font-bold'>
									Don't make users think!
								</DialogTitle>
								<Description></Description>
								<div className='mg:text-base font-mono text-xs sm:text-sm'>
									<motion.ul
										variants={descContainer}
										initial='hidden'
										animate='show'
										className='fa-ul space-y-5'
									>
										<motion.li
											variants={descItem}
											className=''
										>
											<span className='fa-li text-neutral-500'>
												<FontAwesomeIcon
													icon={faQuoteLeft}
												/>
											</span>
											<i>
												A person of average (or even
												below average) ability and
												experience can figure out how to
												use the thing to accomplish
												something without it being more
												trouble than it’s worth
											</i>{' '}
											<br />
											<span className='text-neutral-600'>
												from "Don't Make Me Think" by
												Steve Krug
											</span>
										</motion.li>
										<motion.li
											variants={descItem}
											className=''
										>
											<span className='fa-li text-neutral-500'>
												<FontAwesomeIcon
													icon={faMapLocationDot}
												/>
											</span>
											Poor UX will distract the user from
											being able to accomplish the goals.
										</motion.li>
										<motion.li
											variants={descItem}
											className=''
										>
											<span className='fa-li text-neutral-500'>
												<FontAwesomeIcon
													icon={faUniversalAccess}
												/>
											</span>
											The user's labor should be focused
											on achieving a set task rather than
											focusing on how they will achieve
											it.
										</motion.li>
										<motion.li
											variants={descItem}
											className=''
										>
											<span className='fa-li text-neutral-500'>
												<FontAwesomeIcon
													icon={faBattery3}
												/>
											</span>
											There is a limit to people’s
											cognitive workload similar to how
											there is a limit to physical
											workload. In that sense, good UX
											should eliminate this strain so the
											users can focus on the given task.
										</motion.li>
										<motion.li
											variants={descItem}
											className=''
										>
											<span className='fa-li text-neutral-500'>
												<FontAwesomeIcon
													icon={faHandHoldingMedical}
												/>
											</span>
											The user should be focused on
											receiving help rather than having to
											figure out how to use the
											application.
										</motion.li>
									</motion.ul>
								</div>
								<div className='flex justify-end gap-4 px-8 pt-8'>
									<SolidButton
										clickHandler={() => setIsOpen(false)}
										size='sm'
										className='rounded'
									>
										Close
									</SolidButton>
								</div>
							</DialogPanel>
						</div>
					</motion.div>
				</Dialog>
			)}
		</AnimatePresence>
	);
};

export default UsabilityModal;
