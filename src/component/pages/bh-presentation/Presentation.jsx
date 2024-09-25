import { useState } from 'react';
import Achievements from './sections/Achievements';
import Intro from './sections/Intro';
import Labels from './sections/Labels';
import UiUpdate from './sections/UiUpdate';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faTable, faTags } from '@fortawesome/free-solid-svg-icons';

const Presentation = () => {
	const PAGE_INTRO = 'intro';
	const PAGE_UI = 'ui';
	const PAGE_ACHIEVEMENTS = 'achievements';
	const PAGE_LABELS = 'labels';

	const navButtons = [
		{
			label: 'UI Update page',
			icon: faTable,
			id: PAGE_UI,
		},
		{
			label: 'Achievement page',
			icon: faAward,
			id: PAGE_ACHIEVEMENTS,
		},
		{
			label: 'Labels page',
			icon: faTags,
			id: PAGE_LABELS,
		},
	];

	const [currentPage, setCurrentPage] = useState(PAGE_INTRO);

	const startPresentation = () => {
		setCurrentPage(PAGE_UI);
	};

	const updatePage = page => {
		setCurrentPage(page);
	};

	return (
		<div className='bg-[#325343]'>
			<div className='mx-auto max-w-5xl px-2 sm:px-6 lg:px-8'>
				<div className=''>
					{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
					{/* May need to remove max-h-svh here */}
					<div className='mx-auto px-4 sm:px-6 lg:px-8 relative'>
						<AnimatePresence mode='wait'>
							{currentPage === PAGE_INTRO && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 1 }}
								>
									<Intro startHandler={startPresentation} />
								</motion.div>
							)}
							{currentPage !== PAGE_INTRO && (
								<div
									className={`${currentPage === PAGE_ACHIEVEMENTS || currentPage === PAGE_LABELS ? 'py-8 sm:py-10 md:py-14' : ''}`}
								>
									<div className='fixed rounded-xl px-4 py-3 z-10 right-6 bottom-10 bg-neutral-800 space-x-4'>
										{navButtons.map(nav => (
											<button
												key={nav.id}
												onClick={() =>
													updatePage(nav.id)
												}
											>
												<FontAwesomeIcon
													className={`fa-2xl transition duration-300 hover:text-primary-500 ${currentPage === nav.id ? 'text-primary-400' : ''}`}
													icon={nav.icon}
												/>
												<span className='sr-only'>
													{nav.label}
												</span>
											</button>
										))}
									</div>
									{currentPage === PAGE_UI && (
										<motion.section
											initial={{
												opacity: 0,
											}}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											transition={{ duration: 1.5 }}
											id={PAGE_UI}
											className={`${currentPage === PAGE_UI ? 'min-h-screen content-center' : ''} grid grid-cols-1 md:grid-cols-3 gap-4 pt-12 md:pt-32`}
										>
											<UiUpdate />
										</motion.section>
									)}
									{currentPage === PAGE_ACHIEVEMENTS && (
										<motion.section
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											transition={{ duration: 2 }}
											id={PAGE_ACHIEVEMENTS}
											className='grid grid-cols-1 md:grid-cols-3 gap-4'
										>
											<Achievements />
										</motion.section>
									)}
									{currentPage === PAGE_LABELS && (
										<motion.section
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											transition={{ duration: 2 }}
											id={PAGE_LABELS}
											className='grid grid-cols-1 md:grid-cols-3 gap-4'
										>
											<Labels />
										</motion.section>
									)}
								</div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Presentation;
