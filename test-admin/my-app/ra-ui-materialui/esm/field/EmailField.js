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
import * as React from 'react';
import { memo } from 'react';
import get from 'lodash/get';
import Typography from '@material-ui/core/Typography';
import sanitizeFieldRestProps from './sanitizeFieldRestProps';
import { fieldPropTypes } from './types';
import { Link } from '@material-ui/core';
// useful to prevent click bubbling in a datagrid with rowClick
var stopPropagation = function (e) { return e.stopPropagation(); };
var EmailField = memo(function (_a) {
    var className = _a.className, source = _a.source, _b = _a.record, record = _b === void 0 ? {} : _b, emptyText = _a.emptyText, rest = __rest(_a, ["className", "source", "record", "emptyText"]);
    var value = get(record, source);
    if (value == null) {
        return emptyText ? (React.createElement(Typography, __assign({ component: "span", variant: "body2", className: className }, sanitizeFieldRestProps(rest)), emptyText)) : null;
    }
    return (React.createElement(Link, __assign({ className: className, href: "mailto:" + value, onClick: stopPropagation }, sanitizeFieldRestProps(rest)), value));
});
EmailField.defaultProps = {
    addLabel: true,
};
EmailField.propTypes = fieldPropTypes;
export default EmailField;
