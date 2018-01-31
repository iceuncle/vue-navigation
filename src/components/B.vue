<template>
  <div>
    <button @click="back">返回</button>
    <h1>界面B</h1>
    <button @click="intent">跳转C</button>
    <input v-model="data">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created() {
      this._loadDatas()
    },
    data() {
      return {
        data: ''
      }
    },
    methods: {
      _loadDatas() {
        console.log('加载B...')
      },
      intent() {
        this.$router.push('/C_03')
      },
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>

</style>
