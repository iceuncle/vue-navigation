<template>
  <div>
    <button @click="back">返回</button>
    <h1>界面E</h1>
    <button @click="intent">跳转F</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created() {
      this._loadDatas()
    },
    methods: {
      _loadDatas() {
        console.log('加载E...')
      },
      intent() {
        this.$router.push('/F_06')
      },
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>

</style>
