(window.daoStyleJsonpFunction=window.daoStyleJsonpFunction||[]).push([[44],{212:function(n,i){n.exports='<template>\n  <ul class="dao-list-group">\n    <li v-for="i in items"\n      :class="[\'dao-list-item\', {active: item === i}]"\n      :key="i"\n      @click="item = i">\n      item{{i}}\n    </li>\n  </ul>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      item: 1,\n      items: [1,2,3],\n    };\n  },\n}\n<\/script>\n\n'}}]);