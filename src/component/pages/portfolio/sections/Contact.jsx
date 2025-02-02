import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GenericLink from '../../../elements/GenericLink';
import Heading from '../../../elements/Heading';
import TextEmphasized from '../../../elements/TextEmphasized';
import SectionLayout from '../../../layout/SectionLayout';
import { socialLinksMap } from '../../../../util/constants';
import useCurrentTime from '../../../../hooks/useCurrentTime';

const Contact = () => {
	const resume = socialLinksMap.get('Resume');
	const linkedIn = socialLinksMap.get('LinkedIn');
	const calendly = socialLinksMap.get('Schedule a call');
	const { time } = useCurrentTime();

	const contactItems = [
		{
			id: 'Email',
			component: (
				<>
					<span className='space-x-0.5'>
						<TextEmphasized className='select-all'>
							brian
						</TextEmphasized>
						{/* <span className='select-all'>brian</span> */}
						<span>{'{@}'}</span>
						<TextEmphasized className='select-all'>
							bdhk
						</TextEmphasized>
						{/* <span className='select-all'>bdhk</span> */}
						<span>{'{dot}'}</span>
						<TextEmphasized className='select-all'>
							dev
						</TextEmphasized>
						{/* <span className='select-all'>dev</span> */}
					</span>
				</>
			),
		},
		{
			id: 'Resume',
			component: (
				<>
					<GenericLink url={resume.href}>
						Open {resume.name}
						<FontAwesomeIcon
							icon={resume.icon}
							className='ml-1.5'
						/>
					</GenericLink>
				</>
			),
		},
		{
			id: 'LinkedIn',
			component: (
				<>
					<GenericLink url={linkedIn.href}>
						Open {linkedIn.name}
						<FontAwesomeIcon
							icon={linkedIn.icon}
							className='ml-1.5'
						/>
					</GenericLink>
				</>
			),
		},
		{
			id: 'Chat',
			component: (
				<>
					<GenericLink url={calendly.href}>
						{calendly.name}
						<FontAwesomeIcon
							icon={calendly.icon}
							className='ml-1.5'
						/>
					</GenericLink>
				</>
			),
		},
		{
			id: 'Time zone',
			component: (
				<>
					<span>{time}</span>
				</>
			),
		},
	];

	return (
		<SectionLayout sectionTitle='Contact'>
			<div className=''>
				<Heading level='h4' size='small' className='mb-6'>
					Let's make things happen!
				</Heading>

				<ul className='space-y-2 font-mono'>
					{contactItems.map(cItem => (
						<li key={cItem.id}>
							<span className='mr-3 font-sans text-sm text-neutral-400'>
								{cItem.id}
							</span>
							{cItem.component}
						</li>
					))}
				</ul>
			</div>
		</SectionLayout>
	);
};

export default Contact;
