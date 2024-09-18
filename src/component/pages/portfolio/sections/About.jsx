import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import SectionLayout from '../../../layout/SectionLayout';
import GenericLink from '../../../elements/GenericLink';
import { socialLinks } from '../../../../util/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextEmphasized from '../../../elements/TextEmphasized';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const About = () => {
	const fade = {
		groupOne: {
			delay: 0,
			duration: 1.5,
		},
		groupTwo: {
			delay: 1.6,
			duration: 1.8,
		},
		groupThree: {
			delay: 3.3,
			duration: 2,
		},
		groupFour: {
			delay: 4.3,
			duration: 2,
		},
	};

	const ref = useRef(null);
	const descInView = useInView(ref);
	const [showAnimation, setShowAnimation] = useState(true);

	const disableAnimation = () => {
		if (showAnimation) {
			const msForAnimationToComplete =
				(fade.groupFour.delay +
					fade.groupFour.duration -
					fade.groupOne.duration) *
				1000;

			setTimeout(() => {
				const e = document.getElementById('last-description');
				const eOpacity = window
					.getComputedStyle(e)
					.getPropertyValue('opacity');
				// console.log('opacity: ' + eOpacity);
				if (eOpacity == 1) {
					setShowAnimation(false);
				}
			}, msForAnimationToComplete);
		}
	};

	const FadeInSpan = ({ time, children, id = null }) => {
		const { duration, delay } = time;
		return (
			<motion.span
				initial={{ opacity: showAnimation ? 0 : 1 }}
				animate={
					descInView && showAnimation
						? { opacity: 1, transitionEnd: { opacity: 1 } }
						: ''
				}
				onAnimationComplete={disableAnimation}
				transition={{
					repeat: 0,
					ease: 'easeIn',
					duration: duration,
					delay: delay,
				}}
				viewport={{ once: true }}
				id={id}
			>
				{children}
			</motion.span>
		);
	};

	return (
		<SectionLayout sectionTitle='About' dividerIcon={faIdCard}>
			<div
				ref={ref}
				className='font-mono space-y-2 whitespace whitespace-break-spaces mb-8 sm:mb-10 md:mb-12'
			>
				<p>
					<FadeInSpan time={fade.groupThree}>Hi, </FadeInSpan>
					<FadeInSpan time={fade.groupTwo}>my name is</FadeInSpan>
					<FadeInSpan time={fade.groupOne}>
						{' '}
						<TextEmphasized>Brian</TextEmphasized>{' '}
					</FadeInSpan>
					<FadeInSpan time={fade.groupThree}>
						<span title='legal name'>(Dong Hyun)</span>, and{' '}
					</FadeInSpan>
					<FadeInSpan time={fade.groupTwo}>I am a </FadeInSpan>
					<FadeInSpan time={fade.groupThree}>
						software engineer
					</FadeInSpan>
					<FadeInSpan time={fade.groupFour}>.</FadeInSpan>
				</p>
				<p>
					<FadeInSpan time={fade.groupFour}>
						I have worked as a{' '}
					</FadeInSpan>
					<FadeInSpan time={fade.groupOne}>
						<GenericLink url='https://www.linkedin.com/in/bdhk/'>
							full-stack software engineer
						</GenericLink>{' '}
					</FadeInSpan>
					<FadeInSpan time={fade.groupFour}>for the past </FadeInSpan>
					<FadeInSpan time={fade.groupTwo}>six years </FadeInSpan>
					<FadeInSpan time={fade.groupFour}>at </FadeInSpan>
					<FadeInSpan time={fade.groupThree}>
						<GenericLink url='https://besmartee.com'>
							BeSmartee
						</GenericLink>{' '}
					</FadeInSpan>
					<FadeInSpan time={fade.groupTwo}>using </FadeInSpan>
					<FadeInSpan time={fade.groupFour}>
						technologies such as{' '}
					</FadeInSpan>
					<FadeInSpan time={fade.groupOne}>
						<TextEmphasized>JavaScript</TextEmphasized>,{' '}
					</FadeInSpan>
					<FadeInSpan time={fade.groupOne}>
						<TextEmphasized>PHP</TextEmphasized>,{' '}
					</FadeInSpan>
					<FadeInSpan time={fade.groupThree}>
						<TextEmphasized>jQuery</TextEmphasized>,{' '}
					</FadeInSpan>
					<FadeInSpan time={fade.groupTwo}>
						<TextEmphasized>React</TextEmphasized>,{' '}
					</FadeInSpan>
					<FadeInSpan time={fade.groupTwo}>
						<TextEmphasized>Laravel</TextEmphasized>,{' '}
					</FadeInSpan>
					<FadeInSpan time={fade.groupThree}>
						<TextEmphasized>Ruby on Rails</TextEmphasized>
					</FadeInSpan>
					<FadeInSpan time={fade.groupFour}>, and more.</FadeInSpan>
				</p>
				<p>
					<FadeInSpan time={fade.groupFour}>
						I am currently located in{' '}
					</FadeInSpan>
					<FadeInSpan time={fade.groupOne}>
						<GenericLink url='https://maps.app.goo.gl/HuXK2qSdAmySdZrb9'>
							Southern California
						</GenericLink>{' '}
					</FadeInSpan>
					<FadeInSpan time={fade.groupThree}>
						and am actively{' '}
					</FadeInSpan>
					<FadeInSpan time={fade.groupTwo}>
						searching for work opportunities
					</FadeInSpan>

					<FadeInSpan time={fade.groupFour}>
						. I don't have a specific preference for a particular
						technology stack.{' '}
					</FadeInSpan>
					<FadeInSpan time={fade.groupOne}>What matters </FadeInSpan>
					<FadeInSpan time={fade.groupFour}>more to me </FadeInSpan>
					<FadeInSpan time={fade.groupOne}>is </FadeInSpan>
					<FadeInSpan time={fade.groupFour}>
						being part of an organization where I can stay long-term
						and continue{' '}
					</FadeInSpan>
					<FadeInSpan time={fade.groupOne}>learning </FadeInSpan>
					<FadeInSpan time={fade.groupFour} id='last-description'>
						to become a better engineer.
					</FadeInSpan>
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
