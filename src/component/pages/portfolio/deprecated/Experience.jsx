import Heading from '../../../elements/Heading';

const Experience = () => {
	return (
		<section className='px-4 py-5 sm:p-6'>
			<div className='grid gap-4 mx-4 sm:grid-cols-12'>
				<div className='col-span-12'>
					<div className='text-center sm:text-left mb-4 '>
						<Heading level='h2' className=''>
							BeSmartee
						</Heading>
						<span className='text-sm font-bold tracking-wider uppercase text-neutral-400'>
							Full stack software engineer
						</span>
					</div>
				</div>
				<div className='relative col-span-12 px-4 space-y-6'>
					<div className='col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300'>
						<div className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-400'>
							{/* <h3 className='text-xl font-semibold tracking-wide'>
                                Donec porta enim vel{' '}
                            </h3> */}
							<Heading
								level='h4'
								size='small'
								className='font-semibold'
							>
								Engineering Team
							</Heading>
							<time className='text-xs tracking-wide uppercase dark:text-neutral-400'>
								Dec 2020
							</time>
							<p className='mt-3'>
								Pellentesque feugiat ante at nisl efficitur, in
								mollis orci scelerisque. Interdum et malesuada
								fames ac ante ipsum primis in faucibus.
							</p>
						</div>
						<div className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-400'>
							<Heading
								level='h4'
								size='small'
								className='font-semibold'
							>
								Service Team
							</Heading>
							<time className='text-xs tracking-wide uppercase dark:text-neutral-400'>
								Jul 2019
							</time>
							<p className='mt-3'>
								Morbi vulputate aliquam libero non dictum.
								Aliquam sit amet nunc ut diam aliquet tincidunt
								nec nec dui. Donec mollis turpis eget egestas
								sodales.
							</p>
						</div>
						<div className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-400'>
							<Heading
								level='h4'
								size='small'
								className='font-semibold'
							>
								PDT, Deployment Specialist
							</Heading>
							<time className='text-xs tracking-wide uppercase dark:text-neutral-400'>
								Jan 2016
							</time>
							<p className='mt-3'>
								Suspendisse tincidunt, arcu nec faucibus
								efficitur, justo velit consectetur nisl, sit
								amet condimentum lacus orci nec purus. Mauris
								quis quam suscipit, vehicula felis id, vehicula
								enim.
							</p>
						</div>
						<div className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-400'>
							<Heading
								level='h4'
								size='small'
								className='font-semibold'
							>
								Production Defect Team (PDT)
							</Heading>
							<time className='text-xs tracking-wide uppercase dark:text-neutral-400'>
								Jan 2016
							</time>
							<p className='mt-3'>
								Suspendisse tincidunt, arcu nec faucibus
								efficitur, justo velit consectetur nisl, sit
								amet condimentum lacus orci nec purus. Mauris
								quis quam suscipit, vehicula felis id, vehicula
								enim.
							</p>
						</div>
						<div className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-400'>
							<Heading
								level='h4'
								size='small'
								className='font-semibold'
							>
								Implementation Team
							</Heading>
							<time className='text-xs tracking-wide uppercase dark:text-neutral-400'>
								Jan 2016
							</time>
							<p className='mt-3'>
								Suspendisse tincidunt, arcu nec faucibus
								efficitur, justo velit consectetur nisl, sit
								amet condimentum lacus orci nec purus. Mauris
								quis quam suscipit, vehicula felis id, vehicula
								enim.
							</p>
						</div>
						<div className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-400'>
							<Heading
								level='h4'
								size='small'
								className='font-semibold'
							>
								UX Team
							</Heading>
							<time className='text-xs tracking-wide uppercase dark:text-neutral-400'>
								Jan 2016
							</time>
							<p className='mt-3'>
								Suspendisse tincidunt, arcu nec faucibus
								efficitur, justo velit consectetur nisl, sit
								amet condimentum lacus orci nec purus. Mauris
								quis quam suscipit, vehicula felis id, vehicula
								enim.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
