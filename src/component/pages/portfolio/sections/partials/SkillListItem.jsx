const SkillListItem = ({ icon, name }) => {
	return (
		<div className='flex items-center'>
			<div className='h-4 w-4 inline-block mr-2'>{icon}</div>
			<span className='text-sm'>{name}</span>
		</div>
	);
};

export default SkillListItem;
