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
import TableCell from '@material-ui/core/TableCell';
import classnames from 'classnames';
var DatagridCell = React.forwardRef(function (_a, ref) {
    var className = _a.className, field = _a.field, record = _a.record, basePath = _a.basePath, resource = _a.resource, rest = __rest(_a, ["className", "field", "record", "basePath", "resource"]);
    return (React.createElement(TableCell, __assign({ className: classnames(className, field.props.cellClassName), align: field.props.textAlign, ref: ref }, rest), React.cloneElement(field, {
        record: record,
        basePath: field.props.basePath || basePath,
        resource: resource,
    })));
});
DatagridCell.propTypes = {
    className: PropTypes.string,
    field: PropTypes.element,
    // @ts-ignore
    record: PropTypes.object,
    basePath: PropTypes.string,
    resource: PropTypes.string,
};
// wat? TypeScript looses the displayName if we don't set it explicitly
DatagridCell.displayName = 'DatagridCell';
export default DatagridCell;
