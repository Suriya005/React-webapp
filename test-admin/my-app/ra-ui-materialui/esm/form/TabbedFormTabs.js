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
import { Children, cloneElement, isValidElement, } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import { useLocation } from 'react-router-dom';
var TabbedFormTabs = function (_a) {
    var children = _a.children, classes = _a.classes, url = _a.url, tabsWithErrors = _a.tabsWithErrors, rest = __rest(_a, ["children", "classes", "url", "tabsWithErrors"]);
    var location = useLocation();
    var validTabPaths = Children.map(children, function (tab, index) {
        if (!isValidElement(tab))
            return undefined;
        return getTabFullPath(tab, index, url);
    });
    // This ensure we don't get warnings from material-ui Tabs component when
    // the current location pathname targets a dynamically added Tab
    // In the case the targeted Tab is not present at first render (when
    // using permissions for example) we temporarily switch to the first
    // available tab. The current location will be applied again on the
    // first render containing the targeted tab. This is almost transparent
    // for the user who may just see an short tab selection animation
    var tabValue = validTabPaths.includes(location.pathname)
        ? location.pathname
        : validTabPaths[0];
    return (React.createElement(Tabs, __assign({ value: tabValue, indicatorColor: "primary" }, rest), Children.map(children, function (tab, index) {
        if (!isValidElement(tab))
            return null;
        // Builds the full tab tab which is the concatenation of the last matched route in the
        // TabbedShowLayout hierarchy (ex: '/posts/create', '/posts/12', , '/posts/12/show')
        // and the tab path.
        // This will be used as the Tab's value
        var tabPath = getTabFullPath(tab, index, url);
        return cloneElement(tab, {
            intent: 'header',
            value: tabPath,
            className: tabsWithErrors.includes(tab.props.label) &&
                location.pathname !== tabPath
                ? classes.errorTabButton
                : null,
        });
    })));
};
TabbedFormTabs.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    url: PropTypes.string,
    tabsWithErrors: PropTypes.arrayOf(PropTypes.string),
};
export var getTabFullPath = function (tab, index, baseUrl) {
    return "" + baseUrl + (tab.props.path ? "/" + tab.props.path : index > 0 ? "/" + index : '');
};
export default TabbedFormTabs;
