import TextEmphasized from '../../elements/TextEmphasized';
import DividerTitleLeft from '../../layout/DividerTitleLeft';

const FontWeight = () => {
	return (
		<>
			<DividerTitleLeft title='Font weight' />
			<div className='mt-5 mb-10 *:mb-4 *:font-serif *:text-sm pl-5'>
				<p>
					<code>{'`<strong>`'}</code> tag is used to add{' '}
					<TextEmphasized>emphasis</TextEmphasized> to specific words
					within texts along with{' '}
					<TextEmphasized>neutral-50</TextEmphasized> color{' '}
					<span className='h-5 w-5 bg-neutral-50 inline-block mx-px'></span>
					.
				</p>
			</div>
		</>
	);
};

export default FontWeight;
