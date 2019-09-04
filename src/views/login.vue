<template>
  <div>
    <!-- 导航头 -->
    <van-nav-bar title="请登录" />
    <!-- 输入框 -->
    <van-cell-group>
      <van-field v-model="value"  left-icon="contact" placeholder="请输入手机号" />
      <van-field v-model="value"  left-icon="contact" placeholder="请输入密码">
           <van-button slot="button" type="default" size='small'>发送验证码</van-button>
     </van-field>
    </van-cell-group>
    <!-- 登录按钮 -->
    <div class="login">
        <van-button class="login_a" type="info">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
  }
}
</script>

<style>
</style>
