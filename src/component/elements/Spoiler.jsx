import { useState } from 'react';

const Spoiler = props => {
    const { text = '', className = '' } = props;

    const [showSpoiler, setShowSpoiler] = useState(false);

    const placeholder = new Array(text.length).join(' \xa0');

    return (
        <div className={` ${className}`}>
            {!showSpoiler && (
                <span
                    className='bg-neutral-200 cursor-pointer'
                    onClick={() => setShowSpoiler(true)}
                >
                    {placeholder}
                </span>
            )}
            {showSpoiler && <span>{text}</span>}
        </div>
    );
};

export default Spoiler;
