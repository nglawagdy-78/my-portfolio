<template>

<div
class="scroll-progress"
:style="{width:progress+'%'}"
>

</div>

</template>

<script>

export default{

data(){

return{

progress:0

}

},

mounted(){

window.addEventListener("scroll",this.updateProgress)

},

beforeUnmount(){

window.removeEventListener("scroll",this.updateProgress)

},

methods:{

updateProgress(){

const winScroll=document.documentElement.scrollTop

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight

this.progress=(winScroll/height)*100

}

}

}

</script>