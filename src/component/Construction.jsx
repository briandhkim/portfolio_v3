import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import background from '../assets/images/homer.jpeg';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Heading from './elements/Heading';

const Construction = () => {
	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
			<div className='grid min-h-screen grid-cols-1 grid-rows-[1fr,auto,1fr]  lg:grid-cols-[max(50%,36rem),1fr]'>
				<header className='mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8'>
					<div className='select-none inline h-10 w-auto text-xl font-semibold px-1.5 py-0.5 border border-2 border-base-content text-base-content leading-6 cursor-default'>
						bdhk
					</div>
				</header>
				<main className='mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8'>
					<div className='max-w-lg'>
						<p className='text-base font-semibold leading-8 text-indigo-600'>
							hi
						</p>
						{/* <h1 className='mt-4 text-3xl font-bold tracking-tight text-neutral-100 sm:text-5xl'>
                            Coming "soon"
                        </h1> */}
						<Heading
							level='h1'
							className='text-neutral-100 mt-4 tracking-tight font-bold'
						>
							Coming "soon"
						</Heading>
						<p className='mt-6 text-base leading-7 '>
							Area under construction
						</p>
						<div className='mt-10'>
							<a
								href='https://www.linkedin.com/in/bdhk/'
								rel='noreferrer'
								className='text-sm font-semibold leading-7 underline text-neutral-100 hover:text-neutral-300 '
							>
								Linked
								<FontAwesomeIcon
									className='ml-[1.5px]'
									icon={faLinkedin}
								/>
								<FontAwesomeIcon
									className='ml-2'
									icon={faArrowUpRightFromSquare}
								/>
							</a>
						</div>
					</div>
				</main>
				<div className='hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block'>
					<img
						src={background}
						alt=''
						className='absolute inset-0 h-full w-full object-cover object-right'
					/>
				</div>
			</div>
		</>
	);
};

export default Construction;
