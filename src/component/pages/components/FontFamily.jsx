import Heading from '../../elements/Heading';
import DividerTitleLeft from '../../layout/DividerTitleLeft';

const FontFamily = () => {
    // const fonts = ['font-sans', 'font-serif', 'font-mono'];
    const fonts = [
        {
            category: 'sans',
            family: 'Ubuntu',
        },
        {
            category: 'serif',
            family: 'Merriweather',
        },
        {
            category: 'mono',
            family: 'Roboto Mono',
        },
    ];

    return (
        <>
            <DividerTitleLeft title='Font family' />
            <div className='mt-5 mb-10 *:mb-4'>
                {fonts.map(font => (
                    <>
                        <Heading
                            key={font.category}
                            level='h4'
                            className={`font-${font.category}`}
                        >
                            <span className='capitalize underline'>
                                {font.category}
                            </span>
                            : {font.family}
                        </Heading>
                        <p className='text-lg sm:text-xl'>
                            The quick brown fox jumps over the lazy dog.
                        </p>
                    </>
                ))}
            </div>
        </>
    );
};

export default FontFamily;
