import {
	Description,
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from '@headlessui/react';
import SolidButton from '../../../../elements/buttons/SolidButton';
import bh_client_img from '../../../../../assets/images/bh-client-page.png';
import { AnimatePresence, motion } from 'framer-motion';

const UserInterfaceModal = ({ isOpen, setIsOpen }) => {
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
						transition={{ duration: 0.4 }}
						className='fixed inset-0 w-screen overflow-y-auto p-4'
					>
						<div className='flex min-h-full items-center justify-center p-4'>
							<DialogPanel className='max-w-5xl space-y-4 rounded-xl border border-neutral-800 bg-[#f7f0eb] p-12 text-neutral-700'>
								<DialogTitle className='font-sans text-2xl font-bold'>
									Patient UI
								</DialogTitle>
								<Description></Description>
								<div>
									<img
										src={bh_client_img}
										alt='BetterHelp client UI'
										className=''
									/>
								</div>

								<div className='flex justify-end gap-4 px-8 pt-8'>
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

export default UserInterfaceModal;
