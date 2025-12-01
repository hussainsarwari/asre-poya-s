
import Section1 from './components/section1';
import Feedbackbox from './components/feedbackBox';
import Scan_it from './components/scan_it';
import Section4 from './components/section4';
import Loading from '@/app/components/loading.jsx'
export default function Business() {

  return (
    <div className='flex flex-col mt-[132px] md:w-[744px] lg:w-[1056px] mx-auto'>
<Loading />

      
          <Section1 />
          <Feedbackbox />
          <Scan_it />
          <Section4 />
    
    </div>
  );
}
