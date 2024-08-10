const TextEmphasized = ({ className = '', children }) => {
	return (
		<strong className={`${className} font-extrabold text-neutral-50`}>
			{children}
		</strong>
	);
};

export default TextEmphasized;
