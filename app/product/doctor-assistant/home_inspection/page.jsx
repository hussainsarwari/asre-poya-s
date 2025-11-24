import Main_feature_software from "../components/main_feature_software";
import Why_choose_us from "../components/Why_choose_us";
import Software_versions from "../components/software_versions.jsx";
import Price_plane from "../components/Price_plane.jsx";
import Client_opinion from "../components/client_opinion.jsx";
import FAQ from "../components/FAQ.jsx";
export default function home_inspection() {
  return (
    <div className="lg:w-[1056px] md:w-[616px] w-[360px] m-auto flex flex-col">
      <Main_feature_software SectionName='home_inspection'/>
      <Why_choose_us SectionName='home_inspection'/>     
      <Software_versions SectionName='home_inspection'/>
      <Price_plane SectionName='home_inspection'/>
      <Client_opinion SectionName='home_inspection'/>
      <FAQ SectionName='home_inspection'/>
    </div>
  );
}