<template>
  <Index />
</template>

<script>
import Index from './pages/index'

export default {
  name: 'App',
  components: {
   Index
  },
  setup(){
   
  },
  mounted() {
    this.getScla()
    window.addEventListener('resize',()=>{
    this.getScla()
    })
  },
  methods:{
    getScla(){
      const dom = document.getElementById("app")
      // let width = window.innerWidth
      // let height =window.innerHeight
      let width = document.body.clientWidth
      // let height = document.body.clientHeight
      // dom.style.transform=`scale(${width/1900},${height/950})`
      dom.style.transform=`scale(${width/1900})`

    }
  }
  
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  width:1900px;
  /* height: 99vh; */
  transform-origin: 0 0;
}
</style>
