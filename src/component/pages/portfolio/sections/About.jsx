import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import SectionLayout from '../../../layout/SectionLayout';
import GenericLink from '../../../elements/GenericLink';
import { socialLinks } from '../../../../util/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextEmphasized from '../../../elements/TextEmphasized';
import { useEffect, useRef, useState } from 'react';
import { useOnScreen } from '../../../../hooks/useOnScreen';
import FadeInSpan from '../../components/FadeInSpan';

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
			duration: 1.9,
		},
	};

	const ref = useRef(null);
	const descInView = useOnScreen(ref);
	const [startAnimation, setStartAnimation] = useState(false);
	const [showAnimation, setShowAnimation] = useState(true);

	useEffect(() => {
		if (descInView && !startAnimation) {
			setStartAnimation(true);
		}
	}, [descInView]);

	const animationEndCallback = () => {
		setShowAnimation(false);
	};

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

	return (
		<SectionLayout sectionTitle='About' dividerIcon={faIdCard}>
			<div
				ref={ref}
				className='whitespace mb-8 space-y-2 whitespace-break-spaces font-mono sm:mb-10 md:mb-12'
			>
				<p>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupThree}
					>
						Hi,{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupTwo}
					>
						my name is
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupOne}
					>
						{' '}
						<TextEmphasized>Brian</TextEmphasized>{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupThree}
					>
						<span title='legal name'>(Dong Hyun)</span>, and{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupTwo}
					>
						I am a{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupThree}
					>
						software engineer
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupFour}
					>
						.
					</FadeInSpan>
				</p>
				<p>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupFour}
					>
						I have worked as a{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupOne}
					>
						<GenericLink url='https://www.linkedin.com/in/bdhk/'>
							full-stack software engineer
						</GenericLink>{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupFour}
					>
						for the past{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupTwo}
					>
						six years{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupFour}
					>
						at{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupThree}
					>
						<GenericLink url='https://besmartee.com'>
							BeSmartee
						</GenericLink>{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupTwo}
					>
						using{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupFour}
					>
						technologies such as{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupOne}
					>
						<TextEmphasized>JavaScript</TextEmphasized>,{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupOne}
					>
						<TextEmphasized>PHP</TextEmphasized>,{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupThree}
					>
						<TextEmphasized>jQuery</TextEmphasized>,{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupTwo}
					>
						<TextEmphasized>React</TextEmphasized>,{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupTwo}
					>
						<TextEmphasized>Laravel</TextEmphasized>,{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupThree}
					>
						<TextEmphasized>Ruby on Rails</TextEmphasized>
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupFour}
					>
						, and more.
					</FadeInSpan>
				</p>
				<p>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupFour}
					>
						I am currently located in{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupOne}
					>
						<GenericLink url='https://maps.app.goo.gl/HuXK2qSdAmySdZrb9'>
							Southern California
						</GenericLink>{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupThree}
					>
						and am actively{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupTwo}
					>
						searching for work opportunities
					</FadeInSpan>

					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupFour}
					>
						. I don't have a specific preference for a particular
						technology stack.{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupOne}
					>
						What matters{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupFour}
					>
						more to me{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupOne}
					>
						is{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupFour}
					>
						being part of an organization where I can stay long-term
						and continue{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupOne}
					>
						learning{' '}
					</FadeInSpan>
					<FadeInSpan
						startAnimation={startAnimation}
						showAnimation={showAnimation}
						time={fade.groupFour}
						triggerAnimationEnd={true}
						animationEndCallback={animationEndCallback}
						id='last-description'
					>
						to become a better engineer.
					</FadeInSpan>
				</p>
			</div>
			<div className='flex justify-evenly md:justify-start md:space-x-14'>
				{socialLinks.map(link => (
					<div key={link.name} className=''>
						<a
							className='cursor-pointer transition duration-200 ease-in-out hover:text-primary-400'
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
