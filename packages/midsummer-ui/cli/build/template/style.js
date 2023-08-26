"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//创建样式文件的模板
function genStyleTemplate(name) {
    return ".m-".concat(name, " {\n  /* your component style */\n  \n}\n");
}
exports.default = genStyleTemplate;
