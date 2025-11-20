
import Section1 from "./components/section1.jsx"
import Our_client from "./components/our_client.jsx"
import Main_feature_software from "./components/main_feature_software.jsx"
import Why_choose_us from "./components/Why_choose_us.jsx"
import Software_versions from "./components/software_versions.jsx"
import Price_plane from "./components/Price_plane.jsx"
import Client_opinion from "./components/client_opinion.jsx"
import  FAQ from "./components/FAQ.jsx"
import Loading from '@/app/components/loading.jsx'
export default function Product(){
    
    return (
        <div className="lg:w-[1056px] md:w-[616px] w-[360px] m-auto flex flex-col  ">

<Loading />


 <Section1 />
       <Our_client />
       <Main_feature_software />
         <Why_choose_us />     
             <Software_versions />

       <Price_plane />
        <Client_opinion />

        <FAQ /> 
   
        </div>
    )
}