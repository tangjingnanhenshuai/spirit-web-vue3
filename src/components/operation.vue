<template>
  <div class="oeration">
      <div class="operationDiv">
          <div class="title">
              此处上传需要整合的文件夹
          </div>

          <!-- <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload> -->


         <el-upload
            class="upload-demo"
            drag
            :before-upload="beforeAvatarUpload"
            :progress="onprogress"
            :file-list="fileList"
            :http-request="fileUpload"
            :on-change="filechange"
            :on-remove="fileremove"
            :auto-upload="false"
            action=""
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <template #tip>
                <div class="el-upload__tip">
                只能上传 png/jpg/jpeg 文件，且不超过 500 KB
                </div>
            </template>
            </el-upload>
            <!-- <el-input v-model="inputUrl" class="myelinput">

            </el-input> -->
            
      </div>
      <button class="mybutton" @click="actions"> 生成精灵图和css </button>
      <div class="operationDiv">
            <a :href="downloadurl" download> 下载精灵图 A  </a>
            <button @click="beforedlownload">  下载精灵图  </button>
      </div>
  </div>
</template>

<script>
import axios from "axios"
export default {    
    data(){
        return {
            imageUrl:'',
            inputUrl:"",
            fileList:[],
            downloadurl:"http://localhost:7002/app/public/downloadrar/t1612069661624.zip",
        }
    },
    mounted(){

    },
    methods:{
        beforedlownload(){
            axios({
                method:'get',
                url:'/getcsrf',
                baseURL:'/api',
            }).then((res)=>{
                this.dlownload(res.data.csrf)
            }).catch((err)=>{
                console.log(err)
            })
        },
        dlownload(csrf){
            axios({
                method:'post',
                url:'/getrar',
                headers: {
                'Content-Type': "multipart/form-data",
                'responseType': 'blob' ,
                'x-csrf-token': csrf
                // 'responseType': 'arraybuffer' 
                },
                baseURL:'/api',
                data:{}
            }).then((res)=>{
                  console.log(res)
                        const data = res.data // 这里填内容的字符串
                        const blob = new Blob([data], {type: "application/zip"})
                        // const blob = new Blob([data], {type: "application/txt"})

                        // const blob = new Blob([data])
                        const a= document.createElement("a");
                        a.href = window.URL.createObjectURL(blob);
                        a.download = "test"; // 这里填保存成的文件名
                        a.click();
                        a.remove();
                        window.URL.revokeObjectURL(a.href)
                        return ;
                        // const blob = new Blob([res.data], {type: "application/rar"});
                        // const blob = new Blob([res.data],{type: "application/zip"});

                        // const fileName = 'test.zip';
                        // const elink = document.createElement('a');
                        // elink.download = fileName;
                        // elink.style.display = 'none';
                        // //  window.location.href =URL.createObjectURL(blob);
                        // elink.href = URL.createObjectURL(blob);
                        // // elink.target="tempiframe";
                        // elink.target="_blank";
                        // elink.onclick="return false"
                        // const iframe = document.createElement("iframe");
                        // iframe.name="tempiframe";
                        // iframe.style.display="none";
                        // document.body.appendChild(iframe);
                        // document.body.appendChild(elink);
                        // elink.click();
                        // URL.revokeObjectURL(elink.href); // 释放URL 对象
                        // document.body.removeChild(elink);
          
            }).catch((err)=>{
                console.log(err)
            })
        },
        beforeAvatarUpload(e){
            if(!e.type || e.type.indexOf('image')==-1 || e.size > 512000 ){
                return false
            }
            const fileIndex  = this.fileList.findIndex(v=>v.name === e.name)
            if(fileIndex!==0 &&  this.fileList.length  &&  fileIndex !=-1){
                console.log('84 return ')
                return false
            }
        },
        onprogress(e, file, v){
            console.log(e,file,v)
        },
        fileUpload(fileobj){
            if(fileobj){
                return null;
            }
        },
        filechange(fileobj){
            if(fileobj.status!="ready"){return console.log("100 retuen")}
            let fileIndex =this.fileList.findIndex(v=>v.name === fileobj.raw.name)
            if(!fileobj.raw.type || fileobj.raw.type.indexOf('image')==-1 || fileobj.raw.size > 512000 ||fileIndex!=-1){
                      let narr =[]
                    this.fileList.forEach(v=>{
                        if( narr.findIndex(vv=> vv.name===v.name) ==-1 ){
                            narr.push(v)
                        }
                    })
                    this.fileList=narr
                return false
            }else{
                this.fileList.push(fileobj.raw)
            }
        
          
        },
        fileremove(fileobj){
            console.log(fileobj.name)
            let fileIndex = this.fileList.findIndex(v=>v.name===fileobj.name)
            this.fileList.splice(fileIndex,1)
            console.log(this.fileList)
        },
        actions(){
            axios({
                method:'get',
                url:'/getcsrf',
                baseURL:'/api',
            }).then((res)=>{
                console.log(res)
                this.postSent(res.data.csrf)
            }).catch((err)=>{
                console.log(err)
            })
        },
        postSent(csrf){
             let mapArr =this.fileList
             console.log("mapArr.length",mapArr.length)
            let formDatas = new FormData();
              mapArr.forEach((i)=>{
                  console.log('iiiiiii',i)
                   formDatas.append("files",i);
                });
            // formDatas.append("file",mapArr)
             console.log(formDatas.length)
                axios({
                method:'post',
                url:'/form',
                headers: {
                'Content-Type': "multipart/form-data",
                'responseType': 'blob' ,
                'x-csrf-token': csrf
                // 'responseType': 'arraybuffer' 
                },
                baseURL:'/api',
                formDatas,
                data:formDatas,
                params: formDatas,
            }).then((res)=>{
                console.log(res)
            }).catch((err)=>{
                console.log(err)
            })
            
        }
    }

}
</script>

<style lang="less" scoped>
    .oeration{
        width:100%;
        height: 500px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 10px;
        border:1px solid #eee;
        .operationDiv{
            width:43%;
            height:100%;
            border:1px solid #666;
            .title{
                font-size: 22px;
                line-height: 80px;
            }
            .downloadFile{
                font-size: 18px;
                height: 40px;
                background: cornflowerblue;
                color:white;
                border:1px solid white;
                cursor: pointer;
                padding:0 20px;
                margin-top: 150px;
            }
        }
        .mybutton{
            font-size: 20px;
            height: 60px;
            background: cornflowerblue;
            color:white;
            border:1px solid white;
            cursor: pointer;
            padding:0 20px;
        }
    }
    .avatar-uploader{
        margin-top: 80px;
    }
    .upload-demo{
        margin-top: 60px;
    }
  
     .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border:1px dashed #8c939d;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .myelinput{
      width:600px;
  }

</style>
<style lang="less" >
      .el-upload-list{
        overflow-y: auto;
        height:140px;
        margin-top: 5px;
    }
      .el-upload-dragger{
        border:1.5px dashed cornflowerblue;
    }
</style>

