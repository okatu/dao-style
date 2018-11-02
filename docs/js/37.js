(window.daoStyleJsonpFunction=window.daoStyleJsonpFunction||[]).push([[37],{205:function(n,e){n.exports='<template>\n  <div class="demo6">\n    <h3>\n      普通数字输入框\n    </h3>\n    <dao-numeric-input\n      v-model="value"\n      :min=\'-5\'\n      :max=\'80\'\n      placeholder="min: -5 max: 80 float">\n    </dao-numeric-input>\n    <h3>\n      带单位的数字输入框\n    </h3>\n    <dao-numeric-input\n      v-model="unitValue"\n      type=\'int\'\n      :min=\'-5\'\n      :max=\'10\'\n      unit="KG"\n      block\n      placeholder="min: -5 max: 10 int">\n    </dao-numeric-input>\n    <h3>\n      禁止编辑的数字输入框 \n    </h3>\n    <dao-numeric-input\n      :disabled="true"\n      v-model="disabledValue"\n      placeholder="disabled">\n    </dao-numeric-input>\n  </div>\n</template>\n<script>\nexport default {\n  name: \'demo6\',\n  data() {\n    return {\n      value: \'\',\n      unitValue: \'\',\n      disabledValue: \'\',\n    };\n  },\n};\n<\/script>\n<style lang="scss" scoped>\n.demo6 h3{\n  margin: 20px 0 10px;\n  &:first-child {\n    margin-top: 0;\n  }\n}\n</style>\n'}}]);