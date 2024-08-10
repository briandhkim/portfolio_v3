import Heading from '../../../elements/Heading';
import {
	faCodeBranch,
	faCodeMerge,
	faTimeline,
} from '@fortawesome/free-solid-svg-icons';
import SectionLayout from '../../../layout/SectionLayout';
import GenericLink from '../../../elements/GenericLink';
import ExperienceItem from './partials/ExperienceItem';

const Experience = () => {
	const timeline = [
		{
			id: 1,
			type: 'current',
			content: 'Engineering Team',
			date: 'Feb. 2023',
			datetime: '2023-02',
			dateStart: new Date('2023-02-02'),
			dateEnd: new Date('2024-04-02'),
			icon: faCodeBranch,
			iconBackground: 'bg-primary-400',
			techList: [
				'JavaScript',
				'React',
				'Next.js',
				'PHP',
				'Laravel',
				'MySQL',
				'PostgreSQL',
				'jQuery',
				'Tailwind CSS',
				'Bootstrap',
				'Docker',
				'Bamboo',
			],
			honors: ['The 6th Person of the Year'],
			descriptionItems: [
				'Created proof of concept applications for the latest organization initiatives using React, Next.js, Laravel, and PostgreSQL',
				'Built internal tools designed to enhance workflow efficiency across multiple departments',
				'Identified areas for optimization within the web application and successfully implemented solutions',
				'Oversaw major version releases, identifying and resolving critical issues prior to the release and ensuring deployments without major outage',
				'Collaborated with various departments including engineering, product, client success, and implementation to develop various quality-of-life solutions',
				'Provided guidance for other developers and various groups outside of the engineering dept. on troubleshooting, project planning, feature development, and more',
			],
		},
		{
			id: 2,
			type: 'past',
			content: 'Service Team',
			date: 'Jul. 2022',
			datetime: '2022-07',
			dateStart: new Date('2022-07-02'),
			dateEnd: new Date('2023-02-02'),
			icon: faCodeMerge,
			iconBackground: 'bg-neutral-400',
			techList: [
				'JavaScript',
				'PHP',
				'Laravel',
				'MySQL',
				'PostgreSQL',
				'Tailwind CSS',
				'Ruby',
				'Rails',
				'Docker',
			],
			descriptionItems: [
				'Participated in planning, designing, and developing of new microservice applications',
				'Rapidly learned to develop with new language and framework, Ruby on Rails',
			],
		},
		{
			id: 3,
			type: 'past',
			content: 'PDT, Deployment Specialist',
			date: 'Jul. 2021',
			datetime: '2021-07',
			dateStart: new Date('2021-07-02'),
			dateEnd: new Date('2022-07-02'),
			icon: faCodeMerge,
			iconBackground: 'bg-neutral-400',
			techList: [
				'JavaScript',
				'jQuery',
				'PHP',
				'MySQL',
				'Bootstrap',
				'Docker',
				'Bamboo',
			],
			honors: ['All Star Engineering'],
			descriptionItems: [
				'Oversaw major version releases, assessing risks and potential point of failures to intercept issues before they affect production services',
				'Managed resolution of critical error events requiring in-depth analysis of the core application service, providing prompt, effective solutions and root cause analysis (RCA) reports detailing long-term, preventative measures',
				'Identified common points of failure within the code and organizational workflow, proactively collaborating with various departments to address and improve identified deficiencies',
			],
		},
		{
			id: 4,
			type: 'past',
			content: 'Production Defect Team (PDT)',
			date: 'Oct. 2020',
			datetime: '2020-10',
			dateStart: new Date('2020-10-02'),
			dateEnd: new Date('2021-07-02'),
			icon: faCodeMerge,
			iconBackground: 'bg-neutral-400',
			techList: [
				'JavaScript',
				'jQuery',
				'PHP',
				'MySQL',
				'Bootstrap',
				'Bamboo',
			],
			descriptionItems: [
				'Provided rapid resolution to production-level defects to minimize disruption to business operations',
				'Triaged a diverse set of problems raised by the clients and identified by the QA team to ensure efficient defect resolution',
				'Guided new and junior developers in effectively navigating the codebase and presenting appropriate resolutions to new challenges',
				'Offered short-term resolutions for urgent, critical defects while devising long-term solutions to minimize recurring issues',
			],
		},
		{
			id: 5,
			type: 'past',
			content: 'Implementation Team',
			date: 'Feb. 2019',
			datetime: '2019-02',
			dateStart: new Date('2019-02-02'),
			dateEnd: new Date('2020-10-02'),
			icon: faCodeMerge,
			iconBackground: 'bg-neutral-400',
			techList: [
				'JavaScript',
				'jQuery',
				'Vue.js',
				'PHP',
				'Laravel',
				'MySQL',
				'Tailwind CSS',
				'Bootstrap',
			],
			descriptionItems: [
				'Upgraded the encryption algorithm used by the core application to enforce secure data storage',
				'Lead frontend development of a new, single-page application (SPA) using Vue.js focused on versatile user experience',
				'Developed applications with PHP Laravel framework, enforcing test-driven development (TDD) methodology',
				'Quickly adapted to working with various frameworks/libraries including jQuery, Vue.js, Bootstrap, Tailwind, and Laravel',
				'Created clean, reusable code for the frontend and the backend development projects',
			],
		},
		{
			id: 6,
			type: 'past',
			content: 'UX Team',
			date: 'Jul. 2018',
			datetime: '2018-07',
			dateStart: new Date('2018-07-02'),
			dateEnd: new Date('2019-02-02'),
			icon: faCodeMerge,
			iconBackground: 'bg-neutral-400',
			techList: ['JavaScript', 'jQuery', 'PHP', 'MySQL', 'Bootstrap'],
			honors: ['Rookie of the Year'],
			descriptionItems: [
				'Enriched the consumer facing user interfaces with web accessibility improvements',
				'Developed intuitive, responsive user interfaces to create effective and learnable user experience',
			],
		},
	];

	return (
		<>
			<SectionLayout sectionTitle='Experience' dividerIcon={faTimeline}>
				<div className='grid gap-4 mx-0.5 sm:mx-4 sm:grid-cols-12'>
					<div className='col-span-12'>
						<div className='text-left mb-4 '>
							<Heading level='h3' size='small'>
								<GenericLink url='https://besmartee.com'>
									BeSmartee
								</GenericLink>
							</Heading>
							<span className='text-sm font-bold tracking-wider uppercase text-neutral-400'>
								Full stack software engineer
							</span>
							<span className='block text-sm font-medium tracking-wider uppercase text-neutral-400'>
								<time dateTime='2018-07'>Jul. 2018</time> -{' '}
								<time dateTime='2024-04'>Apr. 2024</time>
							</span>
						</div>
					</div>
					<div className='relative col-span-12 space-y-6 px-0.5 sm:px-4'>
						<div className='flow-root'>
							<ul role='list' className='-mb-8'>
								{timeline.map((event, eventIdx) => (
									<li key={event.id}>
										<ExperienceItem
											history={event}
											showLeftBar={
												eventIdx !== timeline.length - 1
											}
										/>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</SectionLayout>
		</>
	);
};

export default Experience;
