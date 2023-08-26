"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
function genIndexTemplate(name) {
    var compName = 'M' + (0, utils_1.upperFirst)(name);
    return "import { App } from 'vue'\nimport ".concat((0, utils_1.upperFirst)(name), " from \"./src/").concat(name, "\";\n\n// \u5177\u540D\u5BFC\u51FA\nexport { ").concat((0, utils_1.upperFirst)(name), " }\n\nexport default {\n  install(app: App){\n    app.component('").concat(compName, "', ").concat((0, utils_1.upperFirst)(name), ")\n  }\n}");
}
exports.default = genIndexTemplate;
