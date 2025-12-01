

import Section1 from "./home_components/section1.jsx";
import Advantage_asrePoya from "./home_components/advantage_asrePoya.jsx";
import Our_product from "./home_components/our_products.jsx";
import Client_opinion from "./home_components/client_opinion.jsx";
import About_us_section from "./home_components/about_us_section.jsx";
import Loaded from '@/app/components/loading.jsx'

export default function Home() {


  return (
    <div className="flex flex-col mt-[134px]">
      <Loaded />
    
          <Section1 />
          <Advantage_asrePoya />
          <Our_product />
          <Client_opinion />
          <About_us_section />
         
       
    </div>
  );
}
//
