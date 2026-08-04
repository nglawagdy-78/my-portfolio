<template>

<section id="home" class="hero">

<div class="container">

<div class="row align-items-center">

<div class="col-lg-6">

<h4>Hello, I'm 👋</h4>

<h1>

Ngla <span>Wagdy</span>

</h1>

<h2>

{{ text }}

<span class="cursor">|</span>

</h2>

<p>

Front-End Developer passionate about building modern,
responsive and interactive websites using
HTML, CSS, JavaScript, Bootstrap and Vue.js.

</p>

<div class="hero-buttons" >

<a href="/cv.pdf" class="btn btn-info" download>

Download CV

</a>

<a href="#contact" class="btn btn-outline-light">

Contact Me

</a>

</div>

<div class="social">

<a href="https://github.com/nglawagdy-78/Ngla-wagdy"
   target="_blank"
   rel="noopener noreferrer">

<i class="fab fa-github"></i>

</a>

<a href="https://www.linkedin.com/in/ngla-wagdy-9009a3365/"
    target="_blank"
   rel="noopener noreferrer">
<i class="fab fa-linkedin"></i>

</a>

<a href="https://mail.google.com/mail/?view=cm&fs=1&to=nglawagdy@gmail.com"
    target="_blank"
   rel="noopener noreferrer">

<i class="fas fa-envelope"></i>

</a>

</div>

</div>

<div class="col-lg-6 text-center">

<div class="image-box">

<img

src="\N.png"

class="profile"

>

</div>

</div>

</div>

</div>

</section>

</template>

<script>

export default{

data(){

return{

titles:[

"Front-End Developer",

"Vue.js Developer",

"Web Designer"

],

text:"",

titleIndex:0,

charIndex:0

}

},

mounted(){

this.typeEffect()

},

methods:{

typeEffect(){

const current=this.titles[this.titleIndex]

if(this.charIndex<current.length){

this.text+=current.charAt(this.charIndex)

this.charIndex++

setTimeout(this.typeEffect,100)

}else{

setTimeout(()=>{

this.text=""

this.charIndex=0

this.titleIndex++

if(this.titleIndex>=this.titles.length){

this.titleIndex=0

}

this.typeEffect()

},2000)

}

}

}

}

</script>