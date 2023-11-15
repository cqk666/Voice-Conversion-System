<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import Cookies from "js-cookie";
export default {
  name: "App",
  components: {},
  mounted() {
    document.body.style.zoom = 1;
    let beginTime = 0; //开始时间
    let differTime = 0; //时间差
    window.onunload = function () {
      differTime = new Date().getTime() - beginTime;
      if (differTime <= 5) {
        Cookies.remove("token");
      }
    };
    window.onbeforeunload = function () {
      beginTime = new Date().getTime();
    };
  },
};
// document.addEventListener(
//   "keydown",
//   function (event) {
//     if (
//       (event.ctrlKey === true || event.metaKey === true) &&
//       (event.which === 61 ||
//         event.which === 107 ||
//         event.which === 173 ||
//         event.which === 109 ||
//         event.which === 187 ||
//         event.which === 189)
//     ) {
//       event.preventDefault();
//     }
//   },
//   false
// );
// Chrome IE 360
window.addEventListener(
  "mousewheel",
  function (event) {
    if (event.ctrlKey === true || event.metaKey) {
      event.preventDefault();
    }
  },
  { passive: false }
);

//firefox
window.addEventListener(
  "DOMMouseScroll",
  function (event) {
    if (event.ctrlKey === true || event.metaKey) {
      event.preventDefault();
    }
  },
  { passive: false }
);
// document.onkeydown = () => {
//   //禁用F12
//   if (window.event && window.event.keyCode == 123) {
//     return false;
//     //禁用ctrl+shift+i,
//   } else if (
//     window.event.ctrlKey &&
//     window.event.shiftKey &&
//     window.event.keyCode == 73
//   ) {
//     return false;
//     //屏蔽Shift+F10
//   } else if (window.event.shiftKey && window.event.keyCode == 121) {
//     return false;
//   }
// };
//禁止鼠标右键
// document.oncontextmenu = function (event) {
//   event.preventDefault();
// };
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  /* width: 1200px; */
  margin: 0 auto;
  font-family: Noto Sans SC;
}
::-webkit-scrollbar {
  width: 6px;
  height: 8px;
  background-color: #ebeef5;
}
::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #ccc;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  background: rgba(255, 255, 255, 1);
}
</style>
