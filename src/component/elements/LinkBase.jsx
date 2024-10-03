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
			className={`cursor-pointer underline hover:text-blue-400 ${className}`}
		>
			{children}
		</a>
	);
};

export default LinkBase;
