const Heading = props => {
	const { children, className = '', level = 'h1', size = '' } = props;

	return (
		<>
			{level === 'h1' && (
				<h1
					className={`${className} ${size === 'small' ? 'text-3xl sm:text-4xl md:text-5xl' : 'text-4xl sm:text-5xl md:text-6xl'}`}
				>
					{children}
				</h1>
			)}
			{level === 'h2' && (
				<h2
					className={`${className} ${size === 'small' ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-3xl sm:text-4xl md:text-5xl'}`}
				>
					{children}
				</h2>
			)}
			{level === 'h3' && (
				<h3
					className={`${className} ${size === 'small' ? 'text-xl sm:text-2xl md:text-3xl' : 'text-2xl sm:text-3xl md:text-4xl'}`}
				>
					{children}
				</h3>
			)}
			{level === 'h4' && (
				<h4
					className={`${className} ${size === 'small' ? 'text-lg sm:text-xl md:text-2xl' : 'sm:text2xl text-xl md:text-3xl'}`}
				>
					{children}
				</h4>
			)}
		</>
	);
};

export default Heading;
