import Heading from '../../elements/Heading';
import DividerTitleLeft from '../../layout/DividerTitleLeft';

const FontFamily = () => {
    const fonts = ['font-sans', 'font-serif', 'font-mono'];

    return (
        <>
            <DividerTitleLeft title='Font family' />
            <div className='mt-5 mb-10 *:mb-4'>
                {fonts.map(font => (
                    <Heading key={font} level='h4' className={font}>
                        <span className='capitalize'>{font}</span>: The quick
                        brown fox jumps over the lazy dog.
                    </Heading>
                ))}
            </div>
        </>
    );
};

export default FontFamily;
