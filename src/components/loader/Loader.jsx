import { BounceLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='loader'>
            <BounceLoader color='#48D100' size={80} />
        </div>
    );
}

export default Loader;