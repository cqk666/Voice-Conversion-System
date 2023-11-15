<template>
        <div class="sidebar">
          <el-menu :default-active="activeMenu" class="menu" router>
            <el-menu-item >
              <i class="el-icon-s-order"></i>
              <span slot="title"><router-link to="/index">主页</router-link></span>
            </el-menu-item>
            <el-submenu index="sub1">
              <template slot="title">
                <i class="el-icon-video-camera-solid"></i>
                <span>视频处理</span>
              </template>
              <el-menu-item >
                <span slot="title" ><router-link to="/upload">视频上传</router-link></span>
              </el-menu-item>
              <el-menu-item>
                <span slot="title"><router-link to="/url">网址上传</router-link></span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item>
              <i class="el-icon-s-order"></i>
              <span slot="title"><router-link to="/submit">提交记录</router-link></span>
            </el-menu-item>
            <el-menu-item >
              <i class="el-icon-s-claim"></i>
              <span slot="title">查看详情</span>
            </el-menu-item>
            <el-menu-item>
              <i class="el-icon-s-platform"></i>
              <span slot="title"><router-link to="/online">在线观看</router-link></span>
            </el-menu-item>
            <el-menu-item>
              <i class="el-icon-s-marketing"></i>
              <span slot="title"><router-link to="/data">网站概况</router-link></span>
            </el-menu-item>
          </el-menu>
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
    color: black;
  }
  .router-link-active {
    text-decoration: none;
    color: red;
  }
  
  </style>