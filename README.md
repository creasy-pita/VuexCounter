# vuex_counter 的解读

vuex_counter
git commit -m "first commit"
git remote add origin https://github.com/creasy-pita/VuexCounter.git
git push -u origin master



### 问题  app.vue 中 不能使用 $store.state.count
vuex 中 state,mutation 不会暴露给 $store 访问 ，而是根据 $store.getters 和 $store.commit('mutation.onemethod')方式来访问

