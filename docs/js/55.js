(window.daoStyleJsonpFunction=window.daoStyleJsonpFunction||[]).push([[55],{223:function(n,e){n.exports='<template>\n  <dao-select\n    v-model="select"\n    placeholder="一个简单下拉框">\n    <dao-option\n      v-for="item in items"\n      :key="item.value"\n      :value="item.value"\n      :label="item.text">\n    </dao-option>\n  </dao-select>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        select: 1,\n        items: [{\n          text: \'选项一\',\n          value: 1,\n        }, {\n          text: \'选项二\',\n          value: 2,\n        }, {\n          text: \'选项三\',\n          value: 3,\n        }]\n      };\n    },\n  };\n<\/script>\n'}}]);