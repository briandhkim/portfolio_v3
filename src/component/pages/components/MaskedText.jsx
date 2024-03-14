import Spoiler from '../../elements/Spoiler';
import DividerTitleLeft from '../../layout/DividerTitleLeft';

const MaskedText = () => {
    return (
        <>
            <DividerTitleLeft title='Masked text' />
            <div className='mt-5 mb-10 pl-5'>
                <Spoiler text='This is a hidden text.' />
            </div>
        </>
    );
};

export default MaskedText;
