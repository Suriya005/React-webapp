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
import { makeStyles } from '@material-ui/core/styles';
import { sanitizeListRestProps, useListContext } from 'ra-core';
import FilterForm from './FilterForm';
import FilterButton from './FilterButton';
var useStyles = makeStyles({
    button: {},
    form: {},
}, { name: 'RaFilter' });
var Filter = function (props) {
    var classes = useStyles(props);
    var _a = useListContext(props), resource = _a.resource, showFilter = _a.showFilter, hideFilter = _a.hideFilter, setFilters = _a.setFilters, displayedFilters = _a.displayedFilters, filterValues = _a.filterValues;
    var renderButton = function () {
        var classesOverride = props.classes, context = props.context, children = props.children, variant = props.variant, rest = __rest(props, ["classes", "context", "children", "variant"]);
        return (React.createElement(FilterButton, __assign({ className: classes.button, resource: resource, filters: React.Children.toArray(children), showFilter: showFilter, displayedFilters: displayedFilters, filterValues: filterValues }, sanitizeListRestProps(rest))));
    };
    var renderForm = function () {
        var classesOverride = props.classes, context = props.context, children = props.children, rest = __rest(props, ["classes", "context", "children"]);
        return (React.createElement(FilterForm, __assign({ className: classes.form, resource: resource, filters: React.Children.toArray(children), hideFilter: hideFilter, displayedFilters: displayedFilters, initialValues: filterValues, setFilters: setFilters }, sanitizeListRestProps(rest))));
    };
    return props.context === 'button' ? renderButton() : renderForm();
};
Filter.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    context: PropTypes.oneOf(['form', 'button']),
};
export default Filter;
