import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialVertical = () => {
	const socialLinks = [
		{
			name: 'LinkedIn',
			icon: faLinkedin,
			href: 'https://www.linkedin.com/in/bdhk/',
		},
		{
			name: 'GitHub',
			icon: faGithub,
			href: 'https://github.com/briandhkim',
		},
		{
			name: 'Resume',
			icon: faFilePdf,
			// href: '/docs/bdhk_resume.pdf',
			href: '#',
		},
		{
			name: 'Current location',
			icon: faMapLocationDot,
			href: 'https://maps.app.goo.gl/HuXK2qSdAmySdZrb9',
		},
	];

	return (
		<div className='grid place-items-center min-h-64'>
			{socialLinks.map(link => (
				<div key={link.name} className='my-3'>
					<a
						className='hover:text-blue-400 cursor-pointer'
						target='_blank'
						href={link.href}
						rel='noreferrer'
						title={link.name}
					>
						<FontAwesomeIcon className='fa-xl' icon={link.icon} />
					</a>
				</div>
			))}
		</div>
	);
};

export default SocialVertical;
