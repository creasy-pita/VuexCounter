<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>In the parent component or top level , I can use $store to getters the state [count] = {{$store.state.count +"ddd"}}</div>
    <Counter/>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'

export default {
  name: 'app',
  components: {
    Counter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
