<template>
  <div>
    <div class="tab">
      <div class="tab-item" @click="intent(1)">tab1</div>
      <div class="tab-item" @click="intent(2)">tab2</div>
    </div>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created() {

    },
    data () {
      return {
//        试了半天，发现有路由界面时在beforeEach全局中还是不好配置，只能这样处理了
        needDestory: false
      }
    },
    methods: {
      intent(index) {
        if (index === 1) {
          this.$router.replace('/Dtab1_04')
        } else {
          this.$router.replace('/Dtab2_04')
        }
      },
      back() {
        this.$router.go(-1)
      }
    },
    beforeRouteLeave (to, from, next) {
      if (to.path === '/C_03') {
        this.needDestory = true
      }
      next()
    },
    deactivated() {
      console.log(this.needDestory)
      if (this.needDestory) {
        this.$destroy()
      }
    }
  }
</script>

<style>
  .tab {
    width: 100%;
    height: 40px;
    border-bottom: solid 1px deepskyblue;
    display: flex;
    display: -webkit-flex;
  }

  .tab-item {
    width: 100%;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
  }


</style>
