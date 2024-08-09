import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Heading from '../../elements/Heading';
import DividerIcon from '../../layout/DividerIcon';
import FontFamily from './FontFamily';
import FontSize from './FontSize';
import {
	faCubesStacked,
	faFont,
	faIcons,
} from '@fortawesome/free-solid-svg-icons';
import TextColor from './TextColor';
import Icons from './Icons';
import FontWeight from './FontWeight';
import Buttons from './Buttons';
import MaskedText from './MaskedText';

const Components = () => {
	/**
	 * todos:
	 * links - decoration color
	 * https://tailwindcss.com/docs/text-decoration-color
	 */

	return (
		<div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8 pt-10 mb-28'>
			{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
			<div className='mx-auto max-w-5xl'>
				<Heading level='h1' className='mb-14 text-neutral-100'>
					Component library
				</Heading>

				{/* <DividerTitleLeft title='Typography' /> */}

				<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
					<div className=''>
						<Heading
							level='h2'
							className='text-neutral-300 md:sticky md:top-0'
						>
							Typography
						</Heading>
					</div>
					<div className='col-span-2 mt-14 md:mt-3 md:pr-5 '>
						<FontSize />
						<FontFamily />
						<TextColor />
						<FontWeight />
					</div>
					<div className='col-span-3 mb-12 md:mb-18'>
						<DividerIcon
							icon={
								<FontAwesomeIcon
									className='h-5 w-5 text-neutral-200'
									icon={faFont}
								/>
							}
						/>
					</div>
					{/* end typography */}

					<div>
						<Heading
							level='h2'
							className='text-neutral-300 md:sticky md:top-0'
						>
							Elements
						</Heading>
					</div>
					<div className='col-span-2 mt-14 md:mt-3'>
						<Buttons />
						<MaskedText />
					</div>
					<div className='col-span-3 mb-12 md:mb-18'>
						<DividerIcon
							icon={
								<FontAwesomeIcon
									className='h-5 w-5 text-neutral-200'
									icon={faCubesStacked}
								/>
							}
						/>
					</div>
					{/* end elements */}

					<div className=''>
						<Heading
							level='h2'
							className='text-neutral-300 md:sticky md:top-0'
						>
							Icons
						</Heading>
					</div>
					<div className=' col-span-2 mt-14 md:mt-3 md:pr-5 '>
						<Icons />
					</div>
					<div className=' col-span-3 mb-12 md:mb-18'>
						<DividerIcon
							icon={
								<FontAwesomeIcon
									className='h-5 w-5 text-neutral-200'
									icon={faIcons}
								/>
							}
						/>
					</div>
					{/* end icons */}
				</div>
			</div>
		</div>
	);
};

export default Components;
