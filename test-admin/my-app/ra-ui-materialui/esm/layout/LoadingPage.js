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
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Loading from './Loading';
var LoadingPage = function (_a) {
    var theme = _a.theme, props = __rest(_a, ["theme"]);
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(Loading, __assign({}, props))));
};
LoadingPage.propTypes = {
    theme: PropTypes.object,
    classes: PropTypes.object,
    className: PropTypes.string,
    loadingPrimary: PropTypes.string,
    loadingSecondary: PropTypes.string,
};
LoadingPage.defaultProps = {
    theme: createMuiTheme({}),
    loadingPrimary: 'ra.page.loading',
    loadingSecondary: 'ra.message.loading',
};
export default LoadingPage;
