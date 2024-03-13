const OutlineButton = props => {
    const { children, className = '', id, clickHandler, size = 'base' } = props;

    let baseStyle =
        'font-semibold bg-transparent text-neutral-200 shadow-sm hover:bg-neutral-300 hover:text-neutral-800 focus-visible:outline shadow-sm ring-2 ring-inset ring-neutral-400 ';
    switch (size) {
        case 'xs':
            baseStyle += ' px-2 py-1 text-xs';
            break;
        case 'sm':
            baseStyle += ' px-2 py-1 text-sm';
            break;
        case 'lg':
            baseStyle += ' px-3 py-2 text-sm';
            break;
        case 'xl':
            baseStyle += ' px-3.5 py-2.5 text-sm';
            break;
        default:
            baseStyle += ' px-2.5 py-1.5 text-sm';
    }

    return (
        <button
            type='button'
            className={` ${baseStyle} ${className}`}
            id={id}
            onClick={clickHandler}
        >
            {children}
        </button>
    );
};

export default OutlineButton;
