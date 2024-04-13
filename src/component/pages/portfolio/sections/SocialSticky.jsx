import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialSticky = () => {
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
