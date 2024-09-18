const GenericLink = props => {
	const {
		children,
		url = null,
		className = '',
		target = '_blank',
		title = null,
	} = props;
	return (
		<a
			href={url}
			className={`${className} underline cursor-pointer transition ease-in-out duration-200 hover:text-primary-400 decoration-2 decoration-primary-400`}
			target={target}
			rel='noreferrer'
			title={title}
		>
			{children}
		</a>
	);
};

export default GenericLink;
