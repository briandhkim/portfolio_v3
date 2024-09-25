import {
	faPersonCane,
	faTable,
	faUniversalAccess,
	faUserClock,
} from '@fortawesome/free-solid-svg-icons';
import SectionLayout from '../../../layout/SectionLayout';
import Heading from '../../../elements/Heading';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import UsabilityModal from './partials/UsabilityModal';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import GenericLink from '../../../elements/GenericLink';
import UserInterfaceModal from './partials/UserInterfaceModal';

const UiUpdate = () => {
	const descContainer = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				duration: 1.25,
				staggerChildren: 0.3,
			},
		},
	};

	const descItem = {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { ease: 'easeIn' } },
	};

	const [isOpenUsabilityModal, setIsOpenUsabilityModal] = useState(false);
	const [isOpenUiModal, setIsOpenUiModal] = useState(false);

	return (
		<SectionLayout
			sectionTitle='UI Update'
			dividerIcon={faTable}
			dividerBgColor='bg-[#325343]'
		>
			<div className='grid grid-cols-12 mx-0.5 sm:mx-4 space-y-8 sm:space-y-12'>
				<div className='col-span-12'>
					<div className='text-left mb-4'>
						<Heading level='h3' size='small'>
							Initial impression
						</Heading>
					</div>
					<div className='font-mono text-sm sm:text-base md:text-lg'>
						<motion.ul
							variants={descContainer}
							initial='hidden'
							animate='show'
							className='fa-ul space-y-3'
						>
							<motion.li variants={descItem} className=''>
								<span className='fa-li text-neutral-400'>
									<FontAwesomeIcon icon={faPersonCane} />
								</span>
								The{' '}
								<span
									onClick={() => setIsOpenUiModal(true)}
									className='cursor-pointer underline decoration-2 decoration-primary-500 transition ease-in-out duration-200 hover:text-primary-500'
								>
									user page
								</span>{' '}
								feels dated, particularly in contrast to the{' '}
								<GenericLink url='https://betterhelp.com'>
									company's website
								</GenericLink>
								.
							</motion.li>
							<motion.li variants={descItem} className=''>
								<span className='fa-li text-neutral-400'>
									<FontAwesomeIcon icon={faUniversalAccess} />
								</span>
								The page feels disorganized and confusing.
							</motion.li>
						</motion.ul>
					</div>
				</div>
				<div className='col-span-12'>
					<div className='text-left mb-4'>
						<Heading level='h3' size='small'>
							Why
						</Heading>
					</div>
					<div className='font-mono text-sm sm:text-base md:text-lg'>
						<motion.ul
							variants={descContainer}
							initial='hidden'
							animate='show'
							className='fa-ul space-y-3'
						>
							<motion.li variants={descItem} className=''>
								<span className='fa-li text-neutral-400'>
									<FontAwesomeIcon icon={faUserClock} />
								</span>
								First impressions are important.
							</motion.li>
							<motion.li variants={descItem} className=''>
								<span className='fa-li text-neutral-400'>
									<FontAwesomeIcon icon={faCircleQuestion} />
								</span>
								<span
									onClick={() =>
										setIsOpenUsabilityModal(true)
									}
									className='cursor-pointer underline decoration-2 decoration-primary-500 transition ease-in-out duration-200 hover:text-primary-500'
								>
									Don't make users think!
								</span>
							</motion.li>
						</motion.ul>
					</div>
				</div>
				<div className='dialogue-containers'>
					<UsabilityModal
						isOpen={isOpenUsabilityModal}
						setIsOpen={setIsOpenUsabilityModal}
					/>
					<UserInterfaceModal
						isOpen={isOpenUiModal}
						setIsOpen={setIsOpenUiModal}
					/>
				</div>
			</div>
		</SectionLayout>
	);
};

export default UiUpdate;
