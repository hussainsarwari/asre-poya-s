import HeroSection from '../components/hero-section';
import Feedbackbox from '../components/feedbackBox';
import Scan_it from '../components/scan_it';
import Section4 from '../components/active-users';
import Loading from '../../components/loading.jsx';

export default async function Business({ params }) {
  // id = business name for example supermarket or mobile store...
  const { id } = await params;
console.log(id)

  return (
    <div className='flex flex-col mt-[132px] md:w-[744px] lg:w-[1056px] mx-auto'>
      <Loading />

      <HeroSection id={id} />
      
      <Feedbackbox id={id} />
      <Scan_it id={id} />
      <Section4 id={id} />
    </div>
  );
}
