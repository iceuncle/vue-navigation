<template>
  <div>
    <button @click="back">返回</button>
    <h1>界面C</h1>
    <button @click="intent">跳转D</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created() {
      this._loadDatas()
    },
    methods: {
      _loadDatas() {
        console.log('加载C...')
      },
      intent() {
        this.$router.push('/D_04')
      },
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>

</style>
