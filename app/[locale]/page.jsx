

import HeroSection from "./main/Hero-section.jsx";
import AdvantageAsrePoya from "./main/advantage_asrePoya.jsx";
import OurProduct from "./main/our-products.jsx";
import ClientOpinion from "./main/client-opinion.jsx";
import AboutUsSection from "./main/about-us.jsx";
import Loaded from './components/loading.jsx'

export default async function Home({params}) {
const {locale}=await params;
console.log(locale);


  return (
    <div className="flex flex-col mt-[134px]">
      <Loaded />
    
          <HeroSection />
         <AdvantageAsrePoya />
         <OurProduct />
          <ClientOpinion />
            <AboutUsSection />
         
       
    </div>
  );
}
//
