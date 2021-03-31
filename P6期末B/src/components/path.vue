<template>
  <div class="paths" name="paths">
    <van-overlay :show="show" >
      <div class="wrapper" @click.stop>
        <div class="block" >
          <van-loading size="24px" vertical>加载中...</van-loading>
        </div>
      </div>
    </van-overlay>
    <div>
      <div class="sw">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="item in imgs">
            <img :src="item" alt="" class="im">
          </van-swipe-item>
        </van-swipe>
      </div>
      {{ list.name }}
      {{ list.address }}
      {{ list.businessHours }}
      {{ list.link }}
      {{ list.phone }}
      {{ list.supportService }}
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      list: [],
      imgs: [], show: true,
    };
  },
  // 子组件转换
  components: {},
  // 数据引入
  mounted() {
  },
  created() {
    console.log(this.$route.query)
    this.imgs = this.$route.query.images
    this.list = this.$route.query
    setTimeout(() => {
      this.show = false
    }, 1000);
  },
  //点击函数事件
  methods: {},
  //计算事件
  computed: {},
  //数据监听
  watch: {},
  //过滤器
  filters: {},
  //设定自定义指令
  directives: {},
}
</script>
<style lang="scss" scoped>
.sw {
  width: 100vw;

  .im {
    width: 100%;
  }
}

</style>