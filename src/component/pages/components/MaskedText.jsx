import Spoiler from '../../elements/Spoiler';
import DividerTitleLeft from '../../layout/DividerTitleLeft';

const MaskedText = () => {
	return (
		<>
			<DividerTitleLeft title='Masked text' />
			<div className='mb-10 mt-5 pl-5'>
				<Spoiler text='This is a hidden text.' />
			</div>
		</>
	);
};

export default MaskedText;
