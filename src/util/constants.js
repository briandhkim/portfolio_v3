import JavaScriptIcon from '../component/icons/JavaScriptIcon';
import JQueryIcon from '../component/icons/JQueryIcon';
import VueIcon from '../component/icons/VueIcon';
import ReactIcon from '../component/icons/ReactIcon';
import NextIcon from '../component/icons/NextIcon';
import PhpIcon from '../component/icons/PhpIcon';
import LaravelIcon from '../component/icons/LaravelIcon';
import MySqlIcon from '../component/icons/MySqlIcon';
import TailwindIcon from '../component/icons/TailwindIcon';
import BootstrapIcon from '../component/icons/BootstrapIcon';
import RailsIcon from '../component/icons/RailsIcon';
import RubyIcon from '../component/icons/RubyIcon';
import GitIcon from '../component/icons/GitIcon';
import GitHubIcon from '../component/icons/GitHubIcon';
import BitBucketIcon from '../component/icons/BitBucketIcon';
import BambooIcon from '../component/icons/BambooIcon';
import JiraIcon from '../component/icons/JiraIcon';
import ConfluenceIcon from '../component/icons/ConfluenceIcon';
import NewRelicIcon from '../component/icons/NewRelicIcon';
import PostmanIcon from '../component/icons/PostmanIcon';
import ChromeIcon from '../component/icons/ChromeIcon';
import PhpStormIcon from '../component/icons/PhpStormIcon';
import VsCodeIcon from '../component/icons/VsCodeIcon';
import DockerIcon from '../component/icons/DockerIcon';
import MaterializeCssIcon from '../component/icons/MaterializeCssIcon';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import PostgreSqlIcon from '../component/icons/PostgreSqlIcon';

// todo: add typescript
// todo: add postgresql
export const skillList = [
	{
		name: 'JavaScript',
		icon: <JavaScriptIcon />,
		category: 'Development',
	},
	{
		name: 'jQuery',
		icon: <JQueryIcon />,
		category: 'Development',
	},
	{
		name: 'Vue.js',
		icon: <VueIcon />,
		category: 'Development',
	},
	{
		name: 'React',
		icon: <ReactIcon />,
		category: 'Development',
	},
	{
		name: 'Next.js',
		icon: <NextIcon />,
		category: 'Development',
	},
	{
		name: 'PHP',
		icon: <PhpIcon />,
		category: 'Development',
	},
	{
		name: 'Laravel',
		icon: <LaravelIcon />,
		category: 'Development',
	},
	{
		name: 'MySQL',
		icon: <MySqlIcon />,
		category: 'Development',
	},
	{
		name: 'Tailwind CSS',
		icon: <TailwindIcon />,
		category: 'Development',
	},
	{
		name: 'Bootstrap',
		icon: <BootstrapIcon />,
		category: 'Development',
	},
	{
		name: 'Ruby',
		icon: <RubyIcon />,
		category: 'Development',
	},
	{
		name: 'Ruby on Rails',
		icon: <RailsIcon />,
		category: 'Development',
	},
	{
		name: 'Git',
		icon: <GitIcon />,
		category: 'Software & Tools',
	},
	{
		name: 'GitHub',
		icon: <GitHubIcon />,
		category: 'Software & Tools',
	},
	{
		name: 'BitBucket',
		icon: <BitBucketIcon />,
		category: 'Software & Tools',
	},
	{
		name: 'Bamboo',
		icon: <BambooIcon />,
		category: 'Software & Tools',
	},
	{
		name: 'Jira',
		icon: <JiraIcon />,
		category: 'Software & Tools',
	},
	{
		name: 'Confluence',
		icon: <ConfluenceIcon />,
		category: 'Software & Tools',
	},
	{
		name: 'New Relic',
		icon: <NewRelicIcon />,
		category: 'Software & Tools',
	},
	{
		name: 'Postman',
		icon: <PostmanIcon />,
		category: 'Software & Tools',
	},
	{
		name: 'Chrome DevTools',
		icon: <ChromeIcon />,
		category: 'Software & Tools',
	},
	{
		name: 'PhpStorm',
		icon: <PhpStormIcon />,
		category: 'Software & Tools',
	},
	{
		name: 'VS Code',
		icon: <VsCodeIcon />,
		category: 'Software & Tools',
	},
	{
		name: 'Docker',
		icon: <DockerIcon />,
		category: 'Software & Tools',
	},
	{
		name: 'Materialize CSS',
		icon: <MaterializeCssIcon />,
		category: 'Development',
	},
	{
		name: 'PostgreSQL',
		icon: <PostgreSqlIcon />,
		category: 'Development',
	},
];

export const skillListMap = new Map();
skillList.map(skill => {
	skillListMap.set(skill.name, skill);
});

export const socialLinks = [
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
