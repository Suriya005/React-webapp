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
import get from 'lodash/get';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import sanitizeFieldRestProps from './sanitizeFieldRestProps';
import { fieldPropTypes } from './types';
/**
 * Render a link to a file based on a path contained in a record field
 *
 * @example
 * import { FileField } from 'react-admin';
 *
 * <FileField source="url" title="title" />
 *
 * // renders the record { id: 123, url: 'doc.pdf', title: 'Presentation' } as
 * <div>
 *     <a href="doc.pdf" title="Presentation">Presentation</a>
 * </div>
 */
var FileField = function (props) {
    var className = props.className, classesOverride = props.classes, emptyText = props.emptyText, record = props.record, source = props.source, title = props.title, src = props.src, target = props.target, download = props.download, ping = props.ping, rel = props.rel, rest = __rest(props, ["className", "classes", "emptyText", "record", "source", "title", "src", "target", "download", "ping", "rel"]);
    var sourceValue = get(record, source);
    var classes = useStyles(props);
    if (!sourceValue) {
        return emptyText ? (React.createElement(Typography, __assign({ component: "span", variant: "body2", className: className }, sanitizeFieldRestProps(rest)), emptyText)) : (React.createElement("div", __assign({ className: classnames(classes.root, className) }, sanitizeFieldRestProps(rest))));
    }
    if (Array.isArray(sourceValue)) {
        return (React.createElement("ul", __assign({ className: classnames(classes.root, className) }, sanitizeFieldRestProps(rest)), sourceValue.map(function (file, index) {
            var fileTitleValue = get(file, title) || title;
            var srcValue = get(file, src) || title;
            return (React.createElement("li", { key: index },
                React.createElement("a", { href: srcValue, title: fileTitleValue, target: target, download: download, ping: ping, rel: rel }, fileTitleValue)));
        })));
    }
    var titleValue = get(record, title) || title;
    return (React.createElement("div", __assign({ className: classnames(classes.root, className) }, sanitizeFieldRestProps(rest)),
        React.createElement("a", { href: sourceValue, title: titleValue, target: target, download: download, ping: ping, rel: rel }, titleValue)));
};
FileField.defaultProps = {
    addLabel: true,
};
var useStyles = makeStyles({
    root: { display: 'inline-block' },
}, { name: 'RaFileField' });
FileField.propTypes = __assign(__assign({}, fieldPropTypes), { src: PropTypes.string, title: PropTypes.string, target: PropTypes.string, download: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]), ping: PropTypes.string, rel: PropTypes.string });
export default FileField;
