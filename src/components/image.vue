<template>
  <div>
      <img :style="`width:${width}px;height:${height}px`" :src="'/assets/'+url" alt="示例图片" />
  </div>
</template>

<script>
export default {
 props: {
    width:Number,
    height:Number,
    url:String
  }
}
</script>

<style>

</style>