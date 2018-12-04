<template>
  <div class="zhong">
    <div class="fen">
      <div class="left">
        <swiper/>
        <div class="xian"></div>
        <lists/>
      </div>
      <div class="right">
        <ul class="r_ul">
          <li>这</li>
          <li>是</li>
          <li>小</li>
          <li>版</li>
          <li>快</li>
        </ul>
        <div class="ma">我是二维码</div>
        <div class="lists">
          <div class="l_o">
            <span>推荐作者</span><span><a href="#"><i class="iconfont icon-zhuanhuan2-copy"></i>换一批</a></span>
          </div>
          <ul class="l_ul">
            <li v-for="(item,index) in val" :key="index">
              <div class="tu"></div>
              <div class="ming">
                <router-link tag="a" :to="{name:'author',params:{id:item.id}}">{{item.author}}</router-link>
                <p>写了{{item.zishu}}字 · {{item.xihuan}}k喜欢</p>
              </div>
              <div class="add"><a href=""><i class="iconfont icon-add"></i>加关注</a></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import swiper from '@/components/swiper'
  import lists from '@/components/lists'

  export default {
    name: "cont",
    data(){
      return{
        val:[]
      }
    },
    mounted() {
      this.axios.get('www://bb.com')
        .then(data => {
          this.val = data.data.articles.slice(0,5)
        })
        .catch(e => {
          console.log(e);
        })
    },
    components: {
      swiper,
      lists
    }
  }
</script>

<style scoped>
  .zhong {
    width: 80%;
    /*background: pink;*/
    margin: 0 auto;
    margin-top: 60px;
    padding: 10px;
  }

  .fen {
    display: flex;
  }

  .left {
    flex: 1;
    min-width: 700px;
    padding-right: 50px;
  }

  .right {
    width: 300px;
    height: 600px;
  }

  .xian {
    border-bottom: 1px solid #f0f0f0;
    margin-top: 50px;
  }

  .r_ul {
    width: 100%;
    height: 300px;
  }

  .r_ul li {
    width: 100%;
    height: 50px;
    text-align: center;
    margin-bottom: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .r_ul li:nth-child(1) {
    background: pink;
  }

  .r_ul li:nth-child(2) {
    background: #b6ff4b;
  }

  .r_ul li:nth-child(3) {
    background: #30ffd3;
  }

  .r_ul li:nth-child(4) {
    background: #26a5ff;
  }

  .r_ul li:nth-child(5) {
    background: #ff4999;
  }

  .ma {
    height: 100px;
    border: 1px solid #000;
  }

  .lists {
    margin-top: 10px;
    overflow: hidden; /*内容超出后隐藏*/
    text-overflow: ellipsis; /* 超出内容显示为省略号*/
    white-space: nowrap; /*文本不进行换行*/
    word-break: break-all;
  }

  .lists {
    /*border: 1px solid red;*/
    color: #969696;
  }

  .lists .l_o {
    display: flex;
    justify-content: space-between;
  }

  .lists .l_o span a {
    color: #969696;
  }

  .lists ul {
    margin-top: 10px;
  }
  .l_ul li{
    height: 40px;
  display: flex;
    margin-bottom: 20px;
  }
  .tu{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #000;

  }
  .ming{
    margin-left: 10px;
    flex: 1;
    font-size: 12px;
    line-height: 20px;
  }
  .ming p:nth-child(1){
    font-size: 12px;
    color: #000;
  }
  .add{
    font-size: 13px;
    vertical-align: middle;
    width: 100px;
    line-height: 40px;
    text-align: right;
  }
  .add a{
    color: green;
  }
  .add i{
    font-size: 13px;
  }
</style>
