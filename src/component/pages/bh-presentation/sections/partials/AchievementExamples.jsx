import lc_achievements from '../../../../../assets/images/lc_achievements.png';
import so_achievements from '../../../../../assets/images/so_achievements.png';
import steam_achievements from '../../../../../assets/images/steam_achievements.png';
import gh_achievements from '../../../../../assets/images/gh_achievements.png';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { classNames } from '../../../../../util/helpers';
import useAnimateOnScreen from '../../../../../hooks/useAnimateOnScreen';
import ImageExampleModal from './ImageExampleModal';

const AchievementExamples = () => {
	const descContainer = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				duration: 1.5,
				staggerChildren: 0.3,
			},
		},
	};
	const descItem = {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { ease: 'easeIn' } },
	};

	const features = [
		{
			name: 'Laracast',
			description: 'Activity based achievements',
			imageSrc: lc_achievements,
			imageAlt: 'Laracast achievement system',
		},
		{
			name: 'Steam',
			description: 'in-game achievements',
			imageSrc: steam_achievements,
			imageAlt: 'Steam achievement system',
		},
		{
			name: 'StackOverflow',
			description: 'Badges based on user achievements',
			imageSrc: so_achievements,
			imageAlt: 'Steam badge system',
		},
		{
			name: 'GitHub',
			description: 'Achievements defined by GitHub',
			imageSrc: gh_achievements,
			imageAlt: 'GitHub achievement system',
		},
	];

	const [showSection, sectionRef] = useAnimateOnScreen();

	const [modalFeature, setModalFeature] = useState(null);
	const [isOpenExampleModal, setIsOpenExampleModal] = useState(false);

	return (
		<div className='' ref={sectionRef}>
			{showSection && (
				<div className='mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8'>
					<motion.div
						variants={descContainer}
						initial='hidden'
						animate='show'
						className='space-y-12'
					>
						{features.map((feature, featureIdx) => (
							<motion.div
								key={feature.name}
								variants={descItem}
								className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8'
							>
								<div
									className={classNames(
										featureIdx % 2 === 0
											? 'lg:col-start-1'
											: 'lg:col-start-8 xl:col-start-9',
										'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4'
									)}
								>
									<h3 className='text-lg font-medium text-neutral-400'>
										{feature.name}
									</h3>
									<p className='mt-2 font-mono text-xs'>
										{feature.description}
									</p>
								</div>
								<div
									className={classNames(
										featureIdx % 2 === 0
											? 'lg:col-start-6 xl:col-start-5'
											: 'lg:col-start-1',
										'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8'
									)}
								>
									<div className='aspect-h-2 aspect-w-5 flex justify-center overflow-hidden rounded-lg'>
										<img
											src={feature.imageSrc}
											alt={feature.imageAlt}
											className='h-28 w-56 cursor-zoom-in object-fill object-center'
											onClick={() => {
												setModalFeature(feature);
												setIsOpenExampleModal(true);
											}}
										/>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
					{isOpenExampleModal && (
						<ImageExampleModal
							isOpen={isOpenExampleModal}
							setIsOpen={setIsOpenExampleModal}
							feature={modalFeature}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export default AchievementExamples;
