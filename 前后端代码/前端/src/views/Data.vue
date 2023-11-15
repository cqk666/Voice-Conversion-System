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
            <div>
                <el-row :gutter="20">
                <el-col :span="6">
                    <div>
                    <el-statistic
                        group-separator=","
                        :precision="2"
                        :value="value2"
                        :title="title"
                    ></el-statistic>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div>
                    <el-statistic title="在线人数">
                        <template slot="formatter">
                        1908
                        </template>
                    </el-statistic>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div>
                    <el-statistic
                        group-separator=","
                        :precision="2"
                        decimal-separator="."
                        :value="value1"
                        :title="title"
                    >
                        <template slot="prefix">
                        <i class="el-icon-s-flag" style="color: red"></i>
                        </template>
                        <template slot="suffix">
                        <i class="el-icon-s-flag" style="color: blue"></i>
                        </template>
                    </el-statistic>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div>
                    <el-statistic :value="like ? 521 : 520" title="Feedback">
                        <template slot="suffix">
                        <span @click="like = !like" class="like">
                            <i
                            class="el-icon-star-on"
                            style="color:red"
                            v-show="!!like"
                            ></i>
                            <i class="el-icon-star-off" v-show="!like"></i>
                        </span>
                        </template>
                    </el-statistic>
                    </div>
                </el-col>
                </el-row>
            </div>
            <div class="block" style="margin-left: 1500px;margin-top: 100px;overflow-y: auto; height: 700px;">
                <el-timeline :reverse="reverse">
                    <el-timeline-item
                    v-for="(activity, index) in activities"
                    :key="index"
                    :timestamp="activity.timestamp">
                    {{activity.content}}
                    </el-timeline-item>
                </el-timeline>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        like: true,
        value1: 4154.564,
        value2: 1314,
        title: "累计访问量",
        reverse: false,
        activities: [{
          content: '添加实时互动',
          timestamp: '2018-05-15'
        },{
          content: '实现数据抓取',
          timestamp: '2018-05-15'
        },{
          content: '添加弹幕功能',
          timestamp: '2018-05-15'
        },{
          content: '修改注册问题',
          timestamp: '2018-05-15'
        }, {
          content: '成功上线',
          timestamp: '2018-04-15'
        }, {
          content: '通过审核',
          timestamp: '2018-04-13'
        }, {
          content: '测试完成',
          timestamp: '2018-04-11'
        }]
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