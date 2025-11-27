import Main_feature_software from "../../components/main_feature_software";
import Why_choose_us from "../../components/Why_choose_us";
import Software_versions from "../../components/software_versions.jsx";
import Price_plane from "../../components/Price_plane.jsx";
import Client_opinion from "../../components/client_opinion.jsx";
import FAQ from "../../components/FAQ.jsx";
import Section1 from "../../components/section1";
import Loading from "@/app/components/loading.jsx";
export default function clinic() {
  return (
    <>
        <Loading />
    <div className="lg:w-[1056px] md:w-[616px] w-[360px] m-auto flex flex-col">
      <Section1 SectionName='business_assistant_proffesional'/>
      <Main_feature_software SectionName='business_assistant_proffesional'/>
      <Why_choose_us SectionName='business_assistant_proffesional'/>     
      <Software_versions SectionName='business_assistant_proffesional'/>
      <Price_plane SectionName='business_assistant_proffesional'/>
      <Client_opinion SectionName='business_assistant_proffesional'/>
      <FAQ SectionName='business_assistant_proffesional'/>
    </div>
    </>
  );
}