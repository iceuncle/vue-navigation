<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="!$route.meta.noKeepAlive">
        <!-- 这里是会被缓存的视图组件 -->
      </router-view>
    </keep-alive>

    <router-view v-if="$route.meta.noKeepAlive">
      <!-- 这里是不被缓存的视图组件 -->
    </router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created() {

    }
  }
</script>

<style>
  button {
    background: gray;
    color: white;
    font-size: 20px;
  }
</style>
