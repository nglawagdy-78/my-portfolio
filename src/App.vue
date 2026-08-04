<template>

  <LoaderComponent v-if="loading"/>

  <div v-else>

    <ScrollProgress/>

    <NavbarComponent/>

    <HeroComponent/>

    <AboutComponent/>

    <SkillsComponent/>

    <EducationComponent/>

    <CertificateComponent/>

    <ProjectsComponent/>

    <ContactComponent/>

    <FooterComponent/>

    <BackToTop/>

  </div>

</template>

<script>

import LoaderComponent from "./components/LoaderComponent.vue";
import ScrollProgress from "./components/ScrollProgress.vue";
import NavbarComponent from "./components/NavbarComponent.vue";
import HeroComponent from "./components/HeroComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";
import SkillsComponent from "./components/SkillsComponent.vue";
import EducationComponent from "./components/EducationComponent.vue";
import CertificateComponent from "./components/CertificateComponent.vue";
import ProjectsComponent from "./components/ProjectsComponent.vue";
import ContactComponent from "./components/ContactComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import BackToTop from "./components/BackToTop.vue";

export default{

components:{

LoaderComponent,
ScrollProgress,
NavbarComponent,
HeroComponent,
AboutComponent,
SkillsComponent,
EducationComponent,
CertificateComponent,
ProjectsComponent,
ContactComponent,
FooterComponent,
BackToTop

},

data(){

return{

loading:true,

profileImage:"https://your-image-link.com/profile.jpg"

}

},

mounted(){

setTimeout(()=>{

this.loading=false;

},2500)

}

}

</script>