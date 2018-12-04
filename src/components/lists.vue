<template>
  <div>
    <ul class="lists">
      <li v-for="(item,index) in val" :key="index">
        <div>
          <router-link :to="{name:'zhengwen',params:{val:item}}" tag="a" class="title">{{item.title}}</router-link>
          <p class="txt">{{item.content}}</p>
          <div class="author">
            <span>
              <i class="iconfont icon-fufei"></i>
            </span>
            <a href="#">{{item.author}}</a>
            <a href="#"><i class="iconfont icon-message"></i>{{item.pinglun}}</a>
            <span>
              <i class="iconfont icon-zan"></i>{{item.xihuan}}
            </span>
            <span>
              <i class="iconfont icon-shang"></i>{{item.shang}}
            </span>
          </div>
        </div>
      </li>
    </ul>
    <div class="jiazai"><a href="javascript:;">阅读更多</a></div>
  </div>
</template>

<script>
  export default {
    name: "lists",
    data() {
      return {
        val: []
      }
    },

    mounted() {
      this.axios.get('www://bb.com')
        .then(data => {
          this.val = data.data.articles
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
</script>

<style scoped>

  .lists {
    margin-top: 20px;

  }

  .lists li {
    border-bottom: 1px solid #f0f0f0;
    padding: 15px 0;
    min-height: 100px;
  }

  .txt {
    color: #999;
    font-size: 13px;
    height: 40px;
    overflow: hidden; /*内容超出后隐藏*/
    text-overflow: ellipsis; /* 超出内容显示为省略号*/
    white-space: nowrap; /*文本不进行换行*/
    word-break: break-all;
  }

  .title {
    font-weight: 700;
    font-size: 18px;
  }

  .author {
    color: #b4b4b4;
    margin-top: 10px;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    font-weight: 700;
  }

  .author a {
    color: #b4b4b4;
  }

  .author a:nth-child(2) {
    margin: 0 5px;
  }

  .author a:hover {
    color: cornflowerblue;
  }

  .author a i {
    font-size: 12px;
  }

  .author span {
    font-size: 12px;
    display: inline-block;
    line-height: 20px;
    margin: 0 5px;
  }

  .author span i {
    font-size: 12px;
  }

  .icon-fufei {
    color: #e2b882 !important;
    font-size: 16px;
  }

  .jiazai a {
    display: block;
    width: 100%;
    height: 40px;
    border-radius: 30px;
    text-align: center;
    line-height: 40px;
    background: #a5a5a5;
    color: #fff;
    margin: 50px 0;
  }
</style>
