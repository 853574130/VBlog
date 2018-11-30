<template>
  <el-container class="dashboard">
    <el-main class="main">
       
      <h1>首页模板</h1>
      <a href="http://localhost:8082/#/home"><h5>进入后台</h5></a>
      <a href="http://localhost:8082/#/login"><h5>登录</h5></a>
    </el-main>
  </el-container>
</template>
<script>
export default {
  mounted: function() {
    var _this = this;
    getRequest("/isAdmin").then(resp => {
      if (resp.status == 200) {
        _this.isAdmin = resp.data;
      }
    });
  },
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
  }
};
</script>
<style>
</style>
