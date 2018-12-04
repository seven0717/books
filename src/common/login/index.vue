<template>
  <div>
   <div class="lo">
     姓名：<input type="text" v-model="user"><br>
     密码：<input type="password" v-model="pass"><br>
     <button @click.stop.prevent="login">登陆</button>
   </div>
    <div class="msg" :class="flag? 'msgb' : ''">
      <p>密码不对哦</p>
    </div>
  </div>
</template>

<script>
   export default {
      name: "index",
     data(){
        return{
          user:'',
          pass:'',
          flag:false,
          token:'qwertyuiop'    //模拟的token值
        }
     },
     methods:{
        login(){
          if (this.user == '111' && this.pass == '111'){
            this.$store.commit('LOGIN',this.token);
            localStorage.token = this.token;
            this.$router.push({path:'/'})
          } else {
             this.flag = true;
             if (this.flag){
               setTimeout(()=>{
                 this.flag = false
               },3000)
             }
          }
        }
     }
   }
</script>

<style scoped>
.lo{
  width: 700px;
  height: 300px;
  border: 1px solid #e1e1e1;
  margin: 100px auto;
  text-align: center;
}
  .lo input{
    margin: 30px;
    border: 1px solid #e1e1e1;
    border-radius: 30px;
    padding-left: 10px;
    height: 30px;
  }
  .lo button{
    width: 130px;
    height: 40px;
    border-radius: 30px;
    font-size: 20px;
    padding: 5px;
    outline: none;
  }
  .msg{
    position: absolute;
    right: -200px;
    top: 40px;
    width: 200px;
    -webkit-border-radius: 15px;
    font-weight: 200;
    -moz-border-radius: 15px;
    border-radius: 15px;
    background: rgba(5, 4, 8, 0.71);
    text-align: center;
    color: #fff;
    line-height: 30px;
    transition: all .3s;
  }
  .msgb{
    right: 0;
    top: 40px;
  }
</style>
