<!-- 登陆页面 -->
<template>
  <div id="login">
    <group>
      <x-input
        title="账户："
        type="text"
        placeholder="请输入账户"
        v-model="loginData.username"
        name="username"
      ></x-input>
      <x-input
        title="密码："
        type="text"
        placeholder="请输入密码"
        v-model="loginData.password"
        name="password"
      ></x-input>
      <x-button type="primary" @click.native="loginSubmit">登录</x-button>
    </group>
    <group title="入参数据">
      <x-input
        title="加密前："
        type="text"
        v-model="encrypt.beforEncrypt"
        name="username"
      ></x-input>
      <x-input
        title="加密后："
        type="text"
        v-model="encrypt.afterEncrypt"
        name="password"
      ></x-input>
    </group>
    <group title="服务器返回">
      <x-input
        title="解密前："
        type="text"
        v-model="decrypt.beforDecrypt"
        name="username"
      ></x-input>
      <x-input
        title="解密后："
        type="text"
        v-model="decrypt.afterDecrypt"
        name="password"
      ></x-input>
    </group>
  </div>
</template>
<script>
import { XInput, XButton, Group } from 'vux'
export default {
  name: 'login',
  components: { XInput, XButton, Group },
  data() {
    return {
      loginData: {
        username: '',
        password: ''
      },
      encrypt: { beforEncrypt: '', afterEncrypt: '' },
      decrypt: { beforDecrypt: '', afterDecrypt: '' }
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
      _this.encrypt.beforEncrypt = JSON.stringify(data)
      _this.encrypt.afterEncrypt = JSON.stringify(params)
      console.log(_this.$store.state.baseUrl)
      console.log(_this.$store.state.apiUrl)
      // let hexparams = this.CryptoUtils.strToHexCharCode(params)
      _this.axios
        .post(_this.$store.state.apiUrl + 'message', params)
        .then(response => {
          if (1 === response.data.status) {
            let StrData = _this.CryptoUtils.decrypt(response.data.resData.data)
            let obj = JSON.parse(StrData) //将json字符串转换成json对象
            console.log(obj.data)
            _this.decrypt.beforDecrypt = JSON.stringify(response.data.resData)
            _this.decrypt.afterDecrypt = StrData
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
