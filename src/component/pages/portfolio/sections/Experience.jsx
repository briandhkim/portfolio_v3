import Heading from '../../../elements/Heading';
import {
    faCodeBranch,
    faDesktop,
    faDiagramProject,
    faScrewdriverWrench,
    faSitemap,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Experience = () => {
    const timeline = [
        {
            id: 1,
            type: 'current',
            content: 'Engineering Team',
            target: 'Front End Developer',
            href: '#',
            date: 'Feb. 2023',
            datetime: '2023-02-01',
            icon: faCodeBranch,
            iconBackground: 'bg-blue-400',
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
            target: 'Bethany Blake',
            href: '#',
            date: 'Jul. 2022',
            datetime: '2022-07-01',
            icon: faSitemap,
            iconBackground: 'bg-neutral-400',
            descriptionItems: [
                'Participated in planning, designing, and developing of new microservice applications',
                'Rapidly learned to develop with new language and framework, Ruby on Rails',
            ],
        },
        {
            id: 3,
            type: 'past',
            content: 'PDT, Deployment Specialist',
            target: 'Martha Gardner',
            href: '#',
            date: 'Jul. 2021',
            datetime: '2021-07-01',
            icon: faScrewdriverWrench,
            iconBackground: 'bg-neutral-400',
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
            target: 'Bethany Blake',
            href: '#',
            date: 'Oct. 2020',
            datetime: '2020-10-01',
            icon: faScrewdriverWrench,
            iconBackground: 'bg-neutral-400',
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
            target: 'Katherine Snyder',
            href: '#',
            date: 'Feb. 2019',
            datetime: '2019-02-01',
            icon: faDiagramProject,
            iconBackground: 'bg-neutral-400',
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
            target: 'Katherine Snyder',
            href: '#',
            date: 'Jul. 2018',
            datetime: '2018-07-01',
            icon: faDesktop,
            iconBackground: 'bg-neutral-400',
            descriptionItems: [
                'Enriched the consumer facing user interfaces with web accessibility improvements',
                'Developed intuitive, responsive user interfaces to create effective and learnable user experience',
            ],
        },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <>
            <div>
                <Heading
                    level='h2'
                    className='hidden lg:block font-serif underline decoration-4 underline-offset-4 md:sticky md:top-24'
                >
                    Experience
                </Heading>
                <Heading
                    level='h2'
                    size='small'
                    className='lg:hidden font-serif underline decoration-2 underline-offset-4 md:sticky md:top-24'
                >
                    Experience
                </Heading>
            </div>
            <div className='col-span-2'>
                <div className='grid gap-4 mx-4 sm:grid-cols-12'>
                    <div className='col-span-12'>
                        <div className='text-center sm:text-left mb-4 '>
                            <Heading level='h2' className=''>
                                BeSmartee
                            </Heading>
                            <span className='text-sm font-bold tracking-wider uppercase text-neutral-400'>
                                Full stack software engineer
                            </span>
                        </div>
                    </div>
                    <div className='relative col-span-12 px-4 space-y-6'>
                        <div className='flow-root'>
                            <ul role='list' className='-mb-8'>
                                {timeline.map((event, eventIdx) => (
                                    <li key={event.id}>
                                        <div className='relative pb-8'>
                                            {eventIdx !==
                                            timeline.length - 1 ? (
                                                <span
                                                    className='absolute left-4 top-4 -ml-px h-full w-0.5 bg-neutral-600'
                                                    aria-hidden='true'
                                                />
                                            ) : null}
                                            <div className='relative flex space-x-3'>
                                                <div>
                                                    <span
                                                        className={classNames(
                                                            event.iconBackground,
                                                            'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-transparent'
                                                        )}
                                                    >
                                                        <FontAwesomeIcon
                                                            className=''
                                                            icon={event.icon}
                                                        />
                                                    </span>
                                                </div>
                                                <div className='flex min-w-0 flex-1 justify-between space-x-4 pt-1.5'>
                                                    <div>
                                                        <p className='text-base font-bold '>
                                                            {event.content}{' '}
                                                            {/* <a
                                                                href={
                                                                    event.href
                                                                }
                                                                className='font-medium text-neutral-400'
                                                            >
                                                                {event.target}
                                                            </a> */}
                                                        </p>
                                                        <div className='pl-10'>
                                                            <ul className='list-[hangul-consonant]'>
                                                                {event.descriptionItems.map(
                                                                    (
                                                                        item,
                                                                        idx
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                idx
                                                                            }
                                                                            className='font-mono'
                                                                        >
                                                                            {
                                                                                item
                                                                            }
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className='whitespace-nowrap text-right text-sm text-neutral-400'>
                                                        <time
                                                            dateTime={
                                                                event.datetime
                                                            }
                                                        >
                                                            {event.date}
                                                        </time>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Experience;
