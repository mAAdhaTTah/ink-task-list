"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const prop_types_1 = __importDefault(require("prop-types"));
const TaskList = ({ children }) => (react_1.default.createElement(ink_1.Box, { flexDirection: "column" }, children));
TaskList.propTypes = {
    children: prop_types_1.default.oneOfType([
        prop_types_1.default.arrayOf(prop_types_1.default.node),
        prop_types_1.default.node,
    ]).isRequired,
};
module.exports = TaskList;
