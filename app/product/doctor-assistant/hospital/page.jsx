import Main_feature_software from "../components/main_feature_software";
import Why_choose_us from "../components/Why_choose_us";
import Software_versions from "../components/software_versions.jsx";
import Price_plane from "../components/Price_plane.jsx";
import Client_opinion from "../components/client_opinion.jsx";
import FAQ from "../components/FAQ.jsx";
export default function Home() {
  return (
    <div className="lg:w-[1056px] md:w-[616px] w-[360px] m-auto flex flex-col">
      <Main_feature_software SectionName='hospital'/>
      <Why_choose_us SectionName='hospital'/>     
      <Software_versions SectionName='hospital'/>
      <Price_plane SectionName='hospital'/>
      <Client_opinion SectionName='hospital'/>
      <FAQ SectionName='hospital'/>
    </div>
  );
}