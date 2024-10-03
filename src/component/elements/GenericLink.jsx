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
			className={`${className} cursor-pointer underline decoration-primary-400 decoration-2 transition duration-200 ease-in-out hover:text-primary-400`}
			target={target}
			rel='noreferrer'
			title={title}
		>
			{children}
		</a>
	);
};

export default GenericLink;
