const SkillListItem = ({ icon, name }) => {
	return (
		<div className='flex items-center'>
			<div className='mr-2 inline-block h-4 w-4'>{icon}</div>
			<span className='text-xs sm:text-sm'>{name}</span>
		</div>
	);
};

export default SkillListItem;
