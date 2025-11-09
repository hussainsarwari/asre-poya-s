import Section1 from './components/section1'
import Section2 from './components/section2'
import Section3 from './components/section3'
import Section4 from './components/section4'

export default function business(){
    return (
     <div className='flex  flex-col mt-[102px] md:w-[744px] lg:w-[1056px] mx-auto'>
    
       <Section1 />
<Section2 />
         <Section3 />
         <Section4 />
     </div>
    )
}