import so_tags from '../../../../../assets/images/so_tags.png';
import lf_tags from '../../../../../assets/images/lf_tags.png';
import i_tags from '../../../../../assets/images/i_tags.png';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { classNames } from '../../../../../util/helpers';
import ImageExampleModal from './ImageExampleModal';
import useAnimateOnScreen from '../../../../../hooks/useAnimateOnScreen';

const LabelExamples = () => {
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
			name: 'StackOverflow',
			description: 'Tags based on variety of programming topics',
			imageSrc: so_tags,
			imageAlt: 'StackOverflow tag system',
		},
		{
			name: 'Last.fm',
			description: 'Tags based on music genre and more',
			imageSrc: lf_tags,
			imageAlt: 'Last.fm tag system',
		},
		{
			name: 'Imgur',
			description: 'Variety of tags created by the community',
			imageSrc: i_tags,
			imageAlt: 'Imgur tag system',
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
						className=' space-y-12'
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
									<p className='mt-2 text-xs font-mono'>
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
									<div className='aspect-h-2 aspect-w-5 overflow-hidden rounded-lg flex justify-center'>
										<img
											src={feature.imageSrc}
											alt={feature.imageAlt}
											className='object-fill object-center h-28 w-56 cursor-zoom-in'
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

export default LabelExamples;
