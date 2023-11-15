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
            <el-input v-model="input" placeholder="请输入想要转化音频的地址" style="width: 80%;margin-right: 100px;"></el-input>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-progress :text-inside="true" :stroke-width="24" :percentage=this.per status="success" style="margin-top: 120px;"></el-progress>
            <div style="margin-left: 750px;margin-top: 30px;font-family: PingFang SC;font-size: large;">网址定位中........</div>
            <div style="margin-top: 180px;">
                <el-descriptions class="margin-top" title="音频基本信息" :column="3" :size="size" border>
                    <template slot="extra">
                    </template>
                    <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-user"></i>
                        音频名称
                    </template>
                    kooriookami
                    </el-descriptions-item>
                    <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-mobile-phone"></i>
                        音频时长
                    </template>
                    3879秒
                    </el-descriptions-item>
                    <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-location-outline"></i>
                        音频描述
                    </template>
                    这是一段描述
                    </el-descriptions-item>
                    <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-tickets"></i>
                        音频作者
                    </template>
                    Igor
                    </el-descriptions-item>
                    <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-office-building"></i>
                        评价
                    </template>
                    <el-rate
                    v-model="value"
                    show-text
                    style="">
                </el-rate>
                    </el-descriptions-item>
                </el-descriptions>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        per:90,
        value: null
      };
    },
    methods: {
      goVideo(){
        this.$router.push('/video');
      }
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
  </style>