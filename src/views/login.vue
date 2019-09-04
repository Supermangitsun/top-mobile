<template>
  <div>
    <!-- 导航头 -->
    <van-nav-bar title="请登录" />
    <!-- 输入框 -->
    <van-cell-group>
      <van-field v-model="user.mobile" clearable left-icon="phone-o" placeholder="请输入手机号" />
      <van-field v-model="user.code"  left-icon="contact" placeholder="请输入密码">
           <van-button slot="button" type="default" size='small'>发送验证码</van-button>
     </van-field>
    </van-cell-group>
    <!-- 登录按钮 -->
    <div class="login">
        <van-button class="login_a" type="info" @click="onLogin">登录</van-button>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'// 按需加载导入登录函数的封装
export default {
  name: 'Login',
  data () {
    return {
      user: {
        mobile: '13673863637',
        code: '246810'
      }
    }
  },
  methods: {
    // 点击按钮处理登录
    async onLogin () {
      try {
        const res = await login(this.user)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style>
</style>
