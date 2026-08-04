<template>

<button

v-show="show"

class="back-top"

@click="goTop"

>

<i class="fas fa-arrow-up"></i>

</button>

</template>

<script>

export default{

data(){

return{

show:false

}

},

mounted(){

window.addEventListener("scroll",this.check)

},

beforeUnmount(){

window.removeEventListener("scroll",this.check)

},

methods:{

check(){

this.show=window.scrollY>400

},

goTop(){

window.scrollTo({

top:0,

behavior:"smooth"

})

}

}

}

</script>