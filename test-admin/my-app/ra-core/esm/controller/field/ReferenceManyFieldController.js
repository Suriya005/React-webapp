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
import useReferenceManyFieldController from './useReferenceManyFieldController';
/**
 * Render prop version of the useReferenceManyFieldController hook.
 *
 * @see useReferenceManyFieldController
 */
export var ReferenceManyFieldController = function (props) {
    var children = props.children, _a = props.page, page = _a === void 0 ? 1 : _a, _b = props.perPage, perPage = _b === void 0 ? 25 : _b, rest = __rest(props, ["children", "page", "perPage"]);
    var controllerProps = useReferenceManyFieldController(__assign({ page: page,
        perPage: perPage }, rest));
    return children(controllerProps);
};
export default ReferenceManyFieldController;
