import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GenericLink from '../../../elements/GenericLink';
import Heading from '../../../elements/Heading';
import TextEmphasized from '../../../elements/TextEmphasized';
import SectionLayout from '../../../layout/SectionLayout';
import { socialLinksMap } from '../../../../util/constants';

const Contact = () => {
	const resume = socialLinksMap.get('Resume');
	const linkedIn = socialLinksMap.get('LinkedIn');
	const calendly = socialLinksMap.get('Schedule a call');

	return (
		<SectionLayout sectionTitle='Contact'>
			<div className=''>
				<Heading level='h4' size='small' className='mb-6 '>
					Let's make things happen!
				</Heading>

				<ul className='space-y-2 font-mono'>
					<li>
						<span className='text-neutral-400 text-sm mr-3 font-sans'>
							Email
						</span>
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
					</li>
					<li>
						<span className='text-neutral-400 text-sm mr-3 font-sans'>
							Resume
						</span>
						<GenericLink url={resume.href}>
							Open {resume.name}
							<FontAwesomeIcon
								icon={resume.icon}
								className='ml-1.5'
							/>
						</GenericLink>
					</li>
					<li>
						<span className='text-neutral-400 text-sm mr-3 font-sans'>
							LinkedIn
						</span>
						<GenericLink url={linkedIn.href}>
							Open {linkedIn.name}
							<FontAwesomeIcon
								icon={linkedIn.icon}
								className='ml-1.5'
							/>
						</GenericLink>
					</li>
					<li>
						<span className='text-neutral-400 text-sm mr-3 font-sans'>
							Call
						</span>
						<GenericLink url={calendly.href}>
							{calendly.name}
							<FontAwesomeIcon
								icon={calendly.icon}
								className='ml-1.5'
							/>
						</GenericLink>
					</li>
				</ul>
			</div>
		</SectionLayout>
	);
};

export default Contact;
