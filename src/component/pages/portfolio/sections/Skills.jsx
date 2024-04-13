import Heading from '../../../elements/Heading';

const Skills = () => {
    return (
        <>
            <div>
                <Heading
                    level='h2'
                    className='hidden lg:block font-serif underline decoration-4 underline-offset-4 md:sticky md:top-24'
                >
                    SKills
                </Heading>
                <Heading
                    level='h2'
                    size='small'
                    className='lg:hidden font-serif underline decoration-2 underline-offset-4 md:sticky md:top-24'
                >
                    SKills
                </Heading>
            </div>
            <div className='col-span-2'>skill seciton</div>
        </>
    );
};

export default Skills;
