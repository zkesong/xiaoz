<template>
  <div @click="clickHandle">
    <!-- 搜索 -->
    <search placeholder="请输入搜索关键字" searchIcon="../../static/images/search.png"/>
    <!-- 轮播图 -->
    <banner />
    <!-- 分类导航 -->
    <i-navbar @tagChange="onTagChange" />
    <!-- 列表 -->
    <postsList :postsList='postsList'></postsList>
  </div>
</template>

<script>
import search from '@/components/search'
import banner from '@/components/banner'
import { posts } from '@/utils/api'
import postsList from '@/components/postsList'

export default {
  data () {
    return {
      page: 1,
      postsList: [{
        'post_thumbnail_image': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1410699069,2629528698&fm=26&gp=0.jpg',
        'category_name': '中国电信',
        'date': '2019-06-01',
        'total_comments': 66,
        'pageviews': 10,
        'like_count': 6,
        title: {
          'rendered': '这是推荐文章'
        }
      }],
      postsLists: [
        [{
          'post_thumbnail_image': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1410699069,2629528698&fm=26&gp=0.jpg',
          'category_name': '中国电信',
          'date': '2019-06-01',
          'total_comments': 66,
          'pageviews': 10,
          'like_count': 6,
          title: {
            'rendered': '这是推荐文章'
          }
        }],
        [{
          'post_thumbnail_image': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1410699069,2629528698&fm=26&gp=0.jpg',
          'category_name': '中国移动',
          'date': '2019-06-01',
          'total_comments': 66,
          'pageviews': 10,
          'like_count': 6,
          title: {
            'rendered': '这是网络的文章'
          }
        }],
        [{
          'post_thumbnail_image': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1410699069,2629528698&fm=26&gp=0.jpg',
          'category_name': '中国联通',
          'date': '2019-06-01',
          'total_comments': 66,
          'pageviews': 10,
          'like_count': 6,
          title: {
            'rendered': '这是软件的文章'
          }
        }],
        [{
          'post_thumbnail_image': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1410699069,2629528698&fm=26&gp=0.jpg',
          'category_name': '中国联通',
          'date': '2019-06-01',
          'total_comments': 66,
          'pageviews': 10,
          'like_count': 6,
          title: {
            'rendered': '这是运维相关的文章'
          }
        }],
        [{
          'post_thumbnail_image': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1410699069,2629528698&fm=26&gp=0.jpg',
          'category_name': '中国联通',
          'date': '2019-06-01',
          'total_comments': 66,
          'pageviews': 10,
          'like_count': 6,
          title: {
            'rendered': '这是大数据相关的文章'
          }
        }]
      ]
    }
  },

  components: {
    banner,
    postsList,
    search
  },

  // 刷新
  onPullDownRefresh: function () {
    this.page = 1
    this.postsList = []
    this.getHomeData()
  },

  // 加载更多
  onReachBottom () {
    this.page++
    this.getHomeData()
    console.log('加载更多')
  },

  computed: {
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },

    getHomeData () {
      this.getPosts()
    },
    onChange (event) {
      this.keyWord = event.mp.detail
    },
    // 分类文章导航
    onTagChange: function (e) {
      let id = e.mp.detail.id
      this.postsList = this.postsLists[id]
    },
    //  搜索触发
    onSearch (event) {
      console.log('搜索：' + this.keyWord)
      this.page = 1
      this.postsList = []
      this.getHomeData()
    },
    // 获取文章列表
    async getPosts () {
      console.log('获取文章列表：' + this.page + '页')
      const data = {
        page: this.page,
        search: this.keyWord,
        categories: 0
      }
      let res = await posts(data)
      res.forEach(c => this.postsList.push(c))
      console.log(this.postsList)
      this.isFootShow = true
      wx.stopPullDownRefresh()
    },
    detailUrl (item) {
      console.log(item)
      wx.navigateTo({
        url: '/pages/homeDetails?id=' + item.id
      })
    }
  },

  mounted () {
    this.$nextTick(function () {
      this.getHomeData()
    })
  },
  onShareAppMessage (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '分享的首页',
      path: 'pages/home'
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.seach {
  border-bottom: 1px solid #eee;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
