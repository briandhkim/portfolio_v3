import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import SectionLayout from '../../../layout/SectionLayout';
import GenericLink from '../../../elements/GenericLink';
import { socialLinks } from '../../../../util/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextEmphasized from '../../../elements/TextEmphasized';
import { motion } from 'framer-motion';

const About = () => {
	const fade = {
		groupOne: {
			delay: 0,
			duration: 1.5,
		},
		groupTwo: {
			delay: 2,
			duration: 2,
		},
		groupThree: {
			delay: 3.5,
			duration: 2,
		},
		groupFour: {
			delay: 4.5,
			duration: 2,
		},
	};

	return (
		<SectionLayout sectionTitle='About' dividerIcon={faIdCard}>
			<div className='font-mono space-y-2 whitespace whitespace-break-spaces mb-8 sm:mb-10 md:mb-12'>
				<p>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupThree.duration,
							delay: fade.groupThree.delay,
						}}
						viewport={{ once: true }}
					>
						Hi,{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupTwo.duration,
							delay: fade.groupTwo.delay,
						}}
						viewport={{ once: true }}
					>
						my name is
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupOne.duration,
							delay: fade.groupOne.delay,
						}}
						viewport={{ once: true }}
					>
						{' '}
						<TextEmphasized>Brian</TextEmphasized>{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupThree.duration,
							delay: fade.groupThree.delay,
						}}
						viewport={{ once: true }}
					>
						<span title='legal name'>(Dong Hyun)</span>, and{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupTwo.duration,
							delay: fade.groupTwo.delay,
						}}
						viewport={{ once: true }}
					>
						I am a{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupThree.duration,
							delay: fade.groupThree.delay,
						}}
						viewport={{ once: true }}
					>
						software engineer
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupFour.duration,
							delay: fade.groupFour.delay,
						}}
						viewport={{ once: true }}
					>
						.
					</motion.span>
				</p>
				<p>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupFour.duration,
							delay: fade.groupFour.delay,
						}}
						viewport={{ once: true }}
					>
						I have worked as a{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupOne.duration,
							delay: fade.groupOne.delay,
						}}
						viewport={{ once: true }}
					>
						<GenericLink url='https://www.linkedin.com/in/bdhk/'>
							full-stack software engineer
						</GenericLink>{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupFour.duration,
							delay: fade.groupFour.delay,
						}}
						viewport={{ once: true }}
					>
						for the past{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupTwo.duration,
							delay: fade.groupTwo.delay,
						}}
						viewport={{ once: true }}
					>
						six years{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupFour.duration,
							delay: fade.groupFour.delay,
						}}
						viewport={{ once: true }}
					>
						at{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupThree.duration,
							delay: fade.groupThree.delay,
						}}
						viewport={{ once: true }}
					>
						<GenericLink url='https://besmartee.com'>
							BeSmartee
						</GenericLink>{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupTwo.duration,
							delay: fade.groupTwo.delay,
						}}
						viewport={{ once: true }}
					>
						using{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupFour.duration,
							delay: fade.groupFour.delay,
						}}
						viewport={{ once: true }}
					>
						technologies such as{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupOne.duration,
							delay: fade.groupOne.delay,
						}}
						viewport={{ once: true }}
					>
						<TextEmphasized>JavaScript</TextEmphasized>,{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupOne.duration,
							delay: fade.groupOne.delay,
						}}
						viewport={{ once: true }}
					>
						<TextEmphasized>PHP</TextEmphasized>,{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupThree.duration,
							delay: fade.groupThree.delay,
						}}
						viewport={{ once: true }}
					>
						<TextEmphasized>jQuery</TextEmphasized>,{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupTwo.duration,
							delay: fade.groupTwo.delay,
						}}
						viewport={{ once: true }}
					>
						<TextEmphasized>React</TextEmphasized>,{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupTwo.duration,
							delay: fade.groupTwo.delay,
						}}
						viewport={{ once: true }}
					>
						<TextEmphasized>Laravel</TextEmphasized>,{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupThree.duration,
							delay: fade.groupThree.delay,
						}}
						viewport={{ once: true }}
					>
						<TextEmphasized>Ruby on Rails</TextEmphasized>
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupFour.duration,
							delay: fade.groupFour.delay,
						}}
						viewport={{ once: true }}
					>
						, and more.
					</motion.span>
				</p>
				<p>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupFour.duration,
							delay: fade.groupFour.delay,
						}}
						viewport={{ once: true }}
					>
						I am currently located in{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupOne.duration,
							delay: fade.groupOne.delay,
						}}
						viewport={{ once: true }}
					>
						<GenericLink url='https://maps.app.goo.gl/HuXK2qSdAmySdZrb9'>
							Southern California
						</GenericLink>{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupThree.duration,
							delay: fade.groupThree.delay,
						}}
						viewport={{ once: true }}
					>
						and am actively{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupTwo.duration,
							delay: fade.groupTwo.delay,
						}}
						viewport={{ once: true }}
					>
						searching for work opportunities
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupFour.duration,
							delay: fade.groupFour.delay,
						}}
						viewport={{ once: true }}
					>
						. I don't have a specific preference for a particular
						technology stack.{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupOne.duration,
							delay: fade.groupOne.delay,
						}}
						viewport={{ once: true }}
					>
						What matters{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupFour.duration,
							delay: fade.groupFour.delay,
						}}
						viewport={{ once: true }}
					>
						more to me{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupOne.duration,
							delay: fade.groupOne.delay,
						}}
						viewport={{ once: true }}
					>
						is{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupFour.duration,
							delay: fade.groupFour.delay,
						}}
						viewport={{ once: true }}
					>
						being part of an organization where I can stay long-term
						and continue{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupOne.duration,
							delay: fade.groupOne.delay,
						}}
						viewport={{ once: true }}
					>
						learning{' '}
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: fade.groupFour.duration,
							delay: fade.groupFour.delay,
						}}
						viewport={{ once: true }}
					>
						to become a better engineer.
					</motion.span>
				</p>
			</div>
			<div className='flex justify-evenly md:justify-start md:space-x-14'>
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
