

import Section1 from "./home_components/section1.jsx";
import Section2 from "./home_components/advantage_asrePoya.jsx";
import Section3 from "./home_components/our_products.jsx";
import Section4 from "./home_components/client_opinion.jsx";
import Section5 from "./home_components/about_us_section.jsx";
import Loaded from '@/app/components/loading.jsx'

export default function Home() {


  return (
    <div className="flex flex-col mt-[134px]">
      <Loaded />
    
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
         
       
    </div>
  );
}
//
