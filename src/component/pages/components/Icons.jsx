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
						className='ml-0.5 fa-xs'
						icon={faArrowUpRightFromSquare}
					/>
				</LinkBase>
				.
			</p>
			<DividerTitleLeft title='Development icons' />
			<div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mt-5 mb-8 sm:px-6 justify-items-center md:justify-items-start'>
				{developmentIcons.map((icon, idx) => (
					<div key={icon.name} className='h-14 w-14 mb-14'>
						<div id={`icon-${idx}`}>{icon.icon}</div>
						<label
							htmlFor={`icon-${idx}`}
							className='text-xs sm:text-sm '
						>
							{icon.name}
						</label>
					</div>
				))}
			</div>

			<DividerTitleLeft title='Software & Tools icons' />
			<div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1 mt-5 mb-8 sm:px-6 justify-items-center md:justify-items-start'>
				{toolIcons.map((icon, idx) => (
					<div key={icon.name} className='h-14 w-14 mb-14'>
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
