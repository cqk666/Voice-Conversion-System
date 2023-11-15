<template>
  <div class="dashboard">
    <div class="header">
      <div class="logo">
        <h1>良译通</h1>
        <!-- <div style="margin-left: 1000px;">
          <el-avatar> user </el-avatar>
         </div> -->
      </div>
      <!-- <div class="date-time">
        <span>{{ currentTime }}</span>
      </div> -->
    </div>
    <div class="main">
      <common-side></common-side>
      <div class="content">
          
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style>
.dashboard {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  height: 60px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.date-time {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-right: 20px;
}

.date-time .icon {
  margin-right: 5px;
}

.date-time .time {
  font-family: monospace;
  color: #333;
  font-weight: bold;
}
.logo h1 {
  margin: 0;
  /* font-size: 20px;
  color: #333; */
  font-family: "BlackChancery", cursive;
  font-size: 48px;
  color: #000;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.main {
  flex: 1;
  display: flex;
}

.sidebar {
  width: 200px;
  background-color: #f5f5f5;
  padding: 20px;
}

.menu {
  height: 100%;
}

.content {
  flex: 1;
  overflow: auto;
  padding: 20px;
}
.el-table {
  width: 100%;
}

.el-table--fit {
  width: 100%;
}

.el-table--fit td .cell {
  white-space: nowrap; /* 避免文字自动换行 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 显示省略号 */
  max-width: 0; /* 重置最大宽度 */
  width: 50px;
}

.el-table--fit td .cell div {
  word-break: keep-all; /* 避免单词内换行 */
  white-space: nowrap; /* 不允许换行 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 显示省略号 */
}
a{
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}

</style>