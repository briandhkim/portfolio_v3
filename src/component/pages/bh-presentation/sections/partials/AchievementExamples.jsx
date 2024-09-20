import { classNames } from '../../../../../util/helpers';
import lc_achievements from '../../../../../assets/images/lc_achievements.png';
import so_achievements from '../../../../../assets/images/so_achievements.png';
import steam_achievements from '../../../../../assets/images/steam_achievements.png';
import { useState } from 'react';
import AchievementExampleModal from './AchievementExampleModal';

const AchievementExamples = () => {
	const features = [
		{
			name: 'Laracast',
			description: 'Achievements from Laracast',
			imageSrc: lc_achievements,
			imageAlt: 'Laracast achievement system',
		},
		{
			name: 'Steam',
			description: 'Achievements from Steam',
			imageSrc: steam_achievements,
			imageAlt: 'Steam achievement system',
		},
		{
			name: 'StackOverflow',
			description: 'Badges from StackOverflow',
			imageSrc: so_achievements,
			imageAlt: 'Steam badge system',
		},
	];

	const [modalFeature, setModalFeature] = useState(null);
	const [isOpenExampleModal, setIsOpenExampleModal] = useState(false);

	return (
		<div className=''>
			<div className='mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8'>
				<div className=' space-y-16'>
					{features.map((feature, featureIdx) => (
						<div
							key={feature.name}
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
								<p className='mt-2 text-sm '>
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
						</div>
					))}
					{isOpenExampleModal && (
						<AchievementExampleModal
							isOpen={isOpenExampleModal}
							setIsOpen={setIsOpenExampleModal}
							feature={modalFeature}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default AchievementExamples;
