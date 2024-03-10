import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Heading from '../../elements/Heading';
import DividerIcon from '../../layout/DividerIcon';
import FontFamily from './FontFamily';
import FontSize from './FontSize';
import { faFont, faIcons } from '@fortawesome/free-solid-svg-icons';
import TextColor from './TextColor';

const Components = () => {
    return (
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10'>
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            <div className='mx-auto max-w-5xl'>
                <Heading level='h1' className='mb-14 text-neutral-100'>
                    Component library
                </Heading>

                {/* <DividerTitleLeft title='Typography' /> */}

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                    <div className=''>
                        <Heading level='h2' className='text-neutral-300'>
                            Typography
                        </Heading>
                    </div>

                    <div className='col-span-2 mt-14 sm:mt-3'>
                        <FontSize />

                        <FontFamily />
                        <TextColor />
                    </div>
                    <div className='col-span-3'>
                        <DividerIcon
                            icon={
                                <FontAwesomeIcon
                                    className='h-5 w-5 text-neutral-200'
                                    icon={faFont}
                                />
                            }
                        />
                    </div>

                    <div>
                        <Heading level='h2' className='text-neutral-300'>
                            Icons
                        </Heading>
                    </div>
                    <div className='col-span-2  mt-14 sm:mt-3'>
                        reserved for icons
                    </div>
                    <div className='col-span-3'>
                        <DividerIcon
                            icon={
                                <FontAwesomeIcon
                                    className='h-5 w-5 text-neutral-200'
                                    icon={faIcons}
                                />
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Components;
