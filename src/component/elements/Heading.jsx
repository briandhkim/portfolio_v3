const Heading = props => {
    const { children, className = '', level = 'h1' } = props;

    return (
        <>
            {level === 'h1' && (
                <h1 className={`${className} text-3xl sm:text-4xl md:text-5xl`}>
                    {children}
                </h1>
            )}
            {level === 'h2' && (
                <h2 className={`${className} text-2xl sm:text-3xl md:text-4xl`}>
                    {children}
                </h2>
            )}
            {level === 'h3' && (
                <h3 className={`${className} text-xl sm:text-2xl md:text-3xl`}>
                    {children}
                </h3>
            )}
            {level === 'h4' && (
                <h4 className={`${className} text-lg sm:text-xl md:text-2xl`}>
                    {children}
                </h4>
            )}
        </>
    );
};

export default Heading;
