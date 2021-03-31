<template>
  <div class="navbars" name="navbars">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item to="/Home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/about" icon="search">消息</van-tabbar-item>
      <van-tabbar-item to="/my" icon="friends-o">我的</van-tabbar-item>
      <van-tabbar-item to="/us" icon="setting-o">关于我们</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'navbars',
  data() {
    return {
      active: '0'
    };
  },
  // 子组件转换
  components: {},
  // 数据引入
  mounted() {
  },
  created() {
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

</style>