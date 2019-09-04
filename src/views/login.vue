<template>
  <div>
    <!-- 导航头 -->
    <van-nav-bar title="请登录" />
    <!-- 输入框 -->
    <!-- 进行表单验证v-validate="'required'" -->
    <van-cell-group>
      <van-field  v-validate="'required|digits:11'" :error-message="errors.first('mobile') " name='mobile' v-model="user.mobile" clearable left-icon="phone-o" placeholder="请输入手机号" />
      <van-field v-validate="'required|digits:6'" :error-message="errors.first('code') " name='code' v-model="user.code"  left-icon="contact" placeholder="请输入密码">
           <van-button slot="button" type="default" size='small'>获取验证码</van-button>
     </van-field>
    </van-cell-group>
    <!-- 登录按钮 -->
    <div class="login">
        <van-button :loading='loading' loading-type="spinner" loading-text="登陆中..." class="login_a" type="info" @click="onLogin">登录</van-button>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'// 按需加载导入登录函数的封装
import { mapMutations } from 'vuex'// 简化本地存储导入到vuex中
export default {
  name: 'Login',
  data () {
    return {
      user: {
        mobile: '13673863637',
        code: '246810'
      },
      // 控制按钮是否显示正在登录
      loading: false
    }
  },
  // 配置validate的自定义验证信息
  created () {
    const dict = {
      custom: {
        // 验证文本框
        mobile: {
          required: '请输入手机号',
          digits: '手机号码必须是11位数字'
        },
        code: {
          required: '请输入验证码',
          digits: '验证码必须是6为数字'
        }
      }
    }

    this.$validator.localize('en', dict)
  },
  methods: {
    ...mapMutations(['setUser']),
    // 点击按钮处理登录
    async onLogin () {
      this.loading = true
      try {
        // 表单验证
        this.$validator.validate().then(async valid => {
          // 验证失败
          if (!valid) {
            this.loading = false
            return
          }
          // 验证成功
          // data是接口返回数据中的data，在拦截器做了处理
          const data = await login(this.user)
          console.log(data)
          // 存储登录的状态，因为有的页面需要去验证有没有登录，所以需要存储
          // 1，存储vuex中,但是刷新之后就没了，所以我们要把token保存到本地存储中
          // this.$store.commit('setUser', data)
          // 2，存储本地存中window.localStorage
          // window.localStorage.setItem('user', JSON.stringify())
          this.setUser(data)// 调用

          // 编程式导航跳转到首页
          this.$router.push('/')
          // vant框架提示
          this.$toast.success('登陆成功')
        })
      } catch (err) {
        // vant框架提示
        this.$toast.fail('登录失败')
      }
      this.loading = false
    }
  }
}
</script>

<style>
</style>
