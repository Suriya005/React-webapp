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
import ActionDelete from '@material-ui/icons/Delete';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core/styles';
import { useDeleteMany, useRefresh, useNotify, useUnselectAll, CRUD_DELETE_MANY, useResourceContext, } from 'ra-core';
import Button from './Button';
var useStyles = makeStyles(function (theme) { return ({
    deleteButton: {
        color: theme.palette.error.main,
        '&:hover': {
            backgroundColor: fade(theme.palette.error.main, 0.12),
            // Reset on mouse devices
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
    },
}); }, { name: 'RaBulkDeleteWithUndoButton' });
var BulkDeleteWithUndoButton = function (props) {
    var basePath = props.basePath, classesOverride = props.classes, icon = props.icon, label = props.label, onClick = props.onClick, selectedIds = props.selectedIds, rest = __rest(props, ["basePath", "classes", "icon", "label", "onClick", "selectedIds"]);
    var classes = useStyles(props);
    var notify = useNotify();
    var unselectAll = useUnselectAll();
    var refresh = useRefresh();
    var resource = useResourceContext(props);
    var _a = useDeleteMany(resource, selectedIds, {
        action: CRUD_DELETE_MANY,
        onSuccess: function () {
            notify('ra.notification.deleted', 'info', { smart_count: selectedIds.length }, true);
            unselectAll(resource);
            refresh();
        },
        onFailure: function (error) {
            return notify(typeof error === 'string'
                ? error
                : error.message || 'ra.notification.http_error', 'warning', {
                _: typeof error === 'string'
                    ? error
                    : error && error.message
                        ? error.message
                        : undefined,
            });
        },
        undoable: true,
    }), deleteMany = _a[0], loading = _a[1].loading;
    var handleClick = function (e) {
        deleteMany();
        if (typeof onClick === 'function') {
            onClick(e);
        }
    };
    return (React.createElement(Button, __assign({ onClick: handleClick, label: label, className: classes.deleteButton, disabled: loading }, sanitizeRestProps(rest)), icon));
};
var sanitizeRestProps = function (_a) {
    var basePath = _a.basePath, classes = _a.classes, filterValues = _a.filterValues, label = _a.label, rest = __rest(_a, ["basePath", "classes", "filterValues", "label"]);
    return rest;
};
BulkDeleteWithUndoButton.propTypes = {
    basePath: PropTypes.string,
    classes: PropTypes.object,
    label: PropTypes.string,
    resource: PropTypes.string,
    selectedIds: PropTypes.arrayOf(PropTypes.any).isRequired,
    icon: PropTypes.element,
};
BulkDeleteWithUndoButton.defaultProps = {
    label: 'ra.action.delete',
    icon: React.createElement(ActionDelete, null),
};
export default BulkDeleteWithUndoButton;
