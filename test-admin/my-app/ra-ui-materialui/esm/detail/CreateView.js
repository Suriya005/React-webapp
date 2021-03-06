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
import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { useCreateContext } from 'ra-core';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { TitleForRecord } from '../layout';
export var CreateView = function (props) {
    var _a;
    var actions = props.actions, aside = props.aside, children = props.children, classesOverride = props.classes, className = props.className, Content = props.component, title = props.title, rest = __rest(props, ["actions", "aside", "children", "classes", "className", "component", "title"]);
    var classes = useStyles(props);
    var _b = useCreateContext(props), basePath = _b.basePath, defaultTitle = _b.defaultTitle, hasList = _b.hasList, record = _b.record, redirect = _b.redirect, resource = _b.resource, save = _b.save, saving = _b.saving, version = _b.version;
    return (React.createElement("div", __assign({ className: classnames('create-page', classes.root, className) }, sanitizeRestProps(rest)),
        React.createElement(TitleForRecord, { title: title, record: record, defaultTitle: defaultTitle }),
        actions &&
            cloneElement(actions, __assign({ basePath: basePath,
                resource: resource,
                hasList: hasList }, actions.props)),
        React.createElement("div", { className: classnames(classes.main, (_a = {},
                _a[classes.noActions] = !actions,
                _a)) },
            React.createElement(Content, { className: classes.card }, cloneElement(Children.only(children), {
                basePath: basePath,
                record: record,
                redirect: typeof children.props.redirect === 'undefined'
                    ? redirect
                    : children.props.redirect,
                resource: resource,
                save: save,
                saving: saving,
                version: version,
            })),
            aside &&
                cloneElement(aside, {
                    basePath: basePath,
                    record: record,
                    resource: resource,
                    save: save,
                    saving: saving,
                    version: version,
                }))));
};
CreateView.propTypes = {
    actions: PropTypes.element,
    aside: PropTypes.element,
    basePath: PropTypes.string,
    children: PropTypes.element,
    classes: PropTypes.object,
    className: PropTypes.string,
    defaultTitle: PropTypes.any,
    hasList: PropTypes.bool,
    hasShow: PropTypes.bool,
    record: PropTypes.object,
    redirect: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    resource: PropTypes.string,
    save: PropTypes.func,
    title: PropTypes.node,
    onSuccess: PropTypes.func,
    onFailure: PropTypes.func,
    setOnSuccess: PropTypes.func,
    setOnFailure: PropTypes.func,
    setTransform: PropTypes.func,
};
CreateView.defaultProps = {
    classes: {},
    component: Card,
};
var useStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: {},
        main: {
            display: 'flex',
        },
        noActions: (_a = {},
            _a[theme.breakpoints.up('sm')] = {
                marginTop: '1em',
            },
            _a),
        card: {
            flex: '1 1 auto',
        },
    });
}, { name: 'RaCreate' });
var sanitizeRestProps = function (_a) {
    var _b = _a.basePath, basePath = _b === void 0 ? null : _b, _c = _a.defaultTitle, defaultTitle = _c === void 0 ? null : _c, _d = _a.hasCreate, hasCreate = _d === void 0 ? null : _d, _e = _a.hasEdit, hasEdit = _e === void 0 ? null : _e, _f = _a.hasList, hasList = _f === void 0 ? null : _f, _g = _a.hasShow, hasShow = _g === void 0 ? null : _g, _h = _a.history, history = _h === void 0 ? null : _h, _j = _a.loaded, loaded = _j === void 0 ? null : _j, _k = _a.loading, loading = _k === void 0 ? null : _k, _l = _a.location, location = _l === void 0 ? null : _l, _m = _a.match, match = _m === void 0 ? null : _m, _o = _a.onFailureRef, onFailureRef = _o === void 0 ? null : _o, _p = _a.onSuccessRef, onSuccessRef = _p === void 0 ? null : _p, _q = _a.options, options = _q === void 0 ? null : _q, _r = _a.permissions, permissions = _r === void 0 ? null : _r, _s = _a.save, save = _s === void 0 ? null : _s, _t = _a.saving, saving = _t === void 0 ? null : _t, _u = _a.setOnFailure, setOnFailure = _u === void 0 ? null : _u, _v = _a.setOnSuccess, setOnSuccess = _v === void 0 ? null : _v, _w = _a.setTransform, setTransform = _w === void 0 ? null : _w, _x = _a.transformRef, transformRef = _x === void 0 ? null : _x, rest = __rest(_a, ["basePath", "defaultTitle", "hasCreate", "hasEdit", "hasList", "hasShow", "history", "loaded", "loading", "location", "match", "onFailureRef", "onSuccessRef", "options", "permissions", "save", "saving", "setOnFailure", "setOnSuccess", "setTransform", "transformRef"]);
    return rest;
};
