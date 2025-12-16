

import Faq from "../products/components/FAQ.jsx"
import ClientOpinion from "../products/components/client-opinion.jsx";
import CustomizedSoftwareDevelopmentServices from "./components/customized-software-development-services.jsx"
import Loading from '../components/loading.jsx'
import KnowNeeds from "./components/know-needs.jsx";
import SpecializingInCustomSoftware from "./components/Specializing-in-custom-software.jsx" 
import SoftwareDevelopmentLifecycle from "./components/software-development-lifecycle.jsx";
import AskProjectPrice from "./components/ask-project-price.jsx";
import MyProject from './components/my-projects.jsx';
import Counseling from "./components/counseling.jsx"
export default function Product(){

  
    return (
        <div className="">
<Loading />



<CustomizedSoftwareDevelopmentServices />
<KnowNeeds />
 <SpecializingInCustomSoftware />
 <SoftwareDevelopmentLifecycle />
<AskProjectPrice />
<MyProject />
<ClientOpinion />
 <Faq /> 
<Counseling /> 

        </div>
    )
}