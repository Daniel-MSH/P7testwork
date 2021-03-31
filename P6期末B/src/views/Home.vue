<template>
  <div class="Home" name="Home">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
      <van-swipe-item v-for="item in list">
        <img class="imgs" :src="item.image" alt="">
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="3">
      <van-grid-item v-for="(item,index) in sduk"  :icon="item.icon" :text="item.name" @click="one(index,item.id)"/>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      list:[],
      sduk:[],
    };
  },
  // 子组件转换
  components: {},
  // 数据引入
  mounted() {
  },
  created() {
    this.$axios({url: 'https://locally.uieee.com/slides', method: 'get'}).then(res => {
      this.list =res.data
    })
    this.$axios({url:'https://locally.uieee.com/categories',method:'get'}).then(res=>{
      this.sduk = res.data
    })
  },
  //点击函数事件
  methods: {
    one(item,id){
      console.log(id)
      this.$store.commit('chagelistid',id)
      this.$router.push("/goods")
    }
  },
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
.imgs{
  width: 100%;
}
</style>