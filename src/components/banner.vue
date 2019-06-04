<template>
  <div class="i-banner">
    <swiper
      class="bannerBox"
      autoplay="true"
      interval="3000"
      duration="500"
      previous-margin="50rpx"
      next-margin="50rpx"
      @change="bannerChange"
    >
      <block v-for="(banner,inx) in bannerData" :key="banner.id">
        <swiper-item>
          <div class="fix pl5 pr5 box_bb">
            <navigator :url="'../list/main?id='+ banner.id">
              <image
                class="banner mt10"
                :class="{active: currentBannerIndex==inx}"
                :src="banner.src"
                mode="aspectFill"
              />
            </navigator>
          </div>
        </swiper-item>
      </block>
    </swiper>
    <div class="bannerDots">
      <div
        class="dot"
        :class="{active: currentBannerIndex==inx}"
        v-for="(banner,inx) in bannerData"
        :key="banner.id"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      bannerData: [
        {
          src:
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1410699069,2629528698&fm=26&gp=0.jpg',
          id: 0
        },
        {
          src:
            'http://img.tupianzj.com/uploads/allimg/160810/9-160Q0161301.jpg',
          id: 1
        },
        {
          src:
            'http://image2.cnpp.cn/upload/images/20180725/17473224963_1170x700.jpg',
          id: 2
        },
        {
          src: 'http://pic.yesky.com/uploadImages/2015/214/04/G777ARI259K9.jpg',
          id: 3
        }
      ],
      currentBannerIndex: 0
    }
  },
  methods: {
    bannerChange: function (e) {
      let current = e.mp.detail.current
      this.currentBannerIndex = current
    }
  }
}
</script>
<style scoped>
.i-banner {
  position: relative;
}
.bannerBox {
  margin: 5px;
  width:95%;
  height: 180px;
}
.banner {
  overflow: hidden;
  height: 168px;
  transition: transform 500ms;
  transform: scale(0.95, 0.9); /* 因为非主图看不清，所以可以变形处理 */
  border-radius: 8px;
  box-shadow: 0px 6px 10px 0px rgba(179, 154, 139, 1);
}
.banner.active {
  transform: scale(1, 1);
}
.bannerDots {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translate(-50%);
  width: 20%;
  height: 6px;
  display: flex;
  justify-content: space-around;
}
.dot {
  width: 6px;
  height: 6px;
  margin: 0 3px;
  border-radius: 3px;
  background-color: #fff;
}
.dot.active {
  width: 15px;
  background-color: #8ece90;
}
</style>