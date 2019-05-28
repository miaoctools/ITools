<!-- 登陆页面 -->
<template>
  <div id="login">
    <form action="" method="post">
      <label for="username">用户名</label
      ><input type="text" v-model="loginData.username" name="username" />
      <label for="password">密码</label
      ><input type="text" v-model="loginData.password" name="password" />
      <input type="button" value="登录" @click="loginSubmit" />
    </form>
  </div>
</template>
<script>
export default {
  name: 'login',
  components: {},
  data() {
    return {
      loginData: {
        username: '',
        password: ''
      }
    }
  },
  created() {},
  methods: {
    loginSubmit() {
      if (!this.loginData.username) {
        this.$vux.toast.text('用户名不能为空', 'middle')
        return
      }
      if (!this.loginData.password) {
        this.$vux.toast.text('密码不能为空', 'middle')
        return
      }
      let _this = this

      let data = this.loginData
      let params = this.CryptoUtils.encrypt(JSON.stringify(data))
      console.log(_this.$store.state.baseUrl)
      console.log(_this.$store.state.apiUrl)
      // let hexparams = this.CryptoUtils.strToHexCharCode(params)
      _this.axios
        .post(_this.$store.state.apiUrl + 'demo', params)
        .then(response => {
          if (1 === response.data.status) {
            let StrData = _this.CryptoUtils.decrypt(response.data.resData.data)
            let obj = JSON.parse(StrData) //将json字符串转换成json对象
            console.log(obj.data)
            _this.$vux.toast.show({
              text: '登录成功',
              type: 'success',
              position: 'middle',
              onHide() {}
            })
          } else {
            _this.$vux.toast.show({
              text: response.data.msg,
              type: 'success',
              position: 'middle',
              onHide() {}
            })
          }
        })
    }
  }
}
</script>
