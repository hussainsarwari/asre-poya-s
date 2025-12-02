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
      <Section1 SectionName='bussiness_assistant'/>
      <Main_feature_software SectionName='bussiness_assistant_multi_profile'/>
      <Why_choose_us SectionName='bussiness_assistant_multi_profile'/>     
      <Software_versions SectionName='bussiness_assistant_multi_profile'/>
      <Price_plane SectionName='bussiness_assistant_multi_profile'/>
      <Client_opinion SectionName='bussiness_assistant_multi_profile'/>
      <FAQ SectionName='bussiness_assistant_multi_profile'/>
    </div>
    </>
  );
}