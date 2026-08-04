<template>

<section id="skills">

<div class="container">

<h2 class="section-title" data-aos="fade-up">
My Skills
</h2>

<div class="row">

<div
class="col-md-6 col-lg-3 mb-4"
v-for="skill in skills"
:key="skill.name"
>

<div
class="skill-card"
data-aos="zoom-in"
>

<div class="circle">

{{skill.percent}}%

</div>

<h4>

{{skill.name}}

</h4>

</div>

</div>

</div>

</div>

</section>

</template>

<script>

export default{

name:"SkillsComponent",

data(){

return{

skills:[

{name:"HTML",percent:95},

{name:"CSS",percent:90},

{name:"JavaScript",percent:85},

{name:"Bootstrap",percent:90},

{name:"Vue.js",percent:70},

{name:"Git",percent:75},

{name:"GitHub",percent:70},

{name:"Responsive Design",percent:90}

]

}

}

}

</script>