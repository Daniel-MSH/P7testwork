<template>
  <div class="" name="">
    <van-overlay :show="show" >
      <div class="wrapper" @click.stop>
        <div class="block" >
          <van-loading size="24px" vertical>加载中...</van-loading>
        </div>
      </div>
    </van-overlay>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <template>
        <ul>
          <li v-for="item in list" @click="ones(item)">
            {{ item.address }}
            {{ item.businessHours }}
            {{ item.name }}
            {{ item.phone }}
            {{ item.score }}
            {{ item.supportService }}
          </li>
        </ul>
      </template>
    </van-pull-refresh>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: '',
  data() {
    return {
      list: [],
      ids: [],
      show: true,
      count: 0,
      isLoading: false,
    };
  },
  // 子组件转换
  components: {},
  // 数据引入
  mounted() {
  },
  created() {
    setTimeout(() => {
      var htt = "https://locally.uieee.com/categories/:id/shops"
      console.log(this.$store.state.listid)
      console.log(htt)
      this.$axios({url: htt, method: 'get'}).then(res => {
        console.log(res.data)
        this.list = res.data
      })
      this.show = false
    }, 1000);
  },
  //点击函数事件
  methods: {
    ones(obj) {
      // this.$store.commit(' changelist', obj)
      this.$router.push({
        path: '/paths',
        query: obj
      })
    },
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
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
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
li {
  width: 99vw;
  height: 10vh;
  border: 1px solid #000000;
}

/deep/ .bok {
  display: none;
}
</style>