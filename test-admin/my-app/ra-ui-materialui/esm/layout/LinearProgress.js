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
import Progress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { useTimeout } from 'ra-core';
var useStyles = makeStyles(function (theme) { return ({
    root: {
        margin: theme.spacing(1) + "px 0",
        width: theme.spacing(20) + "px",
    },
}); }, { name: 'RaLinearProgress' });
/**
 * Progress bar formatted to replace an input or a field in a form layout
 *
 * Avoids visual jumps when replaced by value or form input
 *
 * @see ReferenceField
 * @see ReferenceInput
 *
 * @param {Object} classes CSS class names
 */
var LinearProgress = function (_a) {
    var _b = _a.timeout, timeout = _b === void 0 ? 1000 : _b, props = __rest(_a, ["timeout"]);
    var classesOverride = props.classes, className = props.className, rest = __rest(props, ["classes", "className"]);
    var classes = useStyles(props);
    var oneSecondHasPassed = useTimeout(timeout);
    return oneSecondHasPassed ? (React.createElement(Progress, __assign({ className: classnames(classes.root, className) }, rest))) : null;
};
LinearProgress.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    timeout: PropTypes.number,
};
// wat? TypeScript looses the displayName if we don't set it explicitly
LinearProgress.displayName = 'LinearProgress';
export default LinearProgress;
