"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs-extra");
var path_1 = require("path");
var kolorist_1 = require("kolorist");
var core_1 = require("../template/core");
var types_1 = require("../template/types");
var style_1 = require("../template/style");
var test_1 = require("../template/test");
var template_1 = require("../template");
function createComponent(meta) {
    var name = meta.name;
    //拼接组件目录
    var componentDir = (0, path_1.resolve)('../src', name);
    console.log(componentDir);
    var comSrcDir = (0, path_1.resolve)(componentDir, 'src');
    var styleDir = (0, path_1.resolve)(componentDir, 'style');
    var testDir = (0, path_1.resolve)(componentDir, 'test');
    fs.ensureDirSync(comSrcDir);
    fs.ensureDirSync(styleDir);
    fs.ensureDirSync(testDir);
    // 文件和内容创建
    // 核心文件： 组件文件
    var coreFilePath = (0, path_1.resolve)(comSrcDir, name + '.tsx');
    fs.writeFileSync(coreFilePath, (0, core_1.default)(name), { encoding: 'utf-8' });
    // 核心文件： 组件类型文件
    var typeFilePath = (0, path_1.resolve)(comSrcDir, name + '-type.ts');
    fs.writeFileSync(typeFilePath, (0, types_1.default)(name), { encoding: 'utf-8' });
    // 核心文件： 样式文件
    var styleFilePath = (0, path_1.resolve)(styleDir, "".concat(name, ".scss"));
    fs.writeFileSync(styleFilePath, (0, style_1.default)(name), { encoding: 'utf-8' });
    // 核心文件： 测试文件
    var testFilePath = (0, path_1.resolve)(testDir, "".concat(name, ".test.ts"));
    fs.writeFileSync(testFilePath, (0, test_1.default)(name), { encoding: 'utf-8' });
    // 组索引文件
    var indexFilePath = (0, path_1.resolve)(componentDir, 'index.ts');
    fs.writeFileSync(indexFilePath, (0, template_1.default)(name), { encoding: 'utf-8' });
    // 创建成功通知
    console.log((0, kolorist_1.lightGreen)("\u2705 \u7EC4\u4EF6".concat(name, "\u76EE\u5F55\u521B\u5EFA\u751F\u6210")));
    console.log((0, kolorist_1.lightBlue)("\u2705 \u7EC4\u4EF6\u76EE\u5F55: ".concat(componentDir)));
}
exports.default = createComponent;
