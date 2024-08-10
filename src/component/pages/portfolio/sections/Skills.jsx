import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import SectionLayout from '../../../layout/SectionLayout';
import { skillListMap } from '../../../../util/constants';

const Skills = () => {
	const sHtml = skillListMap.get('HTML');
	const sCss = skillListMap.get('CSS');
	const sBootstrap = skillListMap.get('Bootstrap');
	const sTailwind = skillListMap.get('Tailwind CSS');
	const sMaterial = skillListMap.get('Materialize CSS');

	return (
		<>
			<SectionLayout sectionTitle='Skills' dividerIcon={faToolbox}>
				<div className='space-y-4 divide-y-2 divide-dotted'>
					<div className='grid grid-cols-2'>
						<div className='content-center'>
							<div>
								<div className='h-5 w-5 inline-block mr-2'>
									{sHtml.icon}
								</div>
								HTML
							</div>
						</div>
						<div className='content-center'></div>
					</div>
					<div className='grid grid-cols-2'>
						<div className='content-center'>
							<div>
								<div className='h-5 w-5 inline-block mr-2'>
									{sCss.icon}
								</div>
								CSS
							</div>
						</div>
						<div className='content-center'>
							<div>
								<div className='h-5 w-5 inline-block mr-2'>
									{sBootstrap.icon}
								</div>
								Bootstrap
							</div>
							<div>
								<div className='h-5 w-5 inline-block mr-2'>
									{sTailwind.icon}
								</div>
								Tailwind
							</div>
							<div>
								<div className='h-5 w-5 inline-block mr-2'>
									{sMaterial.icon}
								</div>
								CSS
							</div>
						</div>
					</div>
				</div>
			</SectionLayout>
		</>
	);
};

export default Skills;
