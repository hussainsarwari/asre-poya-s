import Main_feature_software from "../../components/main-feature-software";
import Why_choose_us from "../../components/Why-choose-us";
import Software_versions from "../../components/software_versions.jsx";
import Price_plane from "../../components/Price-plane.jsx";
import Client_opinion from "../../components/client-opinion.jsx";
import FAQ from "../../components/FAQ.jsx";
import HeroSection from "../../components/hero-section";
import Loading from "../../../components/loading";
export default async function clinic({params}) {
  const {id}=await params;

  
  return (
    <>
        <Loading />
    <div className="lg:w-[1056px] md:w-[616px] w-[360px] m-auto flex flex-col">
      <HeroSection SectionName={id}/>
      <Main_feature_software SectionName={id}/>
      <Why_choose_us SectionName={id}/>     
      <Software_versions SectionName={id}/>
      <Price_plane SectionName={id}/>
      <Client_opinion SectionName={id}/>
      <FAQ SectionName={id}/>
    </div>
    </>
  );
}