"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//创建组件核心文件的模板
var utils_1 = require("./utils");
function genCoreTemplate(name) {
    var compName = 'M' + (0, utils_1.upperFirst)(name);
    var propTypeName = (0, utils_1.upperFirst)(name) + 'Props';
    var propName = name + 'Props';
    var propFileName = name + '-type';
    var className = 'm-' + name;
    return "import {defineComponent, toRefs} from \"vue\"\nimport {".concat(propName, ", ").concat(propTypeName, "} from \"./").concat(propFileName, "\"\n\nexport default defineComponent({\n  name: '").concat(compName, "',\n  props: ").concat(propName, ",\n  setup(props: ").concat(propTypeName, ") {\n    return () => {\n      return (\n        <div class=\"").concat(className, "\"></div>\n      )\n    }\n  }\n}");
}
exports.default = genCoreTemplate;
