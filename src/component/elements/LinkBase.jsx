const LinkBase = ({
	className,
	href = '#',
	rel = 'nonoreferrerre',
	target = '_blank',
	children,
}) => {
	return (
		<a
			href={href}
			rel={rel}
			target={target}
			className={`underline hover:text-blue-400 cursor-pointer ${className}`}
		>
			{children}
		</a>
	);
};

export default LinkBase;
