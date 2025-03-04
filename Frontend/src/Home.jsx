import Hero from "./Component/Hero"
import Testimonial from "./Component/Testimonial"
import Technology from "./Page/Technology"
import Course from "./Page/Course"
import FaqPage from "./Page/FaqPage"
import HeroTest from "./Component/HeroTest"
import Heroregister from "./Component/Heroregister"
import Herochooseus from "./Component/Herochooseus"
import Placemetpattner from "./Component/Placemetpattner"
import Herologin from "./Component/Herologin"
import Popular from "./Component/Popular"
import CodingFamily from "./Component/CodingFamily"
import InstructorsPage from "./Component/InstructorsPage"
import Offer from "./Component/Offer"
import Applycertification from "./Component/Applycertificate"
import CreateNotification from "./Component/CreateNotification "
import Freedemolecture from "./Component/Freedemolecture"
import Herolinks from "./Component/Herolinks"



function Home(){
    return<>
     <Hero></Hero>
     <Herolinks></Herolinks>
     <Course limit={4}></Course>
     <Testimonial></Testimonial>
     <HeroTest></HeroTest>
     <Heroregister></Heroregister>
     <Offer></Offer>
     <Freedemolecture></Freedemolecture>
     <Placemetpattner></Placemetpattner>
     <Applycertification></Applycertification>
     <Popular></Popular>
     <InstructorsPage></InstructorsPage>
     <Herochooseus></Herochooseus>
     <Herologin></Herologin>
     <CodingFamily></CodingFamily>
     <FaqPage></FaqPage>
     <CreateNotification></CreateNotification>
     <Technology></Technology>
    
    


    </>
}
export default Home