(window.daoStyleJsonpFunction=window.daoStyleJsonpFunction||[]).push([[49],{218:function(s,n){s.exports='<template>\n  <div style="width:400px">\n    <span>0%</span>\n    <dao-progress-pulsing :progress="0.0"></dao-progress-pulsing>\n    <span>25%</span>\n    <dao-progress-pulsing :progress="0.25"></dao-progress-pulsing>\n    <span>50%</span>\n    <dao-progress-pulsing :progress="0.50"></dao-progress-pulsing>\n    <span>75%</span>\n    <dao-progress-pulsing :progress="0.75"></dao-progress-pulsing>\n    <span>90%</span>\n    <dao-progress-pulsing :progress="0.90"></dao-progress-pulsing>\n    <span>100%</span>\n    <dao-progress-pulsing :progress="1"></dao-progress-pulsing>\n    <span>滚动</span>\n    <dao-progress-pulsing :progress="val"></dao-progress-pulsing>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        val: 0,\n      };\n    },\n    mounted() {\n      setTimeout(() => {\n        this.val = 1;\n      }, 1000);\n    },\n  };\n<\/script>'}}]);