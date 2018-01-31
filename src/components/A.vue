<template>
  <div>
    <h1>界面A</h1>
    <button @click="intent">跳转B</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created() {
      this._loadDatas()
    },
    methods: {
      _loadDatas() {
        console.log('加载A...')
      },
      intent() {
        this.$router.push('/B_02')
      }
    }
  }
</script>

<style>

</style>
