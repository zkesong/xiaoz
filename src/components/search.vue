<template>
  <div class="search">
    <input
      @confirm="confirm"
      @focus="focus"
      @input="change"
      confirm-type='search'
      :type="type"
      :placeholder="placeholder?placeholder:'输入框'"
    >
    <img :src="searchIcon" @click="tap"/>
  </div>
</template>
<script>
export default {
  props: {
    'type': '',
    'placeholder': '',
    'searchIcon': ''
  },
  methods: {
    focus () {
      this.$emit('focus')
    },
    change (e) {
      this.$emit('change', e.detail.value)
    },
    confirm (e) {
      this.$emit('confirm', e.detail.value)
    },
    tap () {
      this.$emit('click')
    }
  }
}
</script>
<style>
.search{
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  width:90%;
  height:60rpx;
  background-color:whitesmoke;
  border:1rpx solid whitesmoke;
  border-radius: 30px;
  margin: 10px auto;
}

/* 搜索框提示文字样式 */
.search input{
  width: 100%;
  font-size:27rpx;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding-left:30rpx; 
}

/* 搜索框小图标 */
.search image{ 
  width:40rpx;
  height:40rpx;
  padding-right:20rpx;
}
</style>

