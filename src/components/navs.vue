<template>
  <div class="shang">
    <div class="shang_zuo">
      <img src="../assets/image/logo.png" alt="">
    </div>
    <div class="shang_zhong">
      <div class="shou"><i class="iconfont icon-zhinanzhen"></i>首页</div>
      <div><i class="iconfont icon-yunxiazai"></i>下载</div>
      <div class="ipt"><input type="text" placeholder="搜索"><i class="iconfont icon-sousuo"></i></div>
    </div>
    <div class="shang_you">
      <span>AA</span><router-link tag="a" :to="{name:'Login'}">登陆</router-link><span>注册</span><span>写文章</span>
    </div>
  </div>
</template>

<script>
  import '@/assets/font/iconfont.css';

  export default {
    name: "navs"
  }
</script>

<style scoped>
  .shang {
    position: fixed;
    z-index: 999;
    top: 0;
    width: 100%;
    height: 59px;
    margin: 0 auto;
    border-bottom: 1px solid red;
    line-height: 59px;
    display: flex;
    margin-bottom: 60px;
    background: #fff;
  }

  .shang .shang_zuo {
    width: 100px;
    height: 100%;
    margin-left: 50px;
  }

  .shang .shang_zhong {
    flex: 1;
  }

  .shang .shang_you span, .shang .shang_zhong div {
    display: inline-block;
    width: 80px;
    text-align: center;
  }

  .ipt {
    width: 170px;
    height: 60px;
    position: relative;
  }
  .ipt:focus-within > i{
    right: -190px;
  }

  .ipt input {
    width: 170px;
    height: 40px;
    background: #f5f5f5;
    padding-left: 15px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    margin-left: 50px;
    transition: width 1s;
  }
  .ipt input:focus{
    width: 230px;
  }
  .ipt i {
    position: absolute;
    top: 0;
    right: -130px;
    transition: right 1s;
  }

  .shou {
    margin-left: 50px;
  }

  .shang_you {
    margin-right: 50px;
  }
</style>
