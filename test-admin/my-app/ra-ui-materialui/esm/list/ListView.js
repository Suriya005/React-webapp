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
import Card from '@material-ui/core/Card';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { ComponentPropType, defaultExporter, useListContext, getListControllerProps, useVersion, } from 'ra-core';
import Title, { TitlePropType } from '../layout/Title';
import ListToolbar from './ListToolbar';
import DefaultPagination from './pagination/Pagination';
import BulkDeleteButton from '../button/BulkDeleteButton';
import BulkActionsToolbar from './BulkActionsToolbar';
import DefaultActions from './ListActions';
import Empty from './Empty';
export var ListView = function (props) {
    var actions = props.actions, aside = props.aside, filters = props.filters, bulkActionButtons = props.bulkActionButtons, pagination = props.pagination, children = props.children, className = props.className, classesOverride = props.classes, Content = props.component, _a = props.exporter, exporter = _a === void 0 ? defaultExporter : _a, title = props.title, empty = props.empty, rest = __rest(props, ["actions", "aside", "filters", "bulkActionButtons", "pagination", "children", "className", "classes", "component", "exporter", "title", "empty"]);
    var controllerProps = getListControllerProps(props); // deprecated, to be removed in v4
    var listContext = useListContext(props);
    var classes = useStyles(props);
    var defaultTitle = listContext.defaultTitle, total = listContext.total, loaded = listContext.loaded, loading = listContext.loading, filterValues = listContext.filterValues, selectedIds = listContext.selectedIds;
    var version = useVersion();
    var renderList = function () {
        var _a;
        return (React.createElement(React.Fragment, null,
            (filters || actions) && (React.createElement(ListToolbar, __assign({ filters: filters }, controllerProps, { actions: actions, exporter: exporter }))),
            React.createElement("div", { className: classes.main },
                React.createElement(Content, { className: classnames(classes.content, (_a = {},
                        _a[classes.bulkActionsDisplayed] = selectedIds.length > 0,
                        _a)), key: version },
                    bulkActionButtons !== false && bulkActionButtons && (React.createElement(BulkActionsToolbar, __assign({}, controllerProps), bulkActionButtons)),
                    children &&
                        // @ts-ignore-line
                        cloneElement(Children.only(children), __assign(__assign({}, controllerProps), { hasBulkActions: bulkActionButtons !== false })),
                    pagination && cloneElement(pagination, listContext)),
                aside && cloneElement(aside, listContext))));
    };
    var shouldRenderEmptyPage = loaded && !loading && total === 0 && !Object.keys(filterValues).length;
    return (React.createElement("div", __assign({ className: classnames('list-page', classes.root, className) }, sanitizeRestProps(rest)),
        React.createElement(Title, { title: title, defaultTitle: defaultTitle }),
        shouldRenderEmptyPage && empty !== false
            ? cloneElement(empty, listContext)
            : renderList()));
};
ListView.propTypes = {
    // @ts-ignore-line
    actions: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
    aside: PropTypes.element,
    basePath: PropTypes.string,
    // @ts-ignore-line
    bulkActionButtons: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
    children: PropTypes.element,
    className: PropTypes.string,
    classes: PropTypes.object,
    component: ComponentPropType,
    // @ts-ignore-line
    currentSort: PropTypes.shape({
        field: PropTypes.string.isRequired,
        order: PropTypes.string.isRequired,
    }),
    data: PropTypes.any,
    defaultTitle: PropTypes.string,
    displayedFilters: PropTypes.object,
    // @ts-ignore-line
    exporter: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    filterDefaultValues: PropTypes.object,
    filters: PropTypes.element,
    filterValues: PropTypes.object,
    hasCreate: PropTypes.bool,
    hideFilter: PropTypes.func,
    ids: PropTypes.array,
    loading: PropTypes.bool,
    onSelect: PropTypes.func,
    onToggleItem: PropTypes.func,
    onUnselectItems: PropTypes.func,
    page: PropTypes.number,
    // @ts-ignore-line
    pagination: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
    perPage: PropTypes.number,
    refresh: PropTypes.func,
    resource: PropTypes.string,
    selectedIds: PropTypes.array,
    setFilters: PropTypes.func,
    setPage: PropTypes.func,
    setPerPage: PropTypes.func,
    setSort: PropTypes.func,
    showFilter: PropTypes.func,
    title: TitlePropType,
    total: PropTypes.number,
    version: PropTypes.number,
};
var DefaultBulkActionButtons = function (props) { return React.createElement(BulkDeleteButton, __assign({}, props)); };
ListView.defaultProps = {
    actions: React.createElement(DefaultActions, null),
    classes: {},
    component: Card,
    bulkActionButtons: React.createElement(DefaultBulkActionButtons, null),
    pagination: React.createElement(DefaultPagination, null),
    empty: React.createElement(Empty, null),
};
var useStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: {},
        main: {
            display: 'flex',
        },
        content: (_a = {
                marginTop: 0,
                transition: theme.transitions.create('margin-top'),
                position: 'relative',
                flex: '1 1 auto'
            },
            _a[theme.breakpoints.down('xs')] = {
                boxShadow: 'none',
            },
            _a.overflow = 'inherit',
            _a),
        bulkActionsDisplayed: {
            marginTop: -theme.spacing(8),
            transition: theme.transitions.create('margin-top'),
        },
        actions: {
            zIndex: 2,
            display: 'flex',
            justifyContent: 'flex-end',
            flexWrap: 'wrap',
        },
        noResults: { padding: 20 },
    });
}, { name: 'RaList' });
var sanitizeRestProps = function (_a) {
    var _b = _a.basePath, basePath = _b === void 0 ? null : _b, _c = _a.currentSort, currentSort = _c === void 0 ? null : _c, _d = _a.data, data = _d === void 0 ? null : _d, _e = _a.defaultTitle, defaultTitle = _e === void 0 ? null : _e, _f = _a.displayedFilters, displayedFilters = _f === void 0 ? null : _f, _g = _a.filterDefaultValues, filterDefaultValues = _g === void 0 ? null : _g, _h = _a.filterValues, filterValues = _h === void 0 ? null : _h, _j = _a.hasCreate, hasCreate = _j === void 0 ? null : _j, _k = _a.hasEdit, hasEdit = _k === void 0 ? null : _k, _l = _a.hasList, hasList = _l === void 0 ? null : _l, _m = _a.hasShow, hasShow = _m === void 0 ? null : _m, _o = _a.hideFilter, hideFilter = _o === void 0 ? null : _o, _p = _a.history, history = _p === void 0 ? null : _p, _q = _a.ids, ids = _q === void 0 ? null : _q, _r = _a.loading, loading = _r === void 0 ? null : _r, _s = _a.loaded, loaded = _s === void 0 ? null : _s, _t = _a.location, location = _t === void 0 ? null : _t, _u = _a.match, match = _u === void 0 ? null : _u, _v = _a.onSelect, onSelect = _v === void 0 ? null : _v, _w = _a.onToggleItem, onToggleItem = _w === void 0 ? null : _w, _x = _a.onUnselectItems, onUnselectItems = _x === void 0 ? null : _x, _y = _a.options, options = _y === void 0 ? null : _y, _z = _a.page, page = _z === void 0 ? null : _z, _0 = _a.permissions, permissions = _0 === void 0 ? null : _0, _1 = _a.perPage, perPage = _1 === void 0 ? null : _1, _2 = _a.resource, resource = _2 === void 0 ? null : _2, _3 = _a.selectedIds, selectedIds = _3 === void 0 ? null : _3, _4 = _a.setFilters, setFilters = _4 === void 0 ? null : _4, _5 = _a.setPage, setPage = _5 === void 0 ? null : _5, _6 = _a.setPerPage, setPerPage = _6 === void 0 ? null : _6, _7 = _a.setSort, setSort = _7 === void 0 ? null : _7, _8 = _a.showFilter, showFilter = _8 === void 0 ? null : _8, _9 = _a.sort, sort = _9 === void 0 ? null : _9, _10 = _a.total, total = _10 === void 0 ? null : _10, rest = __rest(_a, ["basePath", "currentSort", "data", "defaultTitle", "displayedFilters", "filterDefaultValues", "filterValues", "hasCreate", "hasEdit", "hasList", "hasShow", "hideFilter", "history", "ids", "loading", "loaded", "location", "match", "onSelect", "onToggleItem", "onUnselectItems", "options", "page", "permissions", "perPage", "resource", "selectedIds", "setFilters", "setPage", "setPerPage", "setSort", "showFilter", "sort", "total"]);
    return rest;
};
export default ListView;
