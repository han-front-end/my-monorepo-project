"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//创建组件类型文件的模板
var utils_1 = require("./utils");
function genTypesTemplate(name) {
    var propTypeName = (0, utils_1.upperFirst)(name) + 'Props';
    var propName = name + 'Props';
    return "import {ExtractPropTypes, PropType} from \"vue\";\n\nexport const ".concat(propName, " = {} as const\n\nexport type ").concat(propTypeName, " = ExtractPropTypes<typeof ").concat(propName, ">\n");
}
exports.default = genTypesTemplate;
