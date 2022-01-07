import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { Product } from '../interface'

export interface State {
  shoppingCart: Product[] //  这是个数组
}

//  创建唯一类型key
//  const key: InjectionKey<string> = Symbol()
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    shoppingCart: []
  },
  getters: {
    isInCart: function (state) {
      return (id: number): boolean => {
        return state.shoppingCart.some((item) => item.id == id)
      }
    }
  },
  mutations: {
    ADD_TO_CARD(state, payload) {
      payload.product.count++
      state.shoppingCart.push(payload.product)
    },
    CHANGE_GOODS_COUNT(state, payload) {
      console.log('payload--->', payload)
      state.shoppingCart.forEach((item) => {
        if (item.id == payload.id) {
          payload.type == 'add' ? item.count++ : item.count--
        }
      })
    }
  }
})

export function useStore() {
  // 通过key给store提供类型
  return baseUseStore(key)
}
