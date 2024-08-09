import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { classNames } from '../../../../../util/helpers';
import { skillListMap } from '../../../../../util/constants';
import { useState } from 'react';
import SolidButton from '../../../../elements/buttons/SolidButton';
import { CSSTransition } from 'react-transition-group';

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
						<FontAwesomeIcon className='' icon={history.icon} />
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
										className='h-7 w-7 mb-2'
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
							</SolidButton>
						</div>
						<CSSTransition
							in={showDescription}
							timeout={500}
							classNames='slide-vertical'
							unmountOnExit
						>
							<div className='pl-10 mt-1.5'>
								<ul className='list-[korean-hangul-formal]'>
									{history.descriptionItems.map(
										(item, idx) => (
											<li key={idx} className='font-mono'>
												{item}
											</li>
										)
									)}
								</ul>
							</div>
						</CSSTransition>
					</div>
					<div className='whitespace-nowrap text-right text-sm text-neutral-400'>
						<time dateTime={history.datetime}>{history.date}</time>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExperienceItem;
