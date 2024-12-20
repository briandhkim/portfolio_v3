import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { classNames } from '../../../../../util/helpers';
import { skillListMap } from '../../../../../util/constants';
import { useRef, useState } from 'react';
import SolidButton from '../../../../elements/buttons/SolidButton';
import { CSSTransition } from 'react-transition-group';
import DividerTitleLeft from '../../../../layout/DividerTitleLeft';
import {
	faAward,
	faCodeCommit,
	faMinus,
	faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';
import useAnimateOnScreen from '../../../../../hooks/useAnimateOnScreen';

const ExperienceItem = ({ history, showLeftBar }) => {
	const [showSection, sectionRef] = useAnimateOnScreen();
	const [showDescription, setShowDescription] = useState(false);

	const showBtnHandler = () => {
		setShowDescription(prev => !prev);
	};

	const descContainer = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const descItem = {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { ease: 'easeIn' } },
	};

	/**
	 * https://stackoverflow.com/questions/60946836/finddomnode-warnings-with-csstransition-components
	 */
	const nodeRef = useRef(null);

	return (
		<div
			className={`${showSection ? 'animate-fade_in' : 'opacity-0'} relative pb-8`}
			ref={sectionRef}
		>
			{showLeftBar ? (
				<span
					className='absolute left-4 top-4 -ml-px h-full w-0.5 bg-neutral-600'
					aria-hidden='true'
				/>
			) : null}
			<div className='relative flex space-x-3'>
				<div>
					<span
						className={classNames(
							history.iconBackground,
							'flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-neutral-950'
						)}
					>
						<FontAwesomeIcon
							className='pl-0.5'
							icon={history.icon}
						/>
					</span>
				</div>
				<div className='flex min-w-0 flex-1 justify-between space-x-4 pt-1'>
					<div>
						<p className='mb-2 text-base font-bold'>
							{history.content}{' '}
						</p>
						<div className='flex flex-wrap space-x-1.5'>
							{history.techList.map(tech => {
								const t = skillListMap.get(tech);
								return (
									<motion.div
										key={t.name}
										title={t.name}
										className='mb-2 h-6 w-6'
										whileHover={{
											scale: 1.8,
											transition: { ease: 'circInOut' },
										}}
										whileTap={{
											scale: 2,
										}}
									>
										{t.icon}
									</motion.div>
								);
							})}
						</div>
						<div className='mt-1'>
							<SolidButton
								size='base'
								className='rounded'
								clickHandler={showBtnHandler}
							>
								{showDescription ? (
									<>
										Hide <FontAwesomeIcon icon={faMinus} />
									</>
								) : (
									<>
										Show <FontAwesomeIcon icon={faPlus} />
									</>
								)}
							</SolidButton>
						</div>
						<CSSTransition
							in={showDescription}
							nodeRef={nodeRef}
							timeout={500}
							classNames='slide-vertical'
							unmountOnExit
						>
							<div className='mt-3'>
								<div className='mb-2 text-xs text-neutral-400 sm:text-sm'>
									<time
										dateTime={history.dateStart.toISOString()}
									>
										{history.dateStart.toLocaleString(
											'default',
											{
												year: 'numeric',
												month: 'short',
											}
										)}
									</time>{' '}
									-{' '}
									<time
										dateTime={history.dateEnd.toISOString()}
									>
										{history.dateEnd.toLocaleString(
											'default',
											{
												year: 'numeric',
												month: 'short',
											}
										)}
									</time>
								</div>
								{history.honors && (
									<div className='mb-5 space-y-1'>
										<DividerTitleLeft
											title='Honors'
											borderStyle='border-dotted'
											borderWidth='border-t-[3px]'
										/>
										<div className='font-mono text-xs sm:text-sm'>
											<ul className='fa-ul'>
												{history.honors.map(honor => (
													<li
														key={honor}
														className=''
													>
														<span className='fa-li text-neutral-400'>
															<FontAwesomeIcon
																icon={faAward}
															/>
														</span>
														{honor}
													</li>
												))}
											</ul>
										</div>
									</div>
								)}
								<div className='mb-1 space-y-1 sm:mb-3'>
									<DividerTitleLeft
										title='Work'
										borderStyle='border-dotted'
										borderWidth='border-t-[3px]'
									/>
									<div className='font-mono text-xs sm:text-sm'>
										<AnimatePresence>
											<motion.ul
												key={history.content}
												variants={descContainer}
												initial='hidden'
												animate='show'
												className='fa-ul space-y-3'
											>
												{history.descriptionItems.map(
													(item, idx) => (
														<motion.li
															key={idx}
															variants={descItem}
															className=''
														>
															<span className='fa-li text-neutral-400'>
																<FontAwesomeIcon
																	icon={
																		faCodeCommit
																	}
																/>
															</span>
															{item}
														</motion.li>
													)
												)}
											</motion.ul>
										</AnimatePresence>
									</div>
								</div>
							</div>
						</CSSTransition>
					</div>
					<div className='whitespace-nowrap text-right text-xs text-neutral-400 md:text-sm'>
						<time dateTime={history.datetime}>
							{history.dateStart.toLocaleString('default', {
								year: 'numeric',
								month: 'short',
							})}
						</time>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExperienceItem;
