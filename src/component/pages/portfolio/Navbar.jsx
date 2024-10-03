import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { socialLinksMap } from '../../../util/constants';
import GenericLink from '../../elements/GenericLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
	const navSocials = ['LinkedIn', 'GitHub', 'Resume', 'Schedule a call'];

	return (
		<Disclosure
			as='nav'
			className='sticky top-0 z-10 w-full animate-fade_in_slow border-neutral-200 bg-neutral-950 md:bg-neutral-950/[0.85]'
		>
			{({ open }) => (
				<>
					<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
						<div className='relative flex h-16 items-center justify-between'>
							<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
								{/* Mobile menu button*/}
								<DisclosureButton className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>
										Open main menu
									</span>
									{open ? (
										<XMarkIcon
											className='block h-6 w-6'
											aria-hidden='true'
										/>
									) : (
										<Bars3Icon
											className='block h-6 w-6'
											aria-hidden='true'
										/>
									)}
								</DisclosureButton>
							</div>
							<div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
								<div className='flex flex-shrink-0 items-center'>
									<div className='border-base-content text-base-content h-8 w-auto cursor-default border-2 px-1.5 py-0.5 text-xl font-semibold leading-6'>
										bdhk
									</div>
								</div>
								{/* <div className='hidden sm:ml-6 sm:block'>
                                    <div className='flex space-x-4'>
                                        {navigation.map(item => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-gray-900 text-white'
                                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={
                                                    item.current
                                                        ? 'page'
                                                        : undefined
                                                }
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div> */}
							</div>
							<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
								<div className='hidden space-x-6 pt-2 sm:flex'>
									{navSocials.map(navSocial => {
										const social =
											socialLinksMap.get(navSocial);
										return (
											<GenericLink
												className=''
												key={social.name}
												url={social.href}
												title={social.name}
											>
												<FontAwesomeIcon
													className='h-7 w-7'
													icon={social.icon}
												/>
											</GenericLink>
										);
									})}
								</div>
							</div>
						</div>
					</div>

					<DisclosurePanel className='sm:hidden'>
						<div className='space-y-1 bg-neutral-900 px-2 pb-3 pt-2'>
							{navSocials.map(navSocial => {
								const social = socialLinksMap.get(navSocial);
								return (
									<DisclosureButton
										key={social.name}
										as='a'
										href={social.href}
										target='_blank'
										className='block cursor-pointer px-3 py-2 font-mono underline decoration-primary-400 decoration-2 transition duration-200 ease-in-out hover:text-primary-400'
									>
										<FontAwesomeIcon
											icon={social.icon}
											className='mr-2'
										/>
										{social.name}
									</DisclosureButton>
								);
							})}
						</div>
					</DisclosurePanel>
				</>
			)}
		</Disclosure>
	);
};

export default Navbar;
