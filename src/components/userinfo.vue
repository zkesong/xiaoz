<template>
  <div class="section-userInfo">
      <button v-if="!hasUserInfo" @click="getUserInfo">快速登录</button>
      <div class="userInfo" v-else>
        <image @click="bindViewTap" class="userinfo-avatar" :src="userInfo.avatarUrl" mode="cover"></image>
        <span class="userinfo-nickname">{{userInfo.nickName}}</span>
      </div>
  </div>
</template>
<script>
import App from '@/App'

const app = App

export default {
  data () {
    return {
      hasUserInfo: false,
      userInfo: {}
    }
  },
  methods: {
    getUserInfo: function (e) {
      console.log(e)
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }
  },
  created () {
    if (app.globalData.userInfo) {
      this.userInfo = app.globalData.userInfo
      this.hasUserInfo = true
      console.log(app)
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  }
}
</script>
<style>
.section-userInfo {
  height: 25vh;
  background-color: #8ece90;
}
.userInfo {
  width: 40%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin-right: 30rpx;
  border-radius: 50%;
}
.userinfo-nickname {
  color: #ffffff;
}
</style>
