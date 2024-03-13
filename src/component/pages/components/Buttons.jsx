import OutlineButton from '../../elements/buttons/OutlineButton';
import SolidButton from '../../elements/buttons/SolidButton';
import DividerTitleLeft from '../../layout/DividerTitleLeft';

const Buttons = () => {
    const sizes = ['xs', 'sm', 'base', 'lg', 'xl'];

    return (
        <>
            <DividerTitleLeft title='Buttons' />
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4 mb-8 sm:px-6'>
                {sizes.map(size => (
                    <div key={size}>
                        <SolidButton size={size} className='rounded'>
                            Solid {size}
                        </SolidButton>
                    </div>
                ))}

                <div className='md:col-span-3'></div>

                {sizes.map(size => (
                    <div key={size}>
                        <OutlineButton size={size} className='rounded'>
                            Outline {size}
                        </OutlineButton>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Buttons;
