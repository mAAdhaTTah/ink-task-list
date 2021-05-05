"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const ink_1 = require("ink");
const figures_1 = __importDefault(require("figures"));
const ink_spinner_1 = __importDefault(require("ink-spinner"));
const cli_spinners_1 = __importDefault(require("cli-spinners"));
const possibleSpinnerNames = Object.keys(cli_spinners_1.default).filter(spinnerName => spinnerName !== 'default');
const getSymbol = (state) => {
    if (state === 'warning') {
        return (react_1.default.createElement(ink_1.Text, { color: "yellow" }, figures_1.default.warning));
    }
    if (state === 'error') {
        return (react_1.default.createElement(ink_1.Text, { color: "red" }, figures_1.default.cross));
    }
    if (state === 'success') {
        return (react_1.default.createElement(ink_1.Text, { color: "green" }, figures_1.default.tick));
    }
    if (state === 'pending') {
        return (react_1.default.createElement(ink_1.Text, { color: "gray" }, figures_1.default.squareSmallFilled));
    }
    return ' ';
};
const getPointer = (state) => (react_1.default.createElement(ink_1.Text, { color: state === 'error' ? 'red' : 'yellow' }, figures_1.default.pointer));
const Task = ({ label, state, spinnerType, isExpanded, children, }) => {
    const childrenArray = Array.isArray(children) ? children : [children];
    const listChildren = childrenArray.filter(node => react_1.isValidElement(node));
    let icon = (state === 'loading')
        ? (react_1.default.createElement(ink_1.Text, { color: "yellow" },
            react_1.default.createElement(ink_spinner_1.default, { type: spinnerType })))
        : getSymbol(state);
    if (isExpanded) {
        icon = getPointer(state);
    }
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column" },
        react_1.default.createElement(ink_1.Box, null,
            react_1.default.createElement(ink_1.Box, { marginRight: 1 },
                react_1.default.createElement(ink_1.Text, null, icon)),
            react_1.default.createElement(ink_1.Text, null, label)),
        (isExpanded && listChildren.length > 0) && (react_1.default.createElement(ink_1.Box, { flexDirection: "column", marginLeft: 2 }, listChildren))));
};
Task.propTypes = {
    children: prop_types_1.default.oneOfType([
        prop_types_1.default.arrayOf(prop_types_1.default.element),
        prop_types_1.default.element,
    ]),
    label: prop_types_1.default.string.isRequired,
    state: prop_types_1.default.oneOf(['pending', 'loading', 'success', 'warning', 'error']),
    spinnerType: prop_types_1.default.oneOf(possibleSpinnerNames),
    isExpanded: prop_types_1.default.bool,
};
Task.defaultProps = {
    state: 'pending',
    spinnerType: 'dots',
};
module.exports = Task;
