import Vue from 'vue'
import Vuex from 'vuex'

// 需要安装持久化插件 vuex-persistedstate    cnpm i vuex-persistedstate -S
import persist from 'vuex-persistedstate' // 作用： 用户刷新页面的时候，数据会保持

Vue.use(persist) // 使用
Vue.use(Vuex)

export default new Vuex.Store({
    state: { // vuex 存数据的地方   可以类比成组件里边的data
        listid:[],
        listids:[],
        list: []
    },
    mutations: { // 改变数据的地方
        chagelistid(state,obj){
            state.listid = obj
        },
        chagelistids(state,obj){
            state.listid = obj
        },
        // changelist(state,obj){
        //     state.list = obj
        // }
    },
    getters: { // 可以类比计算属性
        // 给一个方法 里边加上参数值 内部 赋值一个空 为0  遍历 详情页提交的 数据有多少个  让 遍历 的 num  等于 赋值 最后把实际参数返回到 形参调用
    },
    actions: {},
    modules: {},
    plugins: [
        persist()
    ]
})