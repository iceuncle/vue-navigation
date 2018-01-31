<template>
  <div>
    <button @click="back">返回</button>
    <h1>界面F</h1>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created() {
      this._loadDatas()
    },
    methods: {
      _loadDatas() {
        console.log('加载F...')
      },
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>

</style>
