<template>
  <div>
    <button @click="back">返回</button>
    <h1>界面Dtab1</h1>
    <button @click="intent">跳转E</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created() {
      this._loadDatas()
    },
    methods: {
      _loadDatas() {
        console.log('加载D_tab1...')
      },
      intent() {
        this.$router.push('/E_05')
      },
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>

</style>
