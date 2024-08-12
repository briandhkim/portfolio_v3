import Heading from '../../../elements/Heading';
import {
	faCodeBranch,
	faCodeMerge,
	faTimeline,
} from '@fortawesome/free-solid-svg-icons';
import SectionLayout from '../../../layout/SectionLayout';
import GenericLink from '../../../elements/GenericLink';
import ExperienceItem from './partials/ExperienceItem';
import TextEmphasized from '../../../elements/TextEmphasized';

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
				'jQuery',
				'React',
				'Next.js',
				'PHP',
				'Laravel',
				'MySQL',
				'PostgreSQL',
				'Tailwind CSS',
				'Bootstrap',
				'Docker',
				'Bamboo',
			],
			honors: ['The 6th Person of the Year'],
			descriptionItems: [
				<>
					Created proof-of-concept applications for the company’s V2
					initiatives using new technology stack:{' '}
					<TextEmphasized>React</TextEmphasized>,{' '}
					<TextEmphasized>Next.js</TextEmphasized>,{' '}
					<TextEmphasized>Laravel</TextEmphasized>, and{' '}
					<TextEmphasized>PostgreSQL</TextEmphasized>
				</>,
				<>
					Spearheaded internal tools development reducing redundant
					tasks for multiple stakeholders, increasing workflow
					efficiency by 99%
				</>,
				<>
					Diagnosed areas for optimization with the existing{' '}
					<TextEmphasized>PHP</TextEmphasized> codebase and
					implemented refactored solutions, decreasing runtime for
					some of the long running scripts from minutes to
					milliseconds
				</>,
				<>
					Collaborated with diverse stakeholder groups including
					engineering, product, client success, and more to adhere to
					intricate laws and compliance requirements pertaining to
					mortgage lending practice
				</>,
				<>
					Mentored developers as well as members outside of
					engineering department to strengthen interdepartmental
					rapport
				</>,
				<>
					Orchestrated resolutions of several critical incidents
					thereby saving relationship with the company’s top clients
				</>,
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
				<>
					Engineered new microservices utilizing{' '}
					<TextEmphasized>
						test-driven development (<abbr>TDD</abbr>)
					</TextEmphasized>{' '}
					across two different technology stacks:
					<TextEmphasized>Laravel</TextEmphasized> and{' '}
					<TextEmphasized>Ruby on Rails</TextEmphasized>
				</>,
				<>
					Reinforced development using{' '}
					<TextEmphasized>
						<abbr title='5 key principles of object-oriented-programming'>
							SOLID
						</abbr>
					</TextEmphasized>{' '}
					and{' '}
					<TextEmphasized>
						<abbr title="Don't repeat yourself">DRY</abbr>
					</TextEmphasized>{' '}
					principles
				</>,
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
				<>
					Supervised major version releases, assessing risks and
					potential points-of-failure to intercept issues before they
					impact production services
				</>,
				<>
					Introduced the deployment guideline with safeguards based on
					analysis of common, recurring problems, eliminating 100% of
					preventable defects and improving development standards
					across the entire engineering department
				</>,
				<>
					Facilitated onboarding of seven new developers for the
					engineering department
				</>,
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
				<>
					Triaged thousands of defect tickets to establish efficient
					resolution for high volume of system defects
				</>,
				<>
					Resolved hundreds of urgent, production-level defects
					minimizing outage incidents for critical business operations
				</>,
				<>
					Analyzed several critical, misguided issues and presented{' '}
					<TextEmphasized>
						root cause analysis (<abbr>RCA</abbr>)
					</TextEmphasized>{' '}
					to stakeholders, thereby averting lawsuits and saving
					relationships with top clients
				</>,
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
				<>
					Orchestrated the encryption algorithm upgrade used by the
					existing <TextEmphasized>PHP</TextEmphasized> application
					and attained seamless transition to stronger security
					standards
				</>,
				<>
					Lead frontend development of a new,{' '}
					<TextEmphasized>
						single-page application (
						<abbr title='single page application'>SPA</abbr>)
					</TextEmphasized>{' '}
					using <TextEmphasized>Vue.js</TextEmphasized> and{' '}
					<TextEmphasized>Tailwind CSS</TextEmphasized> focused on
					versatile user experience
				</>,
				<>
					Developed applications with{' '}
					<TextEmphasized>Laravel</TextEmphasized> framework,
					enforcing{' '}
					<TextEmphasized>
						<abbr title='test driven development'>TDD</abbr>
					</TextEmphasized>{' '}
					to create scalable codebase with zero reported bugs
				</>,
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
				<>
					Enriched the existing{' '}
					<TextEmphasized>jQuery</TextEmphasized> and{' '}
					<TextEmphasized>PHP</TextEmphasized> application with{' '}
					<TextEmphasized>
						web accessibility improvements
					</TextEmphasized>
				</>,
				<>
					Developed intuitive, responsive user interfaces to create
					effective and learnable user experience
				</>,
			],
		},
	];

	return (
		<SectionLayout sectionTitle='Experience' dividerIcon={faTimeline}>
			<div className='grid gap-4 mx-0.5 sm:mx-4 sm:grid-cols-12'>
				<div className='col-span-12'>
					<div className='text-left mb-4 '>
						<Heading level='h3' size='small'>
							<GenericLink url='https://besmartee.com'>
								BeSmartee
							</GenericLink>
						</Heading>
						<span className='text-xs sm:text-sm font-bold tracking-wider uppercase text-neutral-400'>
							Full stack software engineer
						</span>
						<span className='block text-xs sm:text-sm font-medium tracking-wider uppercase text-neutral-400'>
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
	);
};

export default Experience;
