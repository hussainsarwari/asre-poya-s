import Main_feature_software from "../components/main_feature_software";
import Why_choose_us from "../components/Why_choose_us";
import Software_versions from "../components/software_versions.jsx";
import Price_plane from "../components/Price_plane.jsx";
import Client_opinion from "../components/client_opinion.jsx";
import FAQ from "../components/FAQ.jsx";
export default function clinic() {
  return (
    <div className="lg:w-[1056px] md:w-[616px] w-[360px] m-auto flex flex-col">
      <Main_feature_software SectionName='clinic'/>
      <Why_choose_us SectionName='clinic'/>     
      <Software_versions SectionName='clinic'/>
      <Price_plane SectionName='clinic'/>
      <Client_opinion SectionName='clinic'/>
      <FAQ SectionName='clinic'/>
    </div>
  );
}