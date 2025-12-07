import Main_feature_software from "../../components/main-feature-software";
import Why_choose_us from "../../components/Why-choose-us";
import Software_versions from "../../components/software_versions.jsx";
import Price_plane from "../../components/Price-plane.jsx";
import Client_opinion from "../../components/client-opinion.jsx";
import FAQ from "../../components/FAQ.jsx";
import Section1 from "../../components/section1";
import Loading from "@/app/components/loading.jsx";
export default function clinic() {
  return (
    <>
        <Loading />
    <div className="lg:w-[1056px] md:w-[616px] w-[360px] m-auto flex flex-col">
      <Section1 SectionName='home_inspection'/>
      <Main_feature_software SectionName='home_inspection'/>
      <Why_choose_us SectionName='home_inspection'/>     
      <Software_versions SectionName='home_inspection'/>
      <Price_plane SectionName='home_inspection'/>
      <Client_opinion SectionName='home_inspection'/>
      <FAQ SectionName='home_inspection'/>
    </div>
    </>
  );
}