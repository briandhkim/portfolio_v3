import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { classNames } from '../../../../../util/helpers';
import { skillListMap } from '../../../../../util/constants';
import { useState } from 'react';
import SolidButton from '../../../../elements/buttons/SolidButton';
import { CSSTransition } from 'react-transition-group';
import DividerTitleLeft from '../../../../layout/DividerTitleLeft';
import { faAward, faCodeCommit } from '@fortawesome/free-solid-svg-icons';

const ExperienceItem = ({ history, showLeftBar }) => {
	const [showDescription, setShowDescription] = useState(false);

	const showBtnHandler = () => {
		setShowDescription(prev => !prev);
	};

	return (
		<div className='relative pb-8'>
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
							'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-neutral-950'
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
						<p className='text-base font-bold mb-2'>
							{history.content}{' '}
						</p>
						<div className='flex flex-wrap space-x-1.5'>
							{history.techList.map(tech => {
								const t = skillListMap.get(tech);
								return (
									<div
										key={t.name}
										title={t.name}
										className='h-6 w-6 mb-2'
									>
										{t.icon}
									</div>
								);
							})}
						</div>
						<div className='mt-1'>
							<SolidButton
								size='base'
								className='rounded'
								clickHandler={showBtnHandler}
							>
								{showDescription ? 'Hide' : 'Show'}
								{/* todo - details */}
							</SolidButton>
						</div>
						<CSSTransition
							in={showDescription}
							timeout={500}
							classNames='slide-vertical'
							unmountOnExit
						>
							<div className='mt-3'>
								<div className='text-xs sm:text-sm text-neutral-400 mb-2'>
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
										<div className='font-mono text-sm'>
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
								<div className='mb-1 sm:mb-3 space-y-1'>
									<DividerTitleLeft
										title='Work'
										borderStyle='border-dotted'
										borderWidth='border-t-[3px]'
									/>
									<div className='font-mono text-sm'>
										<ul className='fa-ul space-y-3'>
											{history.descriptionItems.map(
												(item, idx) => (
													<li key={idx} className=''>
														<span className='fa-li text-neutral-400'>
															<FontAwesomeIcon
																icon={
																	faCodeCommit
																}
															/>
														</span>
														{item}
													</li>
												)
											)}
										</ul>
									</div>
								</div>
							</div>
						</CSSTransition>
					</div>
					<div className='whitespace-nowrap text-right text-xs md:text-sm text-neutral-400'>
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
