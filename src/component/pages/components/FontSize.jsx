import Heading from '../../elements/Heading';
import DividerTitleLeft from '../../layout/DividerTitleLeft';

const FontSize = () => {
	const headings = [
		{
			level: 'h1',
			text: 'Heading 1',
		},
		{
			level: 'h2',
			text: 'Heading 2',
		},
		{
			level: 'h3',
			text: 'Heading 3',
		},
		{
			level: 'h4',
			text: 'Heading 4',
		},
	];
	return (
		<>
			<DividerTitleLeft title='Font size' />
			<div className='mt-5 mb-10 *:mb-4 pl-5'>
				{headings.map(heading => (
					<Heading key={heading.level} level={heading.level}>
						{heading.text}
					</Heading>
				))}
			</div>
		</>
	);
};

export default FontSize;
