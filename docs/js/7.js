(window.daoStyleJsonpFunction=window.daoStyleJsonpFunction||[]).push([[7],{175:function(n,o){n.exports="<template>\n  <div>\n    <button class=\"dao-btn blue\" @click=\"loadingBeforeClose()\">带有 loading 的 Alert</button>\n  </div>\n</template>\n<script>\nexport default {\n  methods: {\n    loadingBeforeClose() {\n      this.$daoAlert('这个对话框点击确认后会 loading 之后再关闭', 'loading Alert')\n        .loadingText('loading...')\n        .show((res) => {\n          console.log('confirm:', res);\n          return new Promise((resolve) => {\n            setTimeout(() => {\n              console.log('inner loading timer');\n              resolve();\n            }, 3000);\n          });\n        });\n    },\n  },\n};\n<\/script>"}}]);