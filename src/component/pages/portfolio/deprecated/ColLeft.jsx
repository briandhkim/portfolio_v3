import Heading from '../../../elements/Heading';
import FooterLarge from './FooterLarge';
import SocialVertical from './SocialVertical';

const ColLeft = () => {
    return (
        <div className='col-span-3 md:col-span-1 md:border-r-2 md:border-l-4 border-neutral-200 grid grid-rows-3'>
            <div className='row-span-2 border-b-2 border-neutral-200 flex justify-center items-center'>
                <Heading
                    level='h1'
                    className='font-serif underline decoration-4 underline-offset-2'
                >
                    About
                </Heading>
            </div>
            <div className='hidden md:grid grid-cols-3'>
                <div className='col-span-2 border-r-2 border-neutral-200'>
                    <FooterLarge />
                </div>
                <div className='border-l-2 border-neutral-200'>
                    <SocialVertical />
                </div>
            </div>
        </div>
    );
};

export default ColLeft;
