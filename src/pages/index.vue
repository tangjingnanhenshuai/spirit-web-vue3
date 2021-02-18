<template>
  <div>
      <Header />
      <Examples />
      <Operation />
  </div>
</template>

<script>
import Header from "../components/Header"
import Examples from "../components/Examples"
import Operation from "../components/operation"
// import require from "../api/require"
// import axios from "axios"
export default {
    components:{
        Header,Examples,Operation
    },
    mounted(){
        // axios({
        //     method:'post',
        //     url:'/user/doAddAll',
        //     baseURL:'/api',
        //     params:{url:'C:/Users/Thinkpad/Desktop/img'}
        // }).then((res)=>{
        //     console.log(res)
        // }).catch((err)=>{
        //     console.log(err)
        // })
    }
}
</script>

<style>

</style>