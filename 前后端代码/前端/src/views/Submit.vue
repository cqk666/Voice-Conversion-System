<template>
    <div class="dashboard">
      <div class="header">
        <div class="logo">
          <h1>良译通</h1>
        </div>
      </div>
      <div class="main">
        <common-side></common-side>
        <div class="content">
            <div style="display: inline-block;justify-content:space-between;">
              <div style="margin-left: 1400px;">
                <el-button type="primary">查看全部</el-button>
                <el-button type="info">查看自己</el-button>
              </div>
            </div>
            <el-table
              :data="tableData"
              height="800"
              style="width: 1700px;height: 800px;overflow-y: auto;">
              <el-table-column
                fixed
                prop="up_date"
                label="上传日期"
                width="200">
              </el-table-column>
              <el-table-column
                prop="up_id"
                label="编号"
                width="300">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="150">
              </el-table-column>
              <el-table-column
                prop="cardid"
                label="学号"
                width="250">
              </el-table-column>
              <el-table-column
                prop="cn_course"
                label="课程中文名称"
                width="250">
              </el-table-column>
              <el-table-column
                prop="en_course"
                label="课程英文名称"
                width="300">
              </el-table-column>
              <el-table-column
                prop="course_date"
                label="上课时间"
                width="250">
              </el-table-column>
              <el-table-column
                prop="up"
                label="进度"
                width="250">
              </el-table-column>
            </el-table>
        </div>  
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
        return {
            form: {
                select: '',
                date: null,
            },
            tableData: [{
              up_date: '2016-05-02',
              up_id:'20160502203213100001',
              name: '王小虎',
              cardid: '20321310',
              up:'已完成',
              cn_course:'计算机基础',
              course_date:'2016-05-02',
              en_course:'Computer Basic'
            },{
              up_date: '2016-05-02',
              up_id:'20160502203213100001',
              name: '王小虎',
              cardid: '20321310',
              up:'已完成',
              cn_course:'计算机基础',
              course_date:'2016-05-02',
              en_course:'Computer Basic'
            },{
              up_date: '2016-05-02',
              up_id:'20160502203213100001',
              name: '王小虎',
              cardid: '20321310',
              up:'已完成',
              cn_course:'计算机基础',
              course_date:'2016-05-02',
              en_course:'Computer Basic'
            },{
              up_date: '2016-05-02',
              up_id:'20160502203213100001',
              name: '王小虎',
              cardid: '20321310',
              up:'已完成',
              cn_course:'计算机基础',
              course_date:'2016-05-02',
              en_course:'Computer Basic'
            },{
              up_date: '2016-05-02',
              up_id:'20160502203213100001',
              name: '王小虎',
              cardid: '20321310',
              up:'已完成',
              cn_course:'计算机基础',
              course_date:'2016-05-02',
              en_course:'Computer Basic'
            },{
              up_date: '2016-05-02',
              up_id:'20160502203213100001',
              name: '王小虎',
              cardid: '20321310',
              up:'已完成',
              cn_course:'计算机基础',
              course_date:'2016-05-02',
              en_course:'Computer Basic'
            },{
              up_date: '2016-05-02',
              up_id:'20160502203213100001',
              name: '王小虎',
              cardid: '20321310',
              up:'已完成',
              cn_course:'计算机基础',
              course_date:'2016-05-02',
              en_course:'Computer Basic'
            },{
              up_date: '2016-05-02',
              up_id:'20160502203213100001',
              name: '王小虎',
              cardid: '20321310',
              up:'已完成',
              cn_course:'计算机基础',
              course_date:'2016-05-02',
              en_course:'Computer Basic'
            },{
              up_date: '2016-05-02',
              up_id:'20160502203213100001',
              name: '王小虎',
              cardid: '20321310',
              up:'已完成',
              cn_course:'计算机基础',
              course_date:'2016-05-02',
              en_course:'Computer Basic'
            },{
              up_date: '2016-05-02',
              up_id:'20160502203213100001',
              name: '王小虎',
              cardid: '20321310',
              up:'已完成',
              cn_course:'计算机基础',
              course_date:'2016-05-02',
              en_course:'Computer Basic'
            },{
              up_date: '2016-05-02',
              up_id:'20160502203213100001',
              name: '王小虎',
              cardid: '20321310',
              up:'已完成',
              cn_course:'计算机基础',
              course_date:'2016-05-02',
              en_course:'Computer Basic'
            }]
      };
    },
    methods(){
        // submitForm() {
        //     this.$refs.form.validate((valid) => {
        //         if (valid) {
        //             // 表单验证通过后的逻辑
        //         }
        //     });
        // },
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
  .el-table--fit td .cell{
    overflow: visible;
  }
  .el-table .cell{
    overflow: visible;
  }


 
</style>