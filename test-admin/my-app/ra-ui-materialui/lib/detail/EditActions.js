"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var ra_core_1 = require("ra-core");
var button_1 = require("../button");
var TopToolbar_1 = __importDefault(require("../layout/TopToolbar"));
/**
 * Action Toolbar for the Edit view
 *
 * Internal component. If you want to add or remove actions for a Edit view,
 * write your own EditActions Component. Then, in the <Edit> component,
 * use it in the `actions` prop to pass a custom component.
 *
 * @example
 *     import Button from '@material-ui/core/Button';
 *     import { TopToolbar, ShowButton, Edit } from 'react-admin';
 *
 *     const PostEditActions = ({ basePath, record, resource }) => (
 *         <TopToolbar>
 *             <ShowButton basePath={basePath} record={record} />
 *             // Add your custom actions here
 *             <Button color="primary" onClick={customAction}>Custom Action</Button>
 *         </TopToolbar>
 *     );
 *
 *     export const PostEdit = (props) => (
 *         <Edit actions={<PostEditActions />} {...props}>
 *             ...
 *         </Edit>
 *     );
 */
var EditActions = function (_a) {
    var className = _a.className, rest = __rest(_a, ["className"]);
    var _b = ra_core_1.useEditContext(rest), basePath = _b.basePath, record = _b.record;
    var hasShow = ra_core_1.useResourceDefinition(rest).hasShow;
    return (React.createElement(TopToolbar_1.default, __assign({ className: className }, sanitizeRestProps(rest)), hasShow && React.createElement(button_1.ShowButton, { basePath: basePath, record: record })));
};
var sanitizeRestProps = function (_a) {
    var _b = _a.basePath, basePath = _b === void 0 ? null : _b, _c = _a.hasCreate, hasCreate = _c === void 0 ? null : _c, _d = _a.hasEdit, hasEdit = _d === void 0 ? null : _d, _e = _a.hasShow, hasShow = _e === void 0 ? null : _e, _f = _a.hasList, hasList = _f === void 0 ? null : _f, rest = __rest(_a, ["basePath", "hasCreate", "hasEdit", "hasShow", "hasList"]);
    return rest;
};
EditActions.propTypes = {
    basePath: prop_types_1.default.string,
    className: prop_types_1.default.string,
    data: prop_types_1.default.object,
    hasShow: prop_types_1.default.bool,
    resource: prop_types_1.default.string,
};
exports.default = EditActions;
