

import Faq from "@/app/product/components/FAQ.jsx"
import Client_opinion from "../product/components/client_opinion.jsx";
import Customized_software_development_services from "./components/customized_software_development_services.jsx"
import Loading from '@/app/components/loading.jsx'
import Know_needs from "./components/know_needs.jsx";
import Specializing_in_custom_software from "./components//Specializing_in_custom_software.jsx" 
import Software_development_lifecycle from "./components/software_development_lifecycle.jsx";
import Ask_project_price from "./components/ask_project_price.jsx";
import My_project from './components/my_projects';
import Counseling from "./components/counseling.jsx"
export default function Product(){

  
    return (
        <div className="">
<Loading />



<Customized_software_development_services />
<Know_needs />
<Specializing_in_custom_software />
<Software_development_lifecycle />
<Ask_project_price />
<My_project />
<Client_opinion />
<Faq />
<Counseling />

        </div>
    )
}