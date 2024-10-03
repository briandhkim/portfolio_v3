import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skillList } from '../../../util/constants';
import DividerTitleLeft from '../../layout/DividerTitleLeft';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import LinkBase from '../../elements/LinkBase';

const Icons = () => {
	const skillIcons = skillList.sort((a, b) => a.name.localeCompare(b.name));

	const developmentIcons = skillIcons.filter(
		skillIcon => skillIcon.category === 'Development'
	);
	const toolIcons = skillIcons.filter(
		skillIcon => skillIcon.category === 'Software & Tools'
	);

	return (
		<>
			<p className='mb-8'>
				Most of the icons were acquired from{' '}
				<LinkBase href='https://devicon.dev/'>
					Devicon
					<FontAwesomeIcon
						className='fa-xs ml-0.5'
						icon={faArrowUpRightFromSquare}
					/>
				</LinkBase>
				.
			</p>
			<DividerTitleLeft title='Development icons' />
			<div className='mb-8 mt-5 grid grid-cols-3 justify-items-center gap-4 sm:grid-cols-4 sm:px-6 md:grid-cols-5 md:justify-items-start'>
				{developmentIcons.map((icon, idx) => (
					<div key={icon.name} className='mb-14 h-14 w-14'>
						<div id={`icon-${idx}`}>{icon.icon}</div>
						<label
							htmlFor={`icon-${idx}`}
							className='text-xs sm:text-sm'
						>
							{icon.name}
						</label>
					</div>
				))}
			</div>

			<DividerTitleLeft title='Software & Tools icons' />
			<div className='mb-8 mt-5 grid grid-cols-3 justify-items-center gap-1 sm:grid-cols-4 sm:px-6 md:grid-cols-5 md:justify-items-start'>
				{toolIcons.map((icon, idx) => (
					<div key={icon.name} className='mb-14 h-14 w-14'>
						<div id={`icon-${idx}`}>{icon.icon}</div>
						<label
							htmlFor={`icon-${idx}`}
							className='text-xs sm:text-sm'
						>
							{icon.name}
						</label>
					</div>
				))}
			</div>
		</>
	);
};

export default Icons;
