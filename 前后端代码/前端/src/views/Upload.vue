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
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="margin-left: 300px;margin-top: 150px;">
                <!-- <el-form-item label="活动名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item> -->
                <el-form-item  prop="region">
                    课程名称
                    <el-select v-model="ruleForm.region" placeholder="请选择课程名称" style="margin-left: 50px;">
                        <el-option label="计算机基础" value="shanghai"></el-option>
                        <el-option label="信息学" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item  required style="width: 900px;display: inline-block;">
                    上课时间
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="margin-left: 50px;"></el-date-picker>
                </el-form-item>>
                <el-form-item prop="desc" style="width: 1000px;">
                    备注
                    <el-input type="textarea" v-model="ruleForm.desc" style="width: 400px;margin-left: 100px;"></el-input>
                </el-form-item>
                <div style="width: 1000px;">
                    音频上传
                    <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :file-list="fileList"
                        style="width: 300px;margin-left: 500px;margin-top: 0px;margin-bottom: 30px;">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                    </el-upload>
                </div>
                <el-form-item style="margin-left: 100px;">
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
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
  a{
    text-decoration: none;
  }
  .router-link-active {
    text-decoration: none;
  }
  
  </style>