<template>
  <div>
    <userinfo/>
    <div class="section-Gray">
      <div class="section-Common">
        <div class="menu1">
          <div class="item">
            <image src="../../static/images/browser.png"/>
            <text>浏览</text>
          </div>
          <div class="item">
            <image src="../../static/images/store.png"/>
            <text>收藏</text>
          </div>
          <div class="item">
            <image src="../../static/images/message.png"/>
            <text>消息</text>
          </div>
          <div class="item">
            <image src="../../static/images/setting.png"/>
            <text>设置</text>
          </div>
        </div>
      </div>
      <div class="section-Others">
        <div class="menu2">
          <div class="item">
            <image src="../../static/images/thumbup.png"/>
            <text>我的点赞</text>
          </div>
          <div class="item">
            <image src="../../static/images/author.png"/>
            <text>作者信息</text>
          </div>
          <div class="item">
            <image src="../../static/images/bug.png"/>
            <text>错误反馈</text>
          </div>
          <div class="item" style="border:none">
            <image src="../../static/images/garbage.png"/>
            <text>垃圾清理</text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import userinfo from '@/components/userinfo'

export default {
  components: {
    userinfo
  }
}
</script>
<style>
.section-Gray {
  height: 75vh;
  background-color: #f2f2f2;
  position: relative;
}
.section-Common{
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -10%);
  width: 62vh;
  height: 16vh;
  background-color: white;
  border-radius: 1%;
  box-shadow:  0 1px 3px #dbdbdb;
}
.section-Common .menu1{
  display: flex;
  justify-content: center;
}
.section-Common .menu1 .item{
  width: 35px;
  height: 65px;
  text-align: center;
  margin: 3vh 4vh;
}
.section-Common .menu1 .item image{
  width: 76%;
  height: 40%;
 }
 .section-Common .menu1 .item text{
   font-size: 13px;
   color: #8a8a8a;
 }
.section-Others{
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, 50%);
  width: 62vh;
  height: 40vh;
  background-color: white;
  border-radius: 1%;
}
.section-Others .menu2{
  height: 100%;
  width: 100%;
}
.section-Others .menu2 .item{
  display: flex;
  align-items: center;
  width: 95%;
  height: 20%;
  margin: 10px;
  border-bottom:1rpx dashed #dbdbdb;
}
.section-Others .menu2 .item image{
  width: 6%;
  height: 40%;
 }
 .section-Others .menu2 .item text{
   margin-left: 10px;
   font-size: 14px;
   color: #8a8a8a;
 }
</style>

