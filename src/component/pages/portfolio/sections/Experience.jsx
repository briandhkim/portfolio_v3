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
				'New Relic',
			],
			honors: ['The 6th Person of the Year'],
			descriptionItems: [
				<>
					Led the frontend development for the company’s initiative to
					rebuild the legacy application using a modern tech stack:{' '}
					<TextEmphasized>React</TextEmphasized>,{' '}
					<TextEmphasized>Next.js</TextEmphasized>,{' '}
					<TextEmphasized>Laravel</TextEmphasized>, and{' '}
					<TextEmphasized>PostgreSQL</TextEmphasized>
				</>,
				<>
					Led the investigation and resolution of a critical data loss
					incident, delivering a{' '}
					<TextEmphasized>
						root cause analysis (
						<abbr title='root cause analysis'>RCA</abbr>)
					</TextEmphasized>{' '}
					and successfully recovering 100% of the missing documents
					from the server backup
				</>,
				<>
					Orchestrated the resolution of several critical incidents,
					successfully preserving relationships with the company’s top
					clients
				</>,
				<>
					Spearheaded internal tools development, streamlining
					processes and saving stakeholders weeks of redundant work
				</>,
				<>
					Diagnosed optimization opportunities in the{' '}
					<TextEmphasized>legacy PHP codebase</TextEmphasized> and
					implemented refactors, reducing runtime for long-running
					scripts from minutes to milliseconds
				</>,
				<>
					Collaborated with diverse stakeholder groups, including
					engineering, product, and client success, to ensure
					adherence to complex laws and compliance requirements
					related to mortgage lending practices
				</>,
				<>
					Mentored developers and non-engineering team members to
					strengthen interdepartmental relationships
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
				'New Relic',
			],
			descriptionItems: [
				<>
					Developed new{' '}
					<TextEmphasized>microservice REST APIs</TextEmphasized>{' '}
					using{' '}
					<TextEmphasized>
						test-driven development (<abbr>TDD</abbr>)
					</TextEmphasized>{' '}
					across two different technology stacks:{' '}
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
				'New Relic',
			],
			honors: ['All Star Engineering'],
			descriptionItems: [
				<>
					Directed the resolution of highly urgent incidents, often
					requiring close collaboration with a diverse range of
					stakeholders
				</>,
				<>
					Supervised major version releases by assessing risks and
					identifying potential points of failure, effectively
					intercepting issues before they could impact production
					services
				</>,
				<>
					Introduced deployment guidelines with safeguards based on an
					analysis of common recurring problems, eliminating 100% of
					preventable defects and elevating development standards
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
				'New Relic',
			],
			descriptionItems: [
				<>
					Triaged thousands of defect tickets, streamlining the
					resolution process for a high volume of system defects
				</>,
				<>
					Resolved hundreds of urgent, production-level defects,
					minimizing outage incidents and ensuring continuity of
					critical business operations
				</>,
				<>
					Investigated a critical security breach incident, providing
					a comprehensive{' '}
					<TextEmphasized>
						root cause analysis (<abbr>RCA</abbr>)
					</TextEmphasized>{' '}
					to the stakeholders and successfully averting lawsuits while
					preserving relationships with key clients
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
					Led the <TextEmphasized>encryption</TextEmphasized>{' '}
					algorithm upgrade for the{' '}
					<TextEmphasized>legacy PHP application</TextEmphasized>,
					ensuring a seamless transition to stronger security
					standards
				</>,
				<>
					Led the frontend development of a new{' '}
					<TextEmphasized>
						single-page application (
						<abbr title='single page application'>SPA</abbr>)
					</TextEmphasized>{' '}
					using <TextEmphasized>Vue.js</TextEmphasized> and{' '}
					<TextEmphasized>Tailwind CSS</TextEmphasized> with a focus
					on delivering a versatile user experience
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
			techList: [
				'JavaScript',
				'jQuery',
				'PHP',
				'MySQL',
				'Bootstrap',
				'axe DevTools',
			],
			honors: ['Rookie of the Year'],
			descriptionItems: [
				<>
					Implemented{' '}
					<TextEmphasized>web accessibility</TextEmphasized>{' '}
					remediations per the{' '}
					<TextEmphasized>
						Web Content Accessibility Guidelines (<abbr>WCAG</abbr>)
					</TextEmphasized>{' '}
					based on{' '}
					<GenericLink url='https://www.deque.com/'>
						Deque
					</GenericLink>{' '}
					audit
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
			<div className='mx-0.5 grid grid-cols-12 gap-4 sm:mx-4'>
				<div className='col-span-12'>
					<div className='mb-4 text-left'>
						<Heading level='h3' size='small'>
							<GenericLink url='https://besmartee.com'>
								BeSmartee
							</GenericLink>
						</Heading>
						<span className='text-xs font-bold uppercase tracking-wider text-neutral-400 sm:text-sm'>
							Full stack software engineer
						</span>
						<span className='block text-xs font-medium uppercase tracking-wider text-neutral-400 sm:text-sm'>
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
