import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import SectionLayout from '../../../layout/SectionLayout';
import GenericLink from '../../../elements/GenericLink';
import { socialLinks } from '../../../../util/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextEmphasized from '../../../elements/TextEmphasized';

const About = () => {
	return (
		<SectionLayout sectionTitle='About' dividerIcon={faIdCard}>
			<div className='font-mono space-y-2 whitespace whitespace-break-spaces mb-8 sm:mb-10 md:mb-12'>
				<p>
					Hi, my name is <TextEmphasized>Brian</TextEmphasized>{' '}
					<span title='legal name'>(Dong Hyun)</span>, and I am a
					software engineer.
				</p>
				<p>
					I have worked as a{' '}
					<GenericLink url='https://www.linkedin.com/in/bdhk/'>
						full-stack software engineer
					</GenericLink>{' '}
					for the past six years at{' '}
					<GenericLink url='https://besmartee.com'>
						BeSmartee
					</GenericLink>{' '}
					using technologies such as{' '}
					<TextEmphasized>JavaScript</TextEmphasized>,{' '}
					<TextEmphasized>PHP</TextEmphasized>,{' '}
					<TextEmphasized>jQuery</TextEmphasized>,{' '}
					<TextEmphasized>React</TextEmphasized>,{' '}
					<TextEmphasized>Laravel</TextEmphasized>,{' '}
					<TextEmphasized>Ruby on Rails</TextEmphasized>, and more.
				</p>
				<p>
					I am currently located in{' '}
					<GenericLink url='https://maps.app.goo.gl/HuXK2qSdAmySdZrb9'>
						Southern California
					</GenericLink>{' '}
					and am actively searching for work opportunities. I don't
					have a specific preference for a particular technology
					stack. What matters more to me is being part of an
					organization where I can stay long-term and continue
					learning to become a better engineer.
				</p>
			</div>
			<div className='flex justify-evenly md:justify-start md:space-x-14 mb-6 md:mb-0'>
				{socialLinks.map(link => (
					<div key={link.name} className=''>
						<a
							className='hover:text-primary-400 cursor-pointer'
							target='_blank'
							rel='noreferrer'
							title={link.name}
							href={link.href}
						>
							<FontAwesomeIcon
								className='fa-2xl'
								icon={link.icon}
							/>
						</a>
					</div>
				))}
			</div>
		</SectionLayout>
	);
};

export default About;
