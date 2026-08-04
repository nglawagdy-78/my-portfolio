<template>

<section id="projects">

<div class="container">

<h2 class="section-title">
My Projects
</h2>

<div class="row">

<div
class="col-lg-4 col-md-6 mb-4"
v-for="(project,index) in projects"
:key="index"
>

<div class="project-card">

<img
:src="project.cover"
:alt="project.name"
class="project-image"
@click="selectedImage=project.cover"
/>

<div class="project-content">

<h3>{{ project.name }}</h3>

<p>{{ project.shortDescription }}</p>



<div class="buttons">

<button
class="btn btn-info"
data-bs-toggle="modal"
data-bs-target="#projectModal"
@click="selectedProject=project"
>

Details

</button>

<a
:href="project.github"
target="_blank"
class="btn btn-outline-light"
>

GitHub

</a>

<a
:href="project.live"
target="_blank"
class="btn btn-primary"
>

Live Demo

</a>

</div>

</div>

</div>

</div>

</div>

</div>

<div
class="modal fade"
id="projectModal"
tabindex="-1"
>

<div class="modal-dialog modal-xl modal-dialog-centered">

<div class="modal-content">

<div class="modal-header">

<h3>

{{ selectedProject.name }}

</h3>

<button
class="btn-close"
data-bs-dismiss="modal"
></button>

</div>

<div class="modal-body">

<div class="row">

<div class="col-lg-6">

<img
:src="selectedProject.cover"
class="img-fluid rounded mb-3"
/>

<div class="row">

<div
class="col-4 mb-3"
v-for="(img,index) in selectedProject.images"
:key="index"
>

<img
:src="img"
class="img-fluid rounded gallery-image"
@click="selectedImage=img"
/>

</div>

</div>

</div>

<div class="col-lg-6">

<h4>Description</h4>

<p>

{{ selectedProject.description }}

</p>

<h4 class="mt-4">

Technologies

</h4>

<div class="techs mb-4">

<span
v-for="(tech,index) in selectedProject.techs"
:key="index"
>

{{ tech }}

</span>

</div>

<h4>

Features

</h4>

<ul>

<li
v-for="(feature,index) in selectedProject.features"
:key="index"
>

{{ feature }}

</li>

</ul>

<div class="mt-4 d-flex gap-3">

<a
:href="selectedProject.github"
target="_blank"
class="btn btn-dark"
>

GitHub

</a>

<a
:href="selectedProject.live"
target="_blank"
class="btn btn-info"
>

Live Demo

</a>

</div>

</div>

</div>

</div>

</div>

</div>

</div>
 



<div
v-if="selectedImage"
class="image-viewer"
@click="selectedImage=''"
>

<img
:src="selectedImage"
class="big-image"
@click.stop
/>


<button
class="close-image"
@click="selectedImage=''"
>

×

</button>


</div>


</section>

</template>

<script>

export default{

name:"ProjectsComponent",

data(){

return{
    selectedImage:"",

selectedProject:{

name:"",

cover:"",

images:[],

description:"",

github:"#",

live:"#",

techs:[],

features:[]

},

projects:[

{
  id: 1,
  name: "Smart Home Store",

  shortDescription:
    "Responsive Smart Home E-commerce Website.",

  description:
    "A responsive Smart Home e-commerce website built using HTML, CSS, Bootstrap, and JavaScript. The project features a modern interface, product categories, shopping cart, responsive design, and an easy-to-use user experience.",

  cover: "/projects/smart-cover.jpg",

  images: [
    "/projects/smart1.jpg",
    "/projects/smart2.jpg",
    "/projects/smart3.jpg"
  ],

  github:
    "https://github.com/nglawagdy-78/Smart-Home-Store",

  live:
    "https://nglawagdy-78.github.io/Smart-Home-Store/",

  techs: [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript"
  ],

  features: [
    "Responsive Design",
    "Product Categories",
    "Shopping Cart",
    "Modern UI",
    "Easy Navigation"
  ]
},

{
  id: 2,

  name: "Book Store",

  shortDescription:
    "Responsive online bookstore website with shopping cart.",

  description:
    "A responsive Book Store website built using HTML, CSS, Bootstrap, and JavaScript. The project includes displaying books, adding books to the cart, increasing and decreasing quantities, and providing a smooth shopping experience with a modern user interface.",

  cover: "/projects/book-cover.jpg",

  images: [
    "/projects/Book1.jpg",
    "/projects/Book2.jpg",
    "/projects/book3.jpg"
  ],

  github:
    "https://github.com/nglawagdy-78/Book-Store",

  live:
    "https://nglawagdy-78.github.io/Book-Store/",

  techs: [
    "Vue.js",
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript"
  ],

  features: [
    "Book Listing",
    "Shopping Cart",
    "Quantity Control",
    "Responsive Design",
    "Modern UI"
  ]
},

{
  id: 3,

  name: "Vue Products Store",

  shortDescription:
    "Vue.js products store using reusable components.",

  description:
    "A Vue.js products store application built using Vue components. The project displays products in reusable cards, uses component-based architecture, and provides a clean and responsive user interface using Bootstrap.",

  cover: "/projects/products-cover.jpg",

  images: [
    "/projects/products1.jpg",
    "/projects/products2.jpg",
    "/projects/products3.jpg"
  ],

  github:
    "https://github.com/nglawagdy-78/Vue-Products-Store.git",

  live:
    "https://nglawagdy-78.github.io/Vue-Products-Store/",

  techs: [
    "Vue.js",
    "JavaScript",
    "Bootstrap",
    "HTML",
    "CSS"
  ],

  features: [
    "Reusable Components",
    "Product Cards",
    "Dynamic Product Display",
    "Responsive Design",
    "Clean UI"
  ]
}

]

}

}

}

</script>

<style scoped>

.project-card{

background:#1e293b;

border-radius:20px;

overflow:hidden;

transition:.4s;

height:100%;

box-shadow:0 10px 25px rgba(0,0,0,.25);

}

.project-card:hover{

transform:translateY(-10px);

box-shadow:0 20px 40px rgba(56,189,248,.25);

}

.project-image{

width:100%;

height:230px;

object-fit:cover;

transition:.5s;

}

.project-card:hover .project-image{

transform:scale(1.08);

}

.project-content{

padding:25px;

}

.project-content h3{

color:white;

margin-bottom:12px;

}

.project-content p{

color:#cbd5e1;

min-height:50px;

}

.techs{

display:flex;

flex-wrap:wrap;

gap:10px;

margin:20px 0;

}

.techs span{

background:#38bdf8;

color:white;

padding:6px 15px;

border-radius:30px;

font-size:13px;

}

.buttons{

display:flex;

flex-wrap:wrap;

gap:10px;

margin-top:20px;

}

.buttons .btn{

border-radius:30px;

}

.modal-content{

background:#0f172a;

color:white;

border-radius:20px;

border:none;

}

.modal-header{

border-bottom:1px solid rgba(255,255,255,.1);

}

.modal-header h3{

color:#38bdf8;

}

.btn-close{

filter:invert(1);

}

.modal-body h4{

color:#38bdf8;

margin-bottom:15px;

}

.modal-body p{

color:#d1d5db;

line-height:30px;

}

.gallery-image{

height:110px;

width:100%;

object-fit:cover;

cursor:pointer;

transition:.3s;

border-radius:10px;

}

.gallery-image:hover{

transform:scale(1.05);

}

.modal-body ul{

padding-left:20px;

}

.modal-body li{

margin-bottom:10px;

color:#d1d5db;

}

@media(max-width:768px){

.buttons{

flex-direction:column;

}

.buttons .btn{

width:100%;

}

.project-image{

height:200px;

}

.gallery-image{

height:80px;

}

}

</style>