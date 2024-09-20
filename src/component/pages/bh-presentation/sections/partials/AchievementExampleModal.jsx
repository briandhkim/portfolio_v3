import {
	Description,
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from '@headlessui/react';
import SolidButton from '../../../../elements/buttons/SolidButton';

const AchievementExampleModal = ({ isOpen, setIsOpen, feature }) => {
	const { name, description, imageSrc, imageAlt } = feature;

	return (
		<Dialog
			open={isOpen}
			onClose={() => setIsOpen(false)}
			className='relative z-50 focus:outline-none'
		>
			<DialogBackdrop className='fixed inset-0 bg-black/85' />
			<div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
				<DialogPanel className='max-w-5xl space-y-4 rounded-xl border border-neutral-800 bg-neutral-950 p-12'>
					<DialogTitle className='font-bold text-2xl font-sans'>
						{name}
					</DialogTitle>
					<Description></Description>
					<div>
						<img src={imageSrc} alt={imageAlt} className='' />
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
		</Dialog>
	);
};

export default AchievementExampleModal;
