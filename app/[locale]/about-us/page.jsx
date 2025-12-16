
import Gallery from "./components/Gallery.jsx";
import AsrePoyaOverview from "./components/asrepoya-overview.jsx";

import HeroSection from "./components/heroSection.jsx";
import Loaded from "../components/loading.jsx";
export default function AboutUs() {
  return (
    <div  className="w-[300px] md:w-[616px] lg:w-[1056px] mx-auto mt-[126px] mb-[7px]">
      <Loaded />
      <HeroSection />
      <Gallery />
      <AsrePoyaOverview />
    </div>
  );
}
