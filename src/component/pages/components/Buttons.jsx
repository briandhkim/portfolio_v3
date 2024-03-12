import ButtonPrimary from '../../elements/buttons/ButtonPrimary';
import DividerTitleLeft from '../../layout/DividerTitleLeft';

const Buttons = () => {
    const sizes = ['xs', 'sm', 'base', 'lg', 'xl'];

    return (
        <>
            <DividerTitleLeft title='Buttons' />
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 mb-8 sm:px-6'>
                {sizes.map(size => (
                    <div key={size}>
                        <ButtonPrimary size={size} className='rounded'>
                            Primary {size}
                        </ButtonPrimary>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Buttons;
