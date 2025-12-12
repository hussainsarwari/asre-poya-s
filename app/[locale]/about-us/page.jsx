
import Gallery from "./components/Gallery.jsx";
import Section3 from "./components/section3.jsx";

import Section1 from "./components/section1.jsx";
import Loaded from "@/app/components/loading.jsx";
export default function AboutUs() {
  return (
    <div  className="w-[300px] md:w-[616px] lg:w-[1056px] mx-auto mt-[126px] mb-[7px]">
      <Loaded />
      <Section1 />
      <Gallery />
      <Section3 />
    </div>
  );
}
