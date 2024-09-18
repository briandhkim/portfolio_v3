import { motion } from 'framer-motion';

const FadeInSpan = ({
	children,
	time,
	showAnimation,
	startAnimation,
	triggerAnimationEnd = null,
	animationEndCallback = null,
	id = null,
}) => {
	const { duration, delay } = time;

	return (
		<motion.span
			initial={{ opacity: showAnimation ? 0 : 1 }}
			animate={
				startAnimation && showAnimation
					? { opacity: 1, transitionEnd: { opacity: 1 } }
					: ''
			}
			onAnimationComplete={() => {
				if (triggerAnimationEnd) {
					animationEndCallback(false);
				}
			}}
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

export default FadeInSpan;
