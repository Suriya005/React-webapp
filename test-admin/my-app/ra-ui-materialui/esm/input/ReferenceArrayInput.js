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
import { getFieldLabelTranslationArgs, useReferenceArrayInputController, useInput, useTranslate, ResourceContextProvider, } from 'ra-core';
import sanitizeInputRestProps from './sanitizeInputRestProps';
import LinearProgress from '../layout/LinearProgress';
import Labeled from './Labeled';
import ReferenceError from './ReferenceError';
/**
 * An Input component for fields containing a list of references to another resource.
 * Useful for 'hasMany' relationship.
 *
 * @example
 * The post object has many tags, so the post resource looks like:
 * {
 *    id: 1234,
 *    tag_ids: [ "1", "23", "4" ]
 * }
 *
 * ReferenceArrayInput component fetches the current resources (using
 * `dataProvider.getMany()`) as well as possible resources (using
 * `dataProvider.getList()`) in the reference endpoint. It then
 * delegates rendering to a subcomponent, to which it passes the possible
 * choices as the `choices` attribute.
 *
 * Use it with a selector component as child, like `<SelectArrayInput>`
 * or <CheckboxGroupInput>.
 *
 * @example
 * export const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <ReferenceArrayInput source="tag_ids" reference="tags">
 *                 <SelectArrayInput optionText="name" />
 *             </ReferenceArrayInput>
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * By default, restricts the possible values to 25. You can extend this limit
 * by setting the `perPage` prop.
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      perPage={100}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 *
 * By default, orders the possible values by id desc. You can change this order
 * by setting the `sort` prop (an object with `field` and `order` properties).
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      sort={{ field: 'name', order: 'ASC' }}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 *
 * Also, you can filter the query used to populate the possible values. Use the
 * `filter` prop for that.
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      filter={{ is_public: true }}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 *
 * The enclosed component may filter results. ReferenceArrayInput passes a
 * `setFilter` function as prop to its child component. It uses the value to
 * create a filter for the query - by default { q: [searchText] }. You can
 * customize the mapping searchText => searchQuery by setting a custom
 * `filterToQuery` function prop:
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      filterToQuery={searchText => ({ name: searchText })}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 */
var ReferenceArrayInput = function (_a) {
    var children = _a.children, idOverride = _a.id, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, validate = _a.validate, parse = _a.parse, format = _a.format, props = __rest(_a, ["children", "id", "onBlur", "onChange", "onFocus", "validate", "parse", "format"]);
    if (React.Children.count(children) !== 1) {
        throw new Error('<ReferenceArrayInput> only accepts a single child (like <Datagrid>)');
    }
    var _b = useInput(__assign({ id: idOverride, onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus, source: props.source, validate: validate,
        parse: parse,
        format: format }, props)), id = _b.id, input = _b.input, isRequired = _b.isRequired, meta = _b.meta;
    var controllerProps = useReferenceArrayInputController(__assign(__assign({}, props), { input: input }));
    var translate = useTranslate();
    return (React.createElement(ReferenceArrayInputView, __assign({ id: id, input: input, isRequired: isRequired, meta: meta, translate: translate, children: children }, props, controllerProps)));
};
ReferenceArrayInput.propTypes = {
    allowEmpty: PropTypes.bool,
    basePath: PropTypes.string,
    children: PropTypes.element.isRequired,
    className: PropTypes.string,
    filter: PropTypes.object,
    filterToQuery: PropTypes.func.isRequired,
    label: PropTypes.string,
    perPage: PropTypes.number,
    reference: PropTypes.string.isRequired,
    resource: PropTypes.string,
    sort: PropTypes.shape({
        field: PropTypes.string,
        order: PropTypes.oneOf(['ASC', 'DESC']),
    }),
    source: PropTypes.string,
};
ReferenceArrayInput.defaultProps = {
    filter: {},
    filterToQuery: function (searchText) { return (searchText ? { q: searchText } : {}); },
    perPage: 25,
    sort: { field: 'id', order: 'DESC' },
};
var sanitizeRestProps = function (_a) {
    var crudGetMany = _a.crudGetMany, crudGetMatching = _a.crudGetMatching, filterToQuery = _a.filterToQuery, perPage = _a.perPage, referenceSource = _a.referenceSource, rest = __rest(_a, ["crudGetMany", "crudGetMatching", "filterToQuery", "perPage", "referenceSource"]);
    return sanitizeInputRestProps(rest);
};
export var ReferenceArrayInputView = function (_a) {
    var allowEmpty = _a.allowEmpty, basePath = _a.basePath, children = _a.children, choices = _a.choices, className = _a.className, error = _a.error, input = _a.input, loading = _a.loading, isRequired = _a.isRequired, label = _a.label, meta = _a.meta, onChange = _a.onChange, options = _a.options, reference = _a.reference, resource = _a.resource, setFilter = _a.setFilter, setPagination = _a.setPagination, setSort = _a.setSort, source = _a.source, translate = _a.translate, warning = _a.warning, rest = __rest(_a, ["allowEmpty", "basePath", "children", "choices", "className", "error", "input", "loading", "isRequired", "label", "meta", "onChange", "options", "reference", "resource", "setFilter", "setPagination", "setSort", "source", "translate", "warning"]);
    var translatedLabel = translate.apply(void 0, getFieldLabelTranslationArgs({
        label: label,
        resource: resource,
        source: source,
    }));
    if (loading) {
        return (React.createElement(Labeled, { label: translatedLabel, source: source, resource: resource, className: className, isRequired: isRequired },
            React.createElement(LinearProgress, null)));
    }
    if (error) {
        return React.createElement(ReferenceError, { label: translatedLabel, error: error });
    }
    return (React.createElement(ResourceContextProvider, { value: reference }, React.cloneElement(children, __assign(__assign({ allowEmpty: allowEmpty,
        basePath: basePath,
        choices: choices,
        className: className,
        error: error,
        input: input,
        isRequired: isRequired, label: translatedLabel, meta: __assign(__assign({}, meta), { helperText: warning || false }), onChange: onChange,
        options: options,
        resource: resource,
        setFilter: setFilter,
        setPagination: setPagination,
        setSort: setSort,
        source: source, translateChoice: false, limitChoicesToValue: true }, sanitizeRestProps(rest)), children.props))));
};
ReferenceArrayInputView.propTypes = {
    allowEmpty: PropTypes.bool,
    basePath: PropTypes.string,
    children: PropTypes.element,
    choices: PropTypes.array,
    className: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool,
    input: PropTypes.object.isRequired,
    label: PropTypes.string,
    meta: PropTypes.object,
    onChange: PropTypes.func,
    options: PropTypes.object,
    resource: PropTypes.string.isRequired,
    setFilter: PropTypes.func,
    setPagination: PropTypes.func,
    setSort: PropTypes.func,
    source: PropTypes.string,
    translate: PropTypes.func.isRequired,
    warning: PropTypes.string,
};
export default ReferenceArrayInput;
