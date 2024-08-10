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
import CssIcon from '../component/icons/CssIcon';
import HtmlIcon from '../component/icons/HtmlIcon';

// todo: add typescript
// todo: add postgresql
export const skillList = [
	{
		name: 'JavaScript',
		icon: <JavaScriptIcon />,
		category: 'Development',
		type: 'Language',
	},
	{
		name: 'jQuery',
		icon: <JQueryIcon />,
		category: 'Development',
		type: 'Framework',
	},
	{
		name: 'Vue.js',
		icon: <VueIcon />,
		category: 'Development',
		type: 'Framework',
	},
	{
		name: 'React',
		icon: <ReactIcon />,
		category: 'Development',
		type: 'Framework',
	},
	{
		name: 'Next.js',
		icon: <NextIcon />,
		category: 'Development',
		type: 'Framework',
	},
	{
		name: 'PHP',
		icon: <PhpIcon />,
		category: 'Development',
		type: 'Language',
	},
	{
		name: 'Laravel',
		icon: <LaravelIcon />,
		category: 'Development',
		type: 'Framework',
	},
	{
		name: 'MySQL',
		icon: <MySqlIcon />,
		category: 'Development',
		type: 'Database',
	},
	{
		name: 'Tailwind CSS',
		icon: <TailwindIcon />,
		category: 'Development',
		type: 'Framework',
	},
	{
		name: 'Bootstrap',
		icon: <BootstrapIcon />,
		category: 'Development',
		type: 'Framework',
	},
	{
		name: 'Ruby',
		icon: <RubyIcon />,
		category: 'Development',
		type: 'Language',
	},
	{
		name: 'Ruby on Rails',
		icon: <RailsIcon />,
		category: 'Development',
		type: 'Framework',
	},
	{
		name: 'Git',
		icon: <GitIcon />,
		category: 'Software & Tools',
		type: 'Tool',
	},
	{
		name: 'GitHub',
		icon: <GitHubIcon />,
		category: 'Software & Tools',
		type: 'Tool',
	},
	{
		name: 'BitBucket',
		icon: <BitBucketIcon />,
		category: 'Software & Tools',
		type: 'Tool',
	},
	{
		name: 'Bamboo',
		icon: <BambooIcon />,
		category: 'Software & Tools',
		type: 'Tool',
	},
	{
		name: 'Jira',
		icon: <JiraIcon />,
		category: 'Software & Tools',
		type: 'Tool',
	},
	{
		name: 'Confluence',
		icon: <ConfluenceIcon />,
		category: 'Software & Tools',
		type: 'Tool',
	},
	{
		name: 'New Relic',
		icon: <NewRelicIcon />,
		category: 'Software & Tools',
		type: 'Tool',
	},
	{
		name: 'Postman',
		icon: <PostmanIcon />,
		category: 'Software & Tools',
		type: 'Tool',
	},
	{
		name: 'Chrome DevTools',
		icon: <ChromeIcon />,
		category: 'Software & Tools',
		type: 'Tool',
	},
	{
		name: 'PhpStorm',
		icon: <PhpStormIcon />,
		category: 'Software & Tools',
		type: 'IDE',
	},
	{
		name: 'VS Code',
		icon: <VsCodeIcon />,
		category: 'Software & Tools',
		type: 'IDE',
	},
	{
		name: 'Docker',
		icon: <DockerIcon />,
		category: 'Software & Tools',
		type: 'Tool',
	},
	{
		name: 'Materialize CSS',
		icon: <MaterializeCssIcon />,
		category: 'Development',
		type: 'Framework',
	},
	{
		name: 'PostgreSQL',
		icon: <PostgreSqlIcon />,
		category: 'Development',
		type: 'Database',
	},
	{
		name: 'CSS',
		icon: <CssIcon />,
		category: 'Development',
		type: 'Language',
	},
	{
		name: 'HTML',
		icon: <HtmlIcon />,
		category: 'Development',
		type: 'Language',
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
