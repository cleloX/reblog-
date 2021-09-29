import { createStore } from 'vuex'
import getters from './getter'
import mutations from './mutation'
import actions from './action'
import { moduleA, moduleB} from './module'

const state = () => {
  return {
    count: 0
  }
}
// 创建一个新的 store 实例
const store = createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {
    moduleA,
    moduleB
  }
})

export default store