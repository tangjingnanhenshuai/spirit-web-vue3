<template>
  <div class="examples">
      <div class="left">
          <div class="leftTitle">转换示例</div>
          <h4>上传：</h4>
          <!-- <Image url="shili1.png" :width="50" :height="50" /> -->
          <img class="shiliimg" @click="openImg(shili1)"  :src="shili1" alt="示例图片">
            <h4>转换后：</h4>
          <!-- <Image url="shili1.png" :width="50" :height="50" /> -->
          <img class="shiliimg" @click="openImg(shili2)"   :src="shili2" alt="示例图片">
      </div>
      <div class="right">
        
      </div>
      <div class="mydetail" v-if="showDetail">
         <img class="close" @click="closedetail" src="../assets/XX.png" />
          <div class="content">
            <img :src="detailImg" />
          </div>
      </div>
  </div>
</template>

<script>
// import Image from "./image"
export default {
  // components:{Image}
  data() {
    return {
      shili1:'https://img-blog.csdnimg.cn/2021011910371464.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0NjE0Nzcw,size_16,color_FFFFFF,t_70',
      shili2:'https://img-blog.csdnimg.cn/202101191038307.png',
      showDetail:false,
      detailImg:"",
    }
  },
  methods:{
    openImg(url){
       this.detailImg=url
       this.showDetail=true
    },
    closedetail(){
       this.showDetail=false
    }
  }
}
</script>

<style lang="less" scoped>

  .examples{
      width:100%;
      height:100px;
      border-top:1px solid cornflowerblue;
      border-bottom:1px solid cornflowerblue;
      display: flex;
      margin-top: 10px;
      .left , .right{
        width:50%;
        display: flex;
        align-items: center;
        h4{
           width:80px;
           display: block;
        }
        .leftTitle{
          background: cornflowerblue;
          color: white;
          font-size: 26px;
          font-weight: 700;
          line-height:100px;
          padding: 0 40px;
        }
      }
      .shiliimg{
        width:140px;
        cursor: pointer;
      }
  }
    .mydetail{
      position:fixed;
      width:1900px;
      height: 920px;
      background: rgba(0, 0, 0, .8);
      left:0;
      top:0;
      display: flex;
      justify-content:center;
      align-items: center;
      .close{ 
          position:absolute;
          right:40px;
          top: 40px;
          cursor:pointer;
          widows: 80px;
          height: 80px;
      }
      .content{
        img{
          width: 500px;
        }
      }
    }
</style>