<!-- 登陆页面 -->
<template>
  <div id="login">
    <group>
      <selector
        title="模板："
        direction="rtl"
        :options="list"
        v-model="mould"
        @on-change="onChange"
      ></selector>
      <x-input
        title="手机号："
        type="text"
        placeholder="请输入手机号"
        v-model="message.number"
        name="number"
      ></x-input>
      <x-input
        title="姓名："
        type="text"
        placeholder="请输入姓名"
        v-model="message.name"
        name="name"
      ></x-input>
      <x-input
        title="关系："
        type="text"
        placeholder="请输入关系"
        v-model="message.rela"
        name="rela"
      ></x-input>
      <x-input
        title="回复："
        type="text"
        placeholder="请输入回复关系"
        v-model="message.relaname"
        name="relaname"
        v-show="mouldType"
      ></x-input>

      <x-button type="primary" @click.native="loginSubmit">发送</x-button>
    </group>
    <group title="入参数据">
      <x-textarea title="" :max="200" :value="info"> </x-textarea>
    </group>
  </div>
</template>
<script>
import { XInput, XButton, Group, XTextarea, Selector } from 'vux'
export default {
  name: 'login',
  components: { XInput, XButton, Group, XTextarea, Selector },
  data() {
    return {
      message: {
        number: '',
        name: '',
        rela: '',
        relaname: '',
        mould: ''
      },
      list: [
        { key: 'SMS_167532346', value: '模板2' },
        { key: 'SMS_167973461', value: '模板3' }
      ],
      mould: 'SMS_167532346',
      mouldType: true
    }
  },
  created() {},
  watch: {},
  computed: {
    info: function() {
      if (this.mould === 'SMS_167973461') {
        return (
          '【微快递】亲爱的{' +
          this.message.name +
          '}，你好，你有一个消了气的{' +
          this.message.rela +
          '}需要你及时签收，请回复{' +
          this.message.relaname +
          '}要抱抱~签收，'
        )
      } else {
        return (
          '【微快递】亲爱的{' +
          this.message.name +
          '},你好，你快递的{' +
          this.message.rela +
          '}已经到达你身边，请携带有效证件到当地民政局领取，谢谢配合'
        )
      }
    }
  },
  methods: {
    onChange(val) {
      if (val === 'SMS_167973461') {
        this.mouldType = true
      } else {
        this.mouldType = false
      }
    },
    loginSubmit() {
      if (!this.message.number) {
        this.$vux.toast.text('手机号不能为空', 'middle')
        return
      }
      if (!this.message.name) {
        this.$vux.toast.text('姓名不能为空', 'middle')
        return
      }
      if (!this.message.rela) {
        this.$vux.toast.text('关系不能为空', 'middle')
        return
      }
      let _this = this
      this.message.mould = this.mould
      let params = this.message
      _this.axios
        .post(_this.$store.state.apiUrl + 'message', params)
        .then(response => {
          if (1 === response.data.status) {
            _this.$vux.toast.show({
              text: response.data.resData.Message,
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
