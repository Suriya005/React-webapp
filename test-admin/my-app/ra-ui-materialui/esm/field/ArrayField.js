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
import { cloneElement, Children, useEffect, useState, memo, } from 'react';
import get from 'lodash/get';
import { ListContextProvider } from 'ra-core';
import { fieldPropTypes } from './types';
import PropTypes from 'prop-types';
var initialState = {
    data: {},
    ids: [],
};
var getDataAndIds = function (record, source, fieldKey) {
    var list = get(record, source);
    if (!list) {
        return initialState;
    }
    return fieldKey
        ? {
            data: list.reduce(function (prev, item) {
                prev[item[fieldKey]] = item;
                return prev;
            }, {}),
            ids: list.map(function (item) { return item[fieldKey]; }),
        }
        : {
            data: list.reduce(function (prev, item) {
                prev[JSON.stringify(item)] = item;
                return prev;
            }, {}),
            ids: list.map(JSON.stringify),
        };
};
/**
 * Display a collection
 *
 * Ideal for embedded arrays of objects, e.g.
 * {
 *   id: 123
 *   tags: [
 *     { name: 'foo' },
 *     { name: 'bar' }
 *   ]
 * }
 *
 * The child must be an iterator component
 * (like <Datagrid> or <SingleFieldList>).
 *
 * @example Display all the backlinks of the current post as a <Datagrid>
 * // post = {
 * //   id: 123
 * //   backlinks: [
 * //       {
 * //           uuid: '34fdf393-f449-4b04-a423-38ad02ae159e',
 * //           date: '2012-08-10T00:00:00.000Z',
 * //           url: 'http://example.com/foo/bar.html',
 * //       },
 * //       {
 * //           uuid: 'd907743a-253d-4ec1-8329-404d4c5e6cf1',
 * //           date: '2012-08-14T00:00:00.000Z',
 * //           url: 'https://blog.johndoe.com/2012/08/12/foobar.html',
 * //       }
 * //    ]
 * // }
 *     <ArrayField source="backlinks">
 *         <Datagrid>
 *             <DateField source="date" />
 *             <UrlField source="url" />
 *         </Datagrid>
 *     </ArrayField>
 *
 * @example Display all the tags of the current post as <Chip> components
 * // post = {
 * //   id: 123
 * //   tags: [
 * //     { name: 'foo' },
 * //     { name: 'bar' }
 * //   ]
 * // }
 *     <ArrayField source="tags">
 *         <SingleFieldList>
 *             <ChipField source="name" />
 *         </SingleFieldList>
 *     </ArrayField>
 *
 * If the array value contains a lot of items, you may experience slowdowns in the UI.
 * In such cases, set the `fieldKey` prop to use one field as key, and reduce CPU and memory usage:
 *
 * @example
 *     <ArrayField source="backlinks" fieldKey="uuid">
 *         ...
 *     </ArrayField>
 *
 * If you need to render a collection in a custom way, it's often simpler
 * to write your own component:
 *
 * @example
 *     const TagsField = ({ record }) => (
 *          <ul>
 *              {record.tags.map(item => (
 *                  <li key={item.name}>{item.name}</li>
 *              ))}
 *          </ul>
 *     )
 *     TagsField.defaultProps = { addLabel: true };
 */
export var ArrayField = memo(function (_a) {
    var addLabel = _a.addLabel, basePath = _a.basePath, children = _a.children, record = _a.record, resource = _a.resource, sortable = _a.sortable, source = _a.source, fieldKey = _a.fieldKey, rest = __rest(_a, ["addLabel", "basePath", "children", "record", "resource", "sortable", "source", "fieldKey"]);
    var _b = useState(initialState.ids), ids = _b[0], setIds = _b[1];
    var _c = useState(initialState.data), data = _c[0], setData = _c[1];
    useEffect(function () {
        var _a = getDataAndIds(record, source, fieldKey), ids = _a.ids, data = _a.data;
        setIds(ids);
        setData(data);
    }, [record, source, fieldKey]);
    return (React.createElement(ListContextProvider, { value: {
            ids: ids,
            data: data,
            loading: false,
            basePath: basePath,
            selectedIds: [],
            currentSort: { field: null, order: null },
            displayedFilters: null,
            filterValues: null,
            hasCreate: null,
            hideFilter: null,
            loaded: null,
            onSelect: null,
            onToggleItem: null,
            onUnselectItems: null,
            page: null,
            perPage: null,
            resource: resource,
            setFilters: null,
            setPage: null,
            setPerPage: null,
            setSort: null,
            showFilter: null,
            total: null,
        } }, cloneElement(Children.only(children), __assign({ ids: ids,
        data: data, loading: false, basePath: basePath, currentSort: {}, resource: resource }, rest))));
});
ArrayField.defaultProps = {
    addLabel: true,
};
ArrayField.propTypes = __assign(__assign({}, fieldPropTypes), { fieldKey: PropTypes.string });
export default ArrayField;
