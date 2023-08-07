import Faq from 'react-faq-component';
import { data } from './data';
const FAq = () => {
    return (
        <div className='md:max-w-3xl px-5 md:px-0 font-semibold text-gray-200 mx-auto py-12'>
          <Faq  data={data}/>
        </div>
    );
};

export default FAq;
