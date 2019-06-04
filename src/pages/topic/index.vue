<template>
  <div class="container topic-list">
    <div v-for="(topic, inx) in topics" :key="inx">
      <div class="topic-item">
        <image :src="topic.imageUrl"></image>
        <text class="topicName">{{topic.name}}            </text>     
        <text class="topicCount topic-text">{{topic.count}}</text><text class="topic-text">人 参与话题</text>
        <button class="btn-discuss" hover-class='btn-click'>参与讨论</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      topics: [
        {
          'name': '若为自由故，两者皆可抛',
          'imageUrl': 'http://image2.cnpp.cn/upload/images/20180725/17473224963_1170x700.jpg',
          'count': 12
        },
        {
          'name': '若为自由故，两者皆可抛',
          'imageUrl': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1410699069,2629528698&fm=26&gp=0.jpg',
          'count': 12
        },
        {
          'name': '若为自由故，两者皆可抛',
          'imageUrl': 'http://image2.cnpp.cn/upload/images/20180725/17473224963_1170x700.jpg',
          'count': 12
        },
        {
          'name': '若为自由故，两者皆可抛',
          'imageUrl': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1410699069,2629528698&fm=26&gp=0.jpg',
          'count': 12
        }
      ]
    }
  }
}
</script>

<style>
button::after{
  border: none;
}
.topic-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
  background-color: #f8f8f8;
}
.topic-item {
  position: relative;
  margin: 10rpx;
  height: 280px;
  background-color: white;
  border-radius: 5%;
}
.topic-item image{
  height: 200px;
}
.topic-item .topicName{
  width: 100%;
  display: block;
  font: bold;
  margin-left: 14px;
}
.topic-item .topicCount{
  color: red;
  margin-left: 14px;
}
.topic-item .topic-text{
  font-size: 12px;
}
.topic-item .btn-discuss{
  position: absolute;
  bottom: 1%;
  right: 2%;
  width: 28%;
  font-size: 14px;
  margin-bottom: 10px;
  color: white;
  background-color: #8ece90;
}
.topic-item .btn-click{
  background-color: #53b77b;
}

</style>

