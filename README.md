# vuex_counter 的解读

###2020年1月7日
####vuex 组件的编写的步骤  以vuex_counter为例

- 1 Counter.vue 定义 
	template 的定义：template with  html  or template in Vuecomponents instance 's attrubite, 
	data and methods 的定义
	style if in need
	
	会使用有 e.g. increment 等方法 来改变主键的状态， 所以会在
	注意 Counter.vue 会导入到app.vue
- 2 Counter.js   定义Counter 组件的状态  和 变化的方法，此处为 state 和 mutations 的 increment等
	state
		count
		evenOrOdd
	mutations
		increment
		decrement
		说明：mutations are operations that actually mutates the state
	getters
		提供外部访问内部的状态，需要通过 Vue全局变量 $store来访问 比如 $store.getters.count  
	actions
		提供
		说明： actions are functions that cause side effects and can involve asynchronous operations. 一般导出以便提供给外部调用来修改状态，此例中 Counter.vue 通过mapActions 来引入这些action,这样Counter.vue 中的template 就可以使用这些 方法了
- 3 	store/main.js 导入Counter.js 的内部变量	并实例化 Store, 同时 counter 作为一个modules参数传入
		modules 可以传入很多组件的状态，保证到统一个Store 来管理，  此处状态的名称要注意不能相同
- 4 app.vue   作为外层的组件,定义 template,   name 和 components
- 5 index.js 导入 app.vue , ./store , 创建vue 实例



#### 问题  app.vue 中 不能使用 $store.state.count
vuex 中 state,mutation 不会暴露给 $store 访问 ，而是根据 $store.getters 和 $store.commit('mutation.onemethod')方式来访问
####  vuex 编写的简化，一般只用于练习，实际需要分开， 而且  new Store时 用 modules 传入多个组件
counter.js  Counter.vue可以基础到一个文件Counter.vue,  这样省去actions 等从counter.js 中导出，并在Counter.vue中导入的麻烦， method中 可以直接使用  this.$store.commit('oneMethodInMutations')

