import TextEmphasized from '../../elements/TextEmphasized';
import DividerTitleLeft from '../../layout/DividerTitleLeft';

const FontWeight = () => {
	return (
		<>
			<DividerTitleLeft title='Font weight' />
			<div className='mb-10 mt-5 pl-5 *:mb-4 *:font-serif *:text-sm'>
				<p>
					<code>{'`<strong>`'}</code> tag is used to add{' '}
					<TextEmphasized>emphasis</TextEmphasized> to specific words
					within texts along with{' '}
					<TextEmphasized>neutral-50</TextEmphasized> color{' '}
					<span className='mx-px inline-block h-5 w-5 bg-neutral-50'></span>
					.
				</p>
			</div>
		</>
	);
};

export default FontWeight;
