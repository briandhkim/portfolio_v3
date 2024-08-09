import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialLinks } from '../../../../util/constants';

const SocialSticky = () => {
	return (
		<div className='flex justify-evenly min-h-56 px-8 bg-neutral-950'>
			{socialLinks.map(link => (
				<div key={link.name} className='my-3 mx-4'>
					<a
						className='hover:text-blue-400 cursor-pointer'
						target='_blank'
						href={link.href}
						rel='noreferrer'
						title={link.name}
					>
						<FontAwesomeIcon className='fa-2xl' icon={link.icon} />
					</a>
				</div>
			))}
		</div>
	);
};

export default SocialSticky;
