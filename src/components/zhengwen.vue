<template>
  <div class="zhengwen">
    <div class="zhengwen_title">
      <h1>{{val.title}}</h1>
    </div>
    <div class="zhengwen_author">
      <div class="author_img"></div>
      <div class="author_title">
        <div>{{val.author}}</div>
        <div class="author_cont">
          <span>{{val.time}}</span>
          <span>字数 {{val.zishu}}</span>
          <span>阅读 {{val.yuedu}}</span>
          <span>评论 {{val.pinglun}}</span>
          <span>喜欢 {{val.xihuan}}</span>
        </div>
      </div>
    </div>
    <div class="zhengwen_neirong">
      <p>{{val.content}}</p>
    </div>
    <div class="zhengwen_shang">
      <p>小礼物走一走，来简书关注我</p>
      <div>
        <button>赞赏支持</button>
      </div>
    </div>
    <div class="zhengwen_jubao">
      <div><i class="iconfont icon-wengao"></i>日记本</div>
      <div><a href="">举报文章</a>© 著作权归作者所有</div>
    </div>
    <div class="zhengwen_qianming">
      <div>
        <ul class="qianming_left">
          <li></li>
          <li>
            <p class="ming">{{val.author}}</p>
            <p class="zishu">写了 {{val.zishu}} 字，被 {{val.guanzhu}} 人关注，获得了 {{val.xihuan}} 个喜欢</p>
          </li>
          <li>
            <button><i class="iconfont icon-add"></i>加关注</button>
          </li>
        </ul>
      </div>
      <div class="qianming_right">
        <p>{{val.qianming}}</p>
      </div>
    </div>
    <div class="zhengwen_fenxiang">
      <ul>
        <li class="xin">
          <div class="loves">
            <span><i class="iconfont icon-zan"></i>喜欢</span><span>{{val.xihuan}}</span>
          </div>
        </li>
        <li class="tb"><i class="iconfont icon-weixin"></i></li>
        <li class="tb"><i class="iconfont icon-weibo"></i></li>
        <li class="tb"><i class="iconfont icon-icon-thumb"></i></li>
        <li class="gengduo"><p>更多分享</p></li>
      </ul>
    </div>
    <div class="zhengwen_xiazai">我是下载</div>
  </div>
</template>

<script>
  export default {
    name: "zhengwen",
    data(){
      return{
        val:{}
      }
    },
    mounted(){
      this.val = this.$route.params.val;
    }
  }
</script>

<style scoped>
  .zhengwen {
    width: 50%;
    /*height: 700px;*/
    margin: 0 auto;
  }

  .zhengwen_title {
    margin-top: 100px;
  }

  h1 {
    font-size: 30px;
  }

  .zhengwen_author {
    margin-top: 30px;
    overflow: hidden;
  }

  .zhengwen_author > div {
    float: left;
  }

  .zhengwen_author .author_img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #000;
    vertical-align: middle;
  }

  .author_title {
    margin-left: 10px;
  }

  .author_cont {
    font-size: 12px;
    color: #a8a8a8;
  }

  .author_cont span {
    margin-left: 5px;
  }

  .zhengwen_neirong {
    margin-top: 30px;
  }

  .zhengwen_shang {
    margin-top: 30px;
    text-align: center;
  }

  .zhengwen_shang p {
    color: #969696;
    margin-bottom: 20px;
  }

  .zhengwen_shang div button {
    width: 120px;
    height: 40px;
    outline: none;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    background: #ea6f5a;
    color: #fff;
    font-size: 15px;
  }

  .zhengwen_jubao {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #969696;
  }

  .zhengwen_jubao a {
    color: #969696;
    margin-right: 30px;
  }

  .zhengwen_qianming {
    width: 100%;
    margin-top: 30px;
    background: hsla(0, 0%, 71%, .1);
    border: 1px solid #e1e1e1;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }

  .zhengwen_qianming > div {
    padding: 20px 20px 10px 20px;
  }

  .qianming_left {
    display: flex;
    height: 40px;
  }

  .qianming_left li:nth-child(1) {
    width: 40px;
    height: 40px;
    background: #000;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

  .qianming_left li:nth-child(2) {
    margin-left: 10px;
    flex: 1;
    font-size: 16px;
  }

  .qianming_left li:nth-child(2) .zishu {
    font-size: 13px;
    color: #969696;
  }

  .qianming_left li:nth-child(3) button {
    width: 100px;
    height: 40px;
    background: #42c02e;
    border-radius: 20px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    font-weight: 700;
  }

  .qianming_right p {
    padding: 10px 10px 0 10px;
    border-top: 1px solid #e1e1e1;
    color: #969696;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .zhengwen_fenxiang {
    margin-top: 30px;
  }

  .zhengwen_fenxiang ul {
    display: flex;
  }

  .loves {
    width: 150px;
    padding: 0 20px;
    height: 60px;
    border-radius: 30px;
    font-size: 20px;
    color: #EA6F5A;
    border: 1px solid #EA6F5A;
    text-align: center;
  }

  .loves span:nth-child(1) {
    line-height: 60px;
    margin-right: 10px;
  }

  .loves span i {
    font-size: 20px;
  }

  .loves span:nth-child(2) {
    border-left: 1px solid #EA6F5A;
    padding-left: 10px;
  }

  .xin {
    flex: 1;
  }

  .tb {
    width: 50px;
    height: 50px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 1px solid #e1e1e1;
    text-align: center;
    margin-left: 15px;
  }

  .tb i {
    font-size: 24px;
    line-height: 2;
  }

  .icon-weixin {
    color: #00bb29;
  }

  .icon-weibo {
    color: #e05244;
  }
  .gengduo{
    width: 100px;
    height: 50px;
    border: 1px solid #e1e1e1;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    margin-left: 15px;
    text-align: center;
    line-height: 50px;
    color: #969696;
  }
  .zhengwen_xiazai{
    margin-top: 100px;
    width: 100%;
    height: 150px;
    border: 1px solid #e1e1e1;
  }
</style>
