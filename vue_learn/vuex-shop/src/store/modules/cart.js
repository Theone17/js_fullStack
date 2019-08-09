const state = {
  items: []
};
const mutations ={
  pushProductToCart(state, {id}) {
    state.items.push({
      id,
      quantity: 1
    });
  },
  incrementItemQuantity(state, {id}) {
    const cartItem = state.items.find(item => item.id === id);
    cartItem.quantity++;
  }
};
const getters = {};
const actions = {
  addProductToCart({state, commit}, product) {
    if (product.inventory > 0) {
      // 把商品添加进inventory的逻辑
      // 检查下items里有没有，有就+1，没有就push
      const cartItem = state.items.find(item => item.id === product.id);
      if (!cartItem) {
        commit('pushProductToCart', {id: product.id});
      } else {
        commit('incrementItemQuantity', cartItem);
      }
    }
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}