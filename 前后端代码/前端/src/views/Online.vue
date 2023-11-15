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
            <div class="video_control">
                <video ref="videoRef" controls :src="videoUrl" class="video"></video>
                <div>
                <!-- 暂停和播放按钮 -->
                <button @click="toggleVideo">{{ isPlaying ? '暂停' : '播放' }}</button>

                <!-- 倍速选择 -->
                <select v-model="speed">
                    <option value="1">正常速度</option>
                    <option value="1.5">1.5倍速</option>
                    <option value="2">2倍速</option>
                </select>

                <!-- 清晰度选择 -->
                <select v-model="quality">
                    <option value="low">低清晰度</option>
                    <option value="medium">中等清晰度</option>
                    <option value="high">高清晰度</option>
                </select>
                </div>
            </div>
            <div>
                弹幕列表
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import CommonSide from '@/components/CommonSide.vue';
  import flv from'../utils/flv'

  export default {
  components: { CommonSide },
    data() {
      return {
        videoUrl: 'https://video.699pic.com/videos/ing_left_all/ING_VID_8690269_10s.mp4',
        isPlaying: false,
        speed: 1,
        quality: 'medium'
      };
    },
    methods: {
      goVideo(){
        this.$router.push('/video');
      },
      toggleVideo() {
      const video = this.$refs.videoRef;
      this.isPlaying = !this.isPlaying;

      if (this.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }
  },
  watch: {
    speed(newSpeed) {
      this.$refs.videoRef.playbackRate = parseFloat(newSpeed);
    },
    quality(newQuality) {
      const video = this.$refs.videoRef;
      const sources = video.getElementsByTagName('source');

      for (let i = 0; i < sources.length; i++) {
        const source = sources[i];
        if (source.getAttribute('data-quality') === newQuality) {
          video.setAttribute('src', source.getAttribute('src'));
          break;
        }
      }

      video.load();
      video.play();
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
  .video_control {
  width: 850px; /* 根据需求调整宽度 */
  height: 450px; /* 根据需求调整高度 */
}

.video {
  width: 100%;
}

.video-controls {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content:center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  color: #ffffff;
  padding: 5px;
}

.video-controls button,
.video-controls select {
  margin-right: 10px;
  padding: 5px 10px;
  border: none;
  background-color: #ffffff;
  color: #000000;
  cursor: pointer;
}

.video-controls button:hover,
.video-controls select:hover {
  background-color: #cccccc;
}

.video-controls button {
  background-color: #f0f0f0;
  color: #000000;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
}

.video-controls button:hover {
  background-color: #cccccc;
}
  </style>