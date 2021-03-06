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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { useCallback } from 'react';
import useGetList from '../../dataProvider/useGetList';
import { getStatusForInput as getDataStatus } from './referenceDataStatus';
import useTranslate from '../../i18n/useTranslate';
import useReference from '../useReference';
import usePaginationState from '../usePaginationState';
import { useSortState } from '..';
import useFilterState from '../useFilterState';
import useSelectionState from '../useSelectionState';
import { useResourceContext } from '../../core';
var defaultReferenceSource = function (resource, source) {
    return resource + "@" + source;
};
var defaultFilter = {};
/**
 * A hook for choosing a reference record. Useful for foreign keys.
 *
 * This hook fetches the possible values in the reference resource
 * (using `dataProvider.getList()`), it returns the possible choices
 * as the `choices` attribute.
 *
 * @example
 * const {
 *      choices, // the available reference resource
 * } = useReferenceInputController({
 *      input, // the input props
 *      resource: 'comments',
 *      reference: 'posts',
 *      source: 'post_id',
 * });
 *
 * The hook also allow to filter results. It returns a `setFilter`
 * function. It uses the value to create a filter
 * for the query - by default { q: [searchText] }. You can customize the mapping
 * searchText => searchQuery by setting a custom `filterToQuery` function option
 * You can also add a permanentFilter to further filter the result:
 *
 * @example
 * const {
 *      choices, // the available reference resource
 *      setFilter,
 * } = useReferenceInputController({
 *      input, // the input props
 *      resource: 'comments',
 *      reference: 'posts',
 *      source: 'post_id',
 *      permanentFilter: {
 *          author: 'john'
 *      },
 *      filterToQuery: searchText => ({ title: searchText })
 * });
 */
export var useReferenceInputController = function (props) {
    var _a;
    var basePath = props.basePath, input = props.input, _b = props.page, initialPage = _b === void 0 ? 1 : _b, _c = props.perPage, initialPerPage = _c === void 0 ? 25 : _c, _d = props.filter, filter = _d === void 0 ? defaultFilter : _d, reference = props.reference, filterToQuery = props.filterToQuery, sortOverride = props.sort;
    var resource = useResourceContext(props);
    var translate = useTranslate();
    // pagination logic
    var _e = usePaginationState({ page: initialPage, perPage: initialPerPage }), pagination = _e.pagination, setPagination = _e.setPagination, page = _e.page, setPage = _e.setPage, perPage = _e.perPage, setPerPage = _e.setPerPage;
    // sort logic
    var _f = useSortState(sortOverride), sort = _f.sort, setSortObject = _f.setSort;
    var setSort = useCallback(function (field, order) {
        if (order === void 0) { order = 'ASC'; }
        setSortObject({ field: field, order: order });
        setPage(1);
    }, [setPage, setSortObject]);
    // filter logic
    var _g = useFilterState({
        permanentFilter: filter,
        filterToQuery: filterToQuery,
    }), filterValues = _g.filter, setFilter = _g.setFilter;
    var displayedFilters = [];
    // plus showFilter and hideFilter defined outside of the hook because
    // they never change
    // selection logic
    var _h = useSelectionState(), selectedIds = _h.selectedIds, onSelect = _h.onSelect, onToggleItem = _h.onToggleItem, onUnselectItems = _h.onUnselectItems;
    // fetch possible values
    var _j = useGetList(reference, pagination, sort, filterValues), possibleValuesIds = _j.ids, possibleValuesData = _j.data, possibleValuesTotal = _j.total, possibleValuesLoaded = _j.loaded, possibleValuesLoading = _j.loading, possibleValuesError = _j.error;
    // fetch current value
    var _k = useReference({
        id: input.value,
        reference: reference,
    }), referenceRecord = _k.referenceRecord, referenceError = _k.error, referenceLoading = _k.loading, referenceLoaded = _k.loaded;
    // add current value to possible sources
    var finalIds, finalData, finalTotal;
    if (!referenceRecord || possibleValuesIds.includes(input.value)) {
        finalIds = possibleValuesIds;
        finalData = possibleValuesData;
        finalTotal = possibleValuesTotal;
    }
    else {
        finalIds = __spreadArrays([input.value], possibleValuesIds);
        finalData = __assign((_a = {}, _a[input.value] = referenceRecord, _a), possibleValuesData);
        finalTotal += 1;
    }
    // overall status
    var dataStatus = getDataStatus({
        input: input,
        matchingReferences: Object.keys(finalData).map(function (id) { return finalData[id]; }),
        referenceRecord: referenceRecord,
        translate: translate,
    });
    return {
        // should match the ListContext shape
        possibleValues: {
            basePath: basePath,
            data: finalData,
            ids: finalIds,
            total: finalTotal,
            error: possibleValuesError,
            loaded: possibleValuesLoaded,
            loading: possibleValuesLoading,
            hasCreate: false,
            page: page,
            setPage: setPage,
            perPage: perPage,
            setPerPage: setPerPage,
            currentSort: sort,
            setSort: setSort,
            filterValues: filterValues,
            displayedFilters: displayedFilters,
            setFilters: setFilter,
            showFilter: showFilter,
            hideFilter: hideFilter,
            selectedIds: selectedIds,
            onSelect: onSelect,
            onToggleItem: onToggleItem,
            onUnselectItems: onUnselectItems,
            resource: resource,
        },
        referenceRecord: {
            data: referenceRecord,
            loaded: referenceLoaded,
            loading: referenceLoading,
            error: referenceError,
        },
        dataStatus: {
            error: dataStatus.error,
            loading: dataStatus.waiting,
            warning: dataStatus.warning,
        },
        choices: finalIds.map(function (id) { return finalData[id]; }),
        // kept for backwards compatibility
        // @deprecated to be removed in 4.0
        error: dataStatus.error,
        loading: dataStatus.waiting,
        filter: filterValues,
        setFilter: setFilter,
        pagination: pagination,
        setPagination: setPagination,
        sort: sort,
        setSort: setSortObject,
        warning: dataStatus.warning,
    };
};
var hideFilter = function () { };
var showFilter = function () { };
