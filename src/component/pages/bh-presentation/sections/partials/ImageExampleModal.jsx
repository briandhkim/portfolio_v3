import {
	Description,
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from '@headlessui/react';
import SolidButton from '../../../../elements/buttons/SolidButton';
import { AnimatePresence, motion } from 'framer-motion';

const ImageExampleModal = ({ isOpen, setIsOpen, feature }) => {
	const { name, description, imageSrc, imageAlt } = feature;

	return (
		<AnimatePresence>
			{isOpen && (
				<Dialog
					open={isOpen}
					onClose={() => setIsOpen(false)}
					className='relative z-50 focus:outline-none'
				>
					<DialogBackdrop className='fixed inset-0 bg-[#325343]/85' />
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
						className='fixed inset-0 w-screen overflow-y-auto p-4'
					>
						<div className='flex min-h-full items-center justify-center p-4'>
							<DialogPanel className='max-w-5xl space-y-4 rounded-xl border border-neutral-800 bg-[#f7f0eb] text-neutral-700 p-12'>
								<DialogTitle className='font-bold text-2xl font-sans'>
									{name}
								</DialogTitle>
								<Description></Description>
								<div className='flex justify-center'>
									<img
										src={imageSrc}
										alt={imageAlt}
										className='size-11/12  object-center shadow-2xl'
									/>
								</div>

								<div className='flex gap-4 pt-8 px-8 justify-end'>
									<SolidButton
										clickHandler={() => setIsOpen(false)}
										size='sm'
										className='rounded'
									>
										Close
									</SolidButton>
								</div>
							</DialogPanel>
						</div>
					</motion.div>
				</Dialog>
			)}
		</AnimatePresence>
	);
};

export default ImageExampleModal;
